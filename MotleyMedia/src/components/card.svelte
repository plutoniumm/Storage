<script>
    export let data;

    const getImage = (img) => {
        let url = img.replaceAll("&amp;", "&");
        if (url.includes("insta") || url.includes("fbcdn"))
            url = `https://proxy.nukesapi.workers.dev/${url}`;

        return url;
    };

    const since = (val) => {
        val = 0 | ((Date.now() - new Date(val)) / 1000);
        let unit,
            length = {
                second: 60,
                minute: 60,
                hour: 24,
                day: 7,
                week: 4.35,
                month: 12,
                year: 10000,
            },
            result;

        for (unit in length) {
            result = val % length[unit];
            if (!(val = 0 | (val / length[unit])))
                return result + " " + (result - 1 ? unit + "s" : unit);
        }
    };

    const getCol = () => {
        if (data.source === "twitter") return "#1DA1F2";
        if (data.source === "behance") return "#053eff";
        if (data.source === "instagram") return "#E1306C";
        if (data.source === "reddit") return "#ff4500";
        return "#fff";
    };
</script>

<article class="rpm-10" style="--col:{getCol()}">
    <a rel="external" target="_blank" class="user ƒ" href={data.user.url}>
        <img
            class="rx20"
            src={getImage(data.user.image)}
            height="36px"
            width="36px"
            alt="{data.user.username} Profile"
            onerror="this.src='/logo.svg';this.onerror=null"
        />
        <div class="abt">
            <div class="fw5">
                <span> {data.user.name}</span>
                <span style="color:#888">@{data.user.username}</span>
            </div>
            <div class="fields">{data.user.fields}</div>
        </div>
    </a>
    <a rel="external" target="_blank" class="content" href={data.url}>
        {#if data.image}
            <img src={getImage(data.image)} class="w-100 rx5" alt={data.name} />
        {/if}
        <p>{data.name.replaceAll(".\n", "")}</p>
        <div class="ƒ">
            <img
                class="rx5 source"
                height="18px"
                width="18px"
                src="/icons/{data.source}.png"
                alt="{data.source} Logo"
            />
            <span style="color:#888">{since(data.time)} ago</span>
        </div>
    </a>
</article>

<style lang="scss">
    a {
        display: block;
    }
    .user {
        img {
            margin-right: 5px;
        }
    }
    .source {
        margin-right: 5px;
    }
    .fields {
        font-size: 0.9em;
    }
    .content {
        margin-top: 10px;
    }
    article {
        border: 2px solid var(--col);
        width: 300px;
        min-height: 200px;
        height: auto;
    }
</style>

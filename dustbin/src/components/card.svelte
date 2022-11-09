<script>
    import { math } from "$lib";

    export let data = {
        type: "article",
        href: "",
        title: "",
        description: "",
        image: "",
    };

    $: innerWidth = 0;

    const widthCalculator = (w) => {
        if (w > 1200) return "20%";
        if (w > 991) return "25%";
        if (w > 768) return "33.33%";
        if (w > 600) return "50%";
        return "100%";
    };
</script>

<svelte:window bind:innerWidth />

<a
    class:stalingrad={!data.image}
    href={data.href}
    target="_blank"
    class="ƒ-col rx5 m5"
    style={`--w:${widthCalculator(innerWidth)}`}
>
    {#if data.image}
        <div class="img-cont p-rel">
            <img class="w-100" src={data.image} alt={data.title} />
            <div
                class="overlay ƒ ∆-ct w-100 h-100 p-abs blur"
                style="--sz:4;--bg:#0004;align-items:center;"
            >
                {#if data.type === "video"}
                    <svg class="mx-a p20" viewBox="0 0 32 32" fill="#000a">
                        <path d="m 10 2 l 0 28 l 18 -14 z" />
                    </svg>
                {/if}
            </div>
        </div>
    {/if}
    <div class="body p-rel">
        <div class="title fw4">{@html data.main}</div>
        {#if data.support}
            <div class="description">
                {@html data.support.slice(0, 280)}
            </div>
        {/if}
        {#if data.source}
            <span class="o-0">
                {math.time.format(data.date)} / {data.type} -
                {data.source.general}: {data.source.special}
            </span>
        {/if}
    </div>
</a>

<style type="text/scss">
    a {
        overflow: hidden;
        width: calc(var(--w) - 10px);
        background: #444;
    }
    .title,
    .description {
        text-transform: capitalize;
    }
    .body {
        padding: 5px 10px;
    }
    .description {
        padding-top: 5px;
        color: #eee;
    }
    .p-abs {
        top: 0;
        left: 0;
        z-index: 1;
    }
    img {
        aspect-ratio: 16/9;
    }
    svg {
        width: 32px;
        height: 32px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 0;
        background: #fffa;
        border-radius: 100px;
    }
    @media (max-width: 1200px) {
        a {
            --w: 20%;
        }
    }
    @media (max-width: 991px) {
        a {
            --w: 25%;
        }
    }
    @media (max-width: 768px) {
        a {
            --w: 33%;
        }
    }
    @media (max-width: 600px) {
        a {
            --w: 50%;
        }
    }
    @media (max-width: 400px) {
        a {
            --w: 100%;
        }
    }
</style>

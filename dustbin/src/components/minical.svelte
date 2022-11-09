<script>
    import Struct from "./stalincard.svelte";
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ].map((e) => e.slice(0, 3));

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const date = new Date();

    const pad = (t) => (t <= 9 ? `0${t}` : t);

    const dateProcessor = (index) => {
        const idx = index - date.getDay() + 1;
        const d2 = new Date();
        d2.setDate(d2.getDate() + idx);
        return `${days[d2.getDay()]}<br/><br/> ${pad(d2.getDate())}`;
    };
</script>

<Struct title={months[date.getMonth() - 1]}>
    <div class="ƒ" slot="body">
        {#each days as day, idx}
            <div class="part †c" class:hl={day === days[date.getDay() - 1]}>
                {@html dateProcessor(idx)}
            </div>
        {/each}
    </div>
</Struct>

<style>
    .part {
        padding: 5px 7px;
    }
    .hl {
        background: #fff8;
        border-radius: 6px;
    }
</style>

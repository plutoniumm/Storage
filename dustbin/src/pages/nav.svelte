<script>
    export let starter;

    import Struct from "$components/stalincard.svelte";
    import MiniCal from "$components/minical.svelte";
</script>

<nav class="p-fix w-100 †c blur">
    <button class="b0" on:click={starter}>
        <!-- <button class="b0" on:click={() => console.log(1)}> -->
        <svg class="p10 p-rel stalingrad" viewBox="0 0 32 32">
            <path
                d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
            />
        </svg>
    </button>
</nav>
<section class="ƒ p-rel p5 ∆-bw">
    <MiniCal />
    <div class="p10" style="font-size:5rem;">💩🥫=🍆👤</div>
    <Struct title="Active Engines">
        <div slot="body" class="ƒ ƒ∑ ∆-ar p5">
            <img
                class="blur rx10 m2 icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="YT"
            />
            {#each ["Wikipedia", "Reddit", "Amos"] as engine}
                <img
                    class="blur rx10 m2 icon"
                    src={`https://amos.nukes.in/icons/${engine}.svg`}
                    alt={engine}
                />
            {/each}
        </div>
    </Struct>
</section>

<style type="text/scss">
    nav {
        bottom: 0;
        --sz: 16px;
        --bg: #4448;
        z-index: 10;
        box-shadow: 0 0 10px #0008;
    }
    svg {
        cursor: pointer;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
        height: 32px;
        width: 32px;
        stroke: #fff;
        fill: none;
        border-radius: 100px;
        top: -1.33rem;
        box-shadow: 0 4px 10px -5px rgba(130, 0, 255, 1);
        transition: transform 0.5s ease-in-out;
        &:hover {
            transform: rotate(180deg);
        }
    }
    .icon {
        --bg: #fff8;
        width: 40px;
        height: 40px;
    }
</style>

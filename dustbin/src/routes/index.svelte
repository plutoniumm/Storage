<script>
  import Quick from "$pages/quick.svelte";
  import Nav from "$pages/nav.svelte";
  import Card from "$components/card.svelte";
  import { onMount } from "svelte";
  import startup from "./startup";

  import { main_stack } from "$lib/store";

  onMount(startup);
</script>

<svelte:head>
  <!-- Generic -->
  <link rel="preconnect" href="https://en.wikipedia.org/" />
  <link rel="preconnect" href="https://github.com" />
  <!-- APIS -->
  <link rel="preconnect" href="https://reddit.com" />
  <link rel="preconnect" href="https://youtube.com" />
  <!-- REDIRECTS -->
  <link rel="preconnect" href="https://www.youtube-nocookie.com" />
</svelte:head>

<Nav starter={startup} />
<Quick />
<section class="ƒ ƒ∑">
  <h2 class="w-100">Main</h2>
  {#if $main_stack.length > 1}
    {#each $main_stack.sort((a, b) => a.key - b.key) as el}
      <Card data={el} />
    {/each}
  {:else}
    <div class="w-100 †c">
      <svg
        width="512"
        height="512"
        viewbox="-10 -10 532 532"
        font-family="helvetica"
        font-weight="700"
        font-size="500"
      >
        <defs>
          <linearGradient id="a" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0" stop-color="#78f" />
            <stop offset=".25" stop-color="#60f" />
            <stop offset=".5" stop-color="#60d" />
            <stop offset="1" stop-color="#d6b" />
          </linearGradient>
        </defs>
        <circle cx="256" cy="256" r="256" fill="url(#a)" />

        <g id="i1">
          <text x="100" y="400" fill="#fff">i</text>
        </g>
        <g id="i2">
          <text
            x="300"
            y="400"
            fill="#fff"
            transform="rotate(180) translate(-700,-510)">i</text
          >
        </g>
      </svg>
    </div>
  {/if}
</section>
<section class="p20 m20">&nbsp;</section>

<style type="text/scss">
  :global(.stalingrad) {
    background: linear-gradient(60deg, #78f, #60f, #60d, #d6b) !important;
    box-shadow: inset 0 0 2000px rgba(#888, 0.2);
  }
  :global(h2) {
    padding: 0 5px;
  }
  svg {
    --style: cubic-bezier(0.2, 0.8, 0.2, 1);
    width: 200px;
    height: 200px;
    animation: rotate 2s infinite var(--style);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(var(--dir));
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  #i1 {
    --dir: 35px;
    animation: bounce 2s infinite ease;
  }
  #i2 {
    --dir: -35px;
    animation: bounce 2s infinite ease;
  }
</style>

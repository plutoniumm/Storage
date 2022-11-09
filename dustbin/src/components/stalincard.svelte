<script>
    export let //
        href = null,
        title = "";
</script>

{#if href}
    <a {href} target="_blank" class="p10 rx10 stalingrad m5">
        <slot name="body" />
    </a>
{:else}
    <div class="p10 rx10 stalingrad">
        <div class="p5 fw4" style="font-size:1.25em">{title}</div>
        <slot name="body" />
    </div>
{/if}

<style>
    .stalingrad {
        width: 320px;
    }
</style>

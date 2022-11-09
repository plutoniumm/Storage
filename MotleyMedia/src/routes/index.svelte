<script>
	import Card from "$UI/card.svelte";
	import { onMount } from "svelte";

	const subscriptions = [
		{ type: "instagram", id: "stasya_illustration" },
		{ type: "instagram", id: "noealzii" },
		{ type: "instagram", id: "twotwosix.studio" },
		{ type: "instagram", id: "yaap.official" },
		{ type: "instagram", id: "bojackhorsemanquotes" },
		{ type: "instagram", id: "holosomnia" },
		{ type: "instagram", id: "f1visualized" },
		{ type: "instagram", id: "india.in.pixels" },
		{ type: "instagram", id: "digiartique" },
		{ type: "instagram", id: "art_saransh" },
		{ type: "behance", id: "isharastogi3" },
		{ type: "behance", id: "yaminikhullar" },
	];

	let promises;
	onMount(() => {
		promises = Promise.all(
			subscriptions.map((e) =>
				fetch(`http://127.0.0.1:3001/${e.type}/${e.id}`).then((r) =>
					r.json()
				)
			)
		);
	});
</script>

<section class="main ƒ ƒ∑ ∆-bw">
	{#await promises then response}
		{@const data = response?.flat(1).sort((a, b) => a.time - b.time) || []}

		{#each data as item}
			<Card data={item} />
		{/each}
	{/await}
</section>

<style>
	section {
	}
</style>

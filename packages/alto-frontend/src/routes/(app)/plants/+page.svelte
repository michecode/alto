<script lang="ts">
	import type { PageData } from './$types';
	import FilterBar from '$lib/FilterBar.svelte';
	import PlantGrid from '$lib/PlantGrid.svelte';

	export let data: PageData;
	const { plants } = data;
</script>

<main class="flex mx-4">
	<div class="sticky top-0 w-1/6 h-[89.5vh] bg-white drop-shadow-lg rounded-2xl flex-shrink-0">
		<FilterBar />
	</div>
	<div class="flex-grow ml-4"><PlantGrid {plants} /></div>
</main>

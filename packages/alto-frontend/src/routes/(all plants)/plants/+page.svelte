<script lang="ts">
	import type { PageData } from './$types';
	import FilterBar from '$lib/FilterBar.svelte';
	import PlantGrid from '$lib/PlantGrid.svelte';

	export let data: PageData;
	const { plants } = data;
</script>

<main class="flex mx-4">
	<div class="w-1/6 bg-white drop-shadow-lg rounded-2xl flex-shrink-0">
		<FilterBar />
	</div>
	<div class="flex-grow ml-4"><PlantGrid {plants} /></div>
</main>

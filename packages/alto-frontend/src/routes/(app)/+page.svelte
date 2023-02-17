<script lang="ts">
	import type { PageData } from './$types';
	import Autocomplete from '$lib/Autocomplete.svelte';

	export let data: PageData;
	const { searchCollection } = data;
</script>

<div class="flex flex-col relative mt-24 xl:mt-64">
	<h1 class="text-8xl opacity-75 font-serif font-black text-center hidden lg:block">alto</h1>
	<h3 class="text-6xl opacity-75 font-serif font-black text-center">
		Your Grow Guide for Every Green
	</h3>
	<Autocomplete plants={searchCollection} />
</div>

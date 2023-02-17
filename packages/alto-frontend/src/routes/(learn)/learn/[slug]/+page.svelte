<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { article } = data;

	const convertHeader = (header: string) => {
		return header.toLowerCase().replaceAll(' ', '-').replaceAll("'", '-');
	};
</script>

<article class="mx-4 lg:mx-[15%] my-4 overflow-scroll">
	<div class="lg:h-96 mb-4">
		{#if article.imageUrl}
			<img
				src={article.imageUrl}
				alt={article.imageAltText}
				class="rounded-3xl h-full w-full mx-auto object-cover drop-shadow-xl"
			/>
		{/if}
	</div>
	<h1 class="font-serif text-4xl font-black inline">{article.category}</h1>
	<p class="inline">{article.intro}</p>
	{#each article.sections as section}
		<div id={`#${convertHeader(section.header)}`} class="my-4">
			<h3 class="font-serif font-semibold text-2xl">{section.header}</h3>
			<p>{section.body}</p>
		</div>
	{/each}
</article>

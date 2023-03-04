<script lang="ts">
	import type { LayoutData } from './$types';
	import SearchModal from '$lib/SearchModal.svelte';
	import { isMacLike } from '$lib/utils/helpers';
	import TargetMenu from '$lib/TargetMenu.svelte';

	export let data: LayoutData;
	const { searchCollection } = data;

	let isMac = false;
	if (!import.meta.env.SSR) {
		isMac = isMacLike();
	}

	const handleKeyboard = (e: KeyboardEvent) => {
		// Works for all systems.
		if (e.key === 'k' && e.ctrlKey) {
			e.stopPropagation();
			e.preventDefault();
			openModal();
			// Check macOS
		} else if (isMacLike()) {
			if (e.key === 'k' && e.metaKey) {
				e.stopPropagation();
				e.preventDefault();
				openModal();
			}
		}
	};

	const openModal = () => {
		const dialogEl: HTMLElement | null = document.getElementById('search-modal');
		if (!dialogEl) {
			return;
		}
		(dialogEl as HTMLDialogElement).showModal();
	};
</script>

<svelte:window on:keydown={handleKeyboard} />

<header class="mx-6 lg:mx-24">
	<div class="hidden lg:flex w-full pt-4 mb-4 dark:text-black">
		<a href="/" class="dark:text-white mr-4">
			<h1 class="font-serif font-black text-4xl hover:opacity-80">alto</h1>
		</a>
		<button
			class="flex items-center justify-between bg-white opacity-75 drop-shadow-lg rounded-3xl flex-grow
			hover:opacity-100 hover:cursor-pointer"
			on:click={openModal}
		>
			<h1 class="px-4 font-serif font-black text-md">Quick Search...</h1>
			<h1 class="border-black border-[1px] rounded-md p-1 my-2 mx-5 text-xs drop-shadow-lg">
				<div class="inline-flex">
					{#if isMac}
						<p>&#8984;</p>
					{:else}
						<p>CTRL&nbsp;</p>
					{/if}
					K
				</div>
			</h1>
		</button>
		<TargetMenu />
	</div>
	<!-- Mobile Sticky Version -->
	<div
		class="fixed top-0 left-0 flex lg:hidden w-full mt-4 px-4 bg-offwhite dark:bg-eerie dark:text-black"
	>
		<button
			class="flex items-center justify-between bg-white opacity-75 drop-shadow-lg rounded-3xl flex-grow"
			on:click={openModal}
		>
			<h1 class="px-4 font-serif font-black text-md">Quick Search</h1>
		</button>
		<TargetMenu />
	</div>
</header>
<main class="mx-6 lg:mx-24">
	<slot />
</main>

<SearchModal {searchCollection} />

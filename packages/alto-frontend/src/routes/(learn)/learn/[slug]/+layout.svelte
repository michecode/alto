<script lang="ts">
	// import HomeNavigation from '../components/navigation/HomeNavigation.svelte';
	import type { LayoutData } from './$types';
	import Icon from '$lib/Icon.svelte';
	import Drawer from '$lib/Drawer.svelte';
	import { toggleTheme, isDarkMode } from '$lib/utils/helpers';
	import colors from '$lib/utils/colors';
	import { onMount } from 'svelte';
	import Sidebar from './Sidebar.svelte';

	export let data: LayoutData;
	const { articles } = data;

	let isDark = isDarkMode();
	let open = false;
	let anchorEl: HTMLElement | null;
	let iconColor = isDark ? colors.black : colors.byz;

	const handleClick = () => {
		open = !open;
	};

	const handleTheme = () => {
		toggleTheme();
		isDark = isDarkMode();
	};

	onMount(() => {
		anchorEl = document.getElementById('home-menu-button');
	});
</script>

<div class="flex flex-col h-screen overflow-hidden">
	<header
		class="
			flex justify-between items-center py-4 px-8
			border-b-2 border-byz dark:border-white bg-offwhite dark:bg-eerie z-50"
		aria-controls="navbar"
	>
		<a href="/" class="">
			<h1 class="font-serif font-black text-4xl hover:opacity-80">alto</h1>
		</a>
		<button class="lg:hidden" on:click|stopPropagation={handleClick} id="home-menu-button">
			<Icon type="menu" fill={iconColor} width="36px" height="36px" />
		</button>
		<div class="hidden lg:flex">
			<h1 class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80">
				<a href="/plants">plants</a>
			</h1>
			<h1 class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80">
				<a href="/learn/light">learn</a>
			</h1>
			<button on:click={handleTheme} class="hover:opacity-80">
				{#if isDark}
					<Icon type="thickSun" focusable fill={colors.white} />
				{:else}
					<Icon type="thickMoon" focusable fill={colors.byz} />
				{/if}
			</button>
		</div>
	</header>
	<div class="flex">
		<Sidebar {articles} />
		<div class="flex-grow">
			<slot />
		</div>
	</div>
</div>
<Drawer bind:open {anchorEl} />

<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import colors from '$lib/utils/colors';

	export let searchCollection: SearchCollection = [];
	let inputValue = '';
	let filteredPlants: SearchCollection = [];
	let hiLiteIndex = -1;

	$: if (!inputValue) {
		filteredPlants = [];
		hiLiteIndex = -1;
	}
	$: hiLitedPlant = filteredPlants[hiLiteIndex] ?? { name: '', slug: '' };

	const filterPlants = (_: Event | null, endIndex: number = 10) => {
		if (!inputValue) return;
		filteredPlants = searchCollection.filter((plant) => {
			return plant.name.toLowerCase().includes(inputValue.toLowerCase());
		});
		filteredPlants = filteredPlants.slice(0, endIndex);
	};

	const navigate = (target: string) => {
		window.location.href = `/plants/${target}`;
	};

	const navigateList = (e: KeyboardEvent) => {
		const max = filteredPlants.length - 1;
		if (e.key === 'ArrowDown') {
			hiLiteIndex < max ? (hiLiteIndex += 1) : (hiLiteIndex = 0);
		} else if (e.key === 'ArrowUp') {
			hiLiteIndex === 0 || hiLiteIndex === -1 ? (hiLiteIndex = max) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			navigate(filteredPlants[hiLiteIndex].slug);
		} else {
			return;
		}
	};

	const handleClick = (e: MouseEvent) => {
		if (!e || !e.target) {
			return;
		}
		const eventTarget = e.target as HTMLElement;

		if (eventTarget.tagName !== 'DIALOG')
			//This prevents issues with forms
			return;

		const rect = eventTarget.getBoundingClientRect();

		const clickedInDialog =
			rect.top <= e.clientY &&
			e.clientY <= rect.top + rect.height &&
			rect.left <= e.clientX &&
			e.clientX <= rect.left + rect.width;

		if (clickedInDialog === false) (eventTarget as HTMLDialogElement).close();
	};

	const handleClose = () => {
		const dialogEl = document.getElementById('search-modal') as HTMLDialogElement | null;
		if (!dialogEl) {
			console.error('SearchModal: Failed to get dialog element, cannot handle close');
			return;
		}
		dialogEl.close();
	};
</script>

<!-- Key event is handled automatically by dialog element (esc to exit) -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	id="search-modal"
	class="rounded-2xl min-h-[95%] lg:min-w-[50%] lg:max-w-[45rem] lg:min-h-[75%] lg:max-h-[95%] backdrop:backdrop-blur-md"
	on:click={handleClick}
>
	<div class="flex items-center">
		<Icon type="search" fill={colors.black} />
		<input
			type="text"
			placeholder="Search for Plants"
			class="w-full p-4 rounded-2xl flex-grow focus:outline-none"
			bind:value={inputValue}
			on:input={filterPlants}
			on:keydown={navigateList}
		/>
		<button class="border-black border-[1px] rounded-md p-1 text-sm" on:click={handleClose}
			>ESC</button
		>
	</div>
	{#if filteredPlants.length > 0}
		<hr />
		<ul class="m-4">
			{#each filteredPlants as { name, slug }, index}
				<li
					class={`py-1 rounded-lg ${hiLitedPlant.name === name ? 'bg-black text-white' : ''}`}
					on:click={() => navigate(slug)}
					on:mouseenter={() => (hiLiteIndex = index)}
					on:keydown={navigateList}
				>
					<p class="mx-2">{name}</p>
				</li>
			{/each}
		</ul>
	{/if}
</dialog>

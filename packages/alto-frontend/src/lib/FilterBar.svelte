<script lang="ts">
	import { filters } from '$lib/utils/stores';

	const clearFilters = () => {
		$filters = {
			classification: {
				palm: false,
				succulent: false,
				cactus: false,
				calathea: false,
				tree: false,
				orchid: false
			},
			difficulty: 'All',
			light: {
				low: false,
				indirect: false,
				direct: false
			},
			water: {
				dry: false,
				balanced: false,
				wet: false
			},
			toxic: {
				petFriendly: false
			}
		};
	};
</script>

<div
	class="flex flex-col h-full mt-2 mx-2 font-serif font-bold text-xl dark:text-byz overflow-scroll"
>
	<div class="my-2">
		<h3 class="">Classification</h3>
		<div class="grid grid-cols-2 font-sans text-base">
			<label>
				<input type="checkbox" bind:checked={$filters.classification.palm} />
				Palms
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.classification.succulent} />
				Succulents
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.classification.cactus} />
				Cacti
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.classification.calathea} />
				Calathea
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.classification.tree} />
				Trees
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.classification.orchid} />
				Orchids
			</label>
		</div>
	</div>
	<div class="my-2">
		<h3>Difficulty</h3>
		<div class="flex flex-col font-sans text-base">
			<label>
				<input type="radio" name="difficulty" value="All" bind:group={$filters.difficulty} />
				All
			</label>
			<label>
				<input type="radio" name="difficulty" value="Effortless" bind:group={$filters.difficulty} />
				Effortless
			</label>
			<label>
				<input type="radio" name="difficulty" value="Easy" bind:group={$filters.difficulty} />
				Easy
			</label>
			<label>
				<input
					type="radio"
					name="difficulty"
					value="Intermediate"
					bind:group={$filters.difficulty}
				/>
				Intermediate
			</label>
			<label>
				<input type="radio" name="difficulty" value="Hard" bind:group={$filters.difficulty} />
				Hard
			</label>
		</div>
	</div>
	<div class="my-2">
		<h3>Light</h3>
		<div class="flex flex-col font-sans text-base">
			<label>
				<input type="checkbox" bind:checked={$filters.light.low} />
				Low / Artificial
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.light.indirect} />
				Indirect Sun
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.light.direct} />
				Direct Sun
			</label>
		</div>
	</div>
	<div class="my-2">
		<h3>Water</h3>
		<div class="flex flex-col font-sans text-base">
			<label>
				<input type="checkbox" bind:checked={$filters.water.dry} />
				Dry
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.water.balanced} />
				Balanced
			</label>
			<label>
				<input type="checkbox" bind:checked={$filters.water.wet} />
				Wet
			</label>
		</div>
	</div>
	<div class="my-2">
		<h3>Toxic</h3>
		<div class="flex flex-col font-sans text-base">
			<label>
				<input type="checkbox" bind:checked={$filters.toxic.petFriendly} />
				Pet Friendly
			</label>
		</div>
	</div>
	<button
		class="bg-byz dark:bg-eerie text-white p-2 w-full rounded-lg mt-auto mb-4 transition ease-in-out delay-50 hover:opacity-80 "
		on:click={clearFilters}>Clear Filters</button
	>
</div>

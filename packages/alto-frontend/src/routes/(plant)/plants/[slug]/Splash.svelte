<script lang="ts">
	import PeekBar from './PeekBar.svelte';

	export let plant: Plant;
</script>

<div class="flex flex-col lg:flex-row min-h-[65vh] items-center mt-20 lg:mt-12 mx-6 lg:mx-24">
	<div class="w-full lg:w-2/5 shrink-0">
		<img
			src={`${plant.imageUrl}?w=1600&h=1200&fm=webp`}
			class="max-w-full max-h-[75vh] mx-auto"
			alt={`image of a ${plant.name}`}
		/>
	</div>
	<div class="flex flex-col w-full lg:w-3/4">
		<h1 class="font-serif font-black text-6xl">{plant.name}</h1>
		<h6 class="italic font-light">{plant.botanicalName}</h6>
		<div class="flex flex-col space-y-6 mt-8">
			<div>
				<PeekBar iconKey="star" peekAmount={4} />
				<p>
					This plant is for experts. You'll need to maintain very specific conditions for this plant
					to thrive.
				</p>
			</div>
			<div>
				<PeekBar iconKey="thickSun" peekAmount={3} />
				<p>Requires full direct sunlight.</p>
			</div>
			<div>
				<PeekBar iconKey="waterDrop" peekAmount={3} />
				<p>Requires frequent watering. (Move us into tooltips!)</p>
			</div>
		</div>
	</div>
</div>

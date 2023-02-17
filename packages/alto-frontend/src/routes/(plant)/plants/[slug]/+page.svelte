<script lang="ts">
	import type { PageData } from './$types';
	import PlantSection from './PlantSection.svelte';
	import QuickCard from './QuickCard.svelte';
	import PlantNavigation from './PlantNavigation.svelte';

	export let data: PageData;
	const { plant } = data;

	const cardProps = {
		title: plant.name,
		botanical: plant.botanicalName,
		difficulty: plant.difficulty,
		light: plant.lightBar,
		water: plant.waterBar
	};
</script>

<svelte:head>
	<title>{plant.name}</title>
	<meta property="og:image" content={`${plant.imageUrl}?w=1600&h=1200&fm=webp`} />
</svelte:head>

<article class="flex flex-col lg:flex-row mt-12 lg:mt-0">
	<!-- Left Column -->
	<div class="lg:shrink-0 lg:w-1/4 flex flex-col lg:mr-4">
		<div class="lg:sticky lg:top-0">
			<img
				src={`${plant.imageUrl}?w=1600&h=1200&fm=webp`}
				class="my-4"
				alt={`image of ${plant.name}`}
			/>
			<QuickCard {...cardProps} />
		</div>
	</div>
	<!-- Right Column -->
	<div class="">
		<div />
		<!-- Summary -->
		<PlantSection title="About" body={plant.summary} />
		<PlantSection title="Light" body={plant.light} />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque
			penatibus et. Cursus turpis massa tincidunt dui ut. Habitasse platea dictumst quisque sagittis
			purus sit amet volutpat consequat. Sodales ut eu sem integer vitae justo eget magna. Faucibus
			in ornare quam viverra orci sagittis. Nibh cras pulvinar mattis nunc sed blandit libero. Nunc
			eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ullamcorper morbi tincidunt ornare
			massa eget. Non blandit massa enim nec dui nunc mattis enim. Elementum integer enim neque
			volutpat ac tincidunt vitae semper. Tristique sollicitudin nibh sit amet commodo nulla
			facilisi nullam. Imperdiet sed euismod nisi porta. Eu scelerisque felis imperdiet proin
			fermentum leo vel orci. Nisl vel pretium lectus quam id. Consequat nisl vel pretium lectus
			quam id leo in.
		</p>
		<PlantSection title="Water" body={plant.water} />
		<PlantSection title="Fertilizing" body={plant.fertilizing} />
		<PlantSection title="Humidity" body={plant.humidity} />
		<PlantSection title="Pests" body={plant.pests} />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque
			penatibus et. Cursus turpis massa tincidunt dui ut. Habitasse platea dictumst quisque sagittis
			purus sit amet volutpat consequat. Sodales ut eu sem integer vitae justo eget magna. Faucibus
			in ornare quam viverra orci sagittis. Nibh cras pulvinar mattis nunc sed blandit libero. Nunc
			eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ullamcorper morbi tincidunt ornare
			massa eget. Non blandit massa enim nec dui nunc mattis enim. Elementum integer enim neque
			volutpat ac tincidunt vitae semper. Tristique sollicitudin nibh sit amet commodo nulla
			facilisi nullam. Imperdiet sed euismod nisi porta. Eu scelerisque felis imperdiet proin
			fermentum leo vel orci. Nisl vel pretium lectus quam id. Consequat nisl vel pretium lectus
			quam id leo in.
		</p>
		<PlantSection title="Pruning" body={plant.pruning} />
		<PlantSection title="Propagation" body={plant.propagation} />
		<PlantSection title="Repotting" body={plant.repotting} />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque
			penatibus et. Cursus turpis massa tincidunt dui ut. Habitasse platea dictumst quisque sagittis
			purus sit amet volutpat consequat. Sodales ut eu sem integer vitae justo eget magna. Faucibus
			in ornare quam viverra orci sagittis. Nibh cras pulvinar mattis nunc sed blandit libero. Nunc
			eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ullamcorper morbi tincidunt ornare
			massa eget. Non blandit massa enim nec dui nunc mattis enim. Elementum integer enim neque
			volutpat ac tincidunt vitae semper. Tristique sollicitudin nibh sit amet commodo nulla
			facilisi nullam. Imperdiet sed euismod nisi porta. Eu scelerisque felis imperdiet proin
			fermentum leo vel orci. Nisl vel pretium lectus quam id. Consequat nisl vel pretium lectus
			quam id leo in.
		</p>
	</div>
	<!-- Mobile Nav Float Here -->
</article>

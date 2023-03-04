<script lang="ts">
	import { svgPath } from 'blobs/v2';
	import { onMount } from 'svelte';
	export let seed: string = 'flopslay420';
	export let image: string = '/images/iridescent-gradient.png';

	const size = 750;
	const path = svgPath({
		seed,
		extraPoints: 5,
		randomness: 100,
		size
	});

	let [screenWidth, screenHeight] = [0, 0];
	onMount(() => {
		screenHeight = window.screen.height * 0.8;
		screenWidth = window.screen.width;
	});
</script>

<div class="absolute top-0 left-0 -z-50 h-[80vh] w-screen">
	<svg
		viewBox={`0 0 ${screenWidth} ${screenHeight}`}
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="100%"
		id="blobSvg"
	>
		<defs>
			<clipPath id="shape">
				<path id="blob" d={path} fill="#d1d8e0" />
			</clipPath>
		</defs>
		<image
			x="0"
			y="0"
			width="100%"
			height="100%"
			clip-path="url(#shape)"
			xlink:href={image}
			preserveAspectRatio="none"
		/>
	</svg>
</div>

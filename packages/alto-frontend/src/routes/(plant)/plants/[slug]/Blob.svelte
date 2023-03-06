<script lang="ts">
	import { svgPath } from 'blobs/v2';
	import { onMount } from 'svelte';
	import { isMobile } from '$lib/utils/helpers';
	export let seed: string = 'flopslay420';

	const size = 1000;
	const path = svgPath({
		seed,
		extraPoints: 3,
		randomness: 25,
		size
	});

	let [screenWidth, screenHeight] = [0, 0];
	let onMobile = false;
	onMount(() => {
		onMobile = isMobile();
		screenHeight = window.screen.height;
		screenWidth = window.screen.width;
	});
</script>

<!-- xmlns:svgjs="http://svgjs.dev/svgjs" -->
<svg
	class="absolute left-0 top-0 -z-50"
	xmlns="http://www.w3.org/2000/svg"
	version="1.1"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox={`0 ${onMobile ? '0' : '100'} ${screenWidth} ${screenHeight}`}
	width={screenWidth}
	height={screenHeight}
>
	<defs>
		<mask id="mask">
			<svg
				viewBox={`0 ${onMobile ? '200' : '0'} ${screenWidth} ${screenHeight}`}
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width={screenWidth}
				height={screenHeight}
			>
				<path id="blob" d={path} fill="white" />
			</svg>
		</mask>
		<linearGradient
			gradientTransform="rotate(-150, 0.5, 0.5)"
			x1="50%"
			y1="0%"
			x2="50%"
			y2="100%"
			id="gggrain-gradient2"
		>
			<stop stop-color="hsla(23, 89%, 47%, 0.60)" stop-opacity="1" offset="-0%" />
			<stop stop-color="rgba(255,255,255,0)" stop-opacity="0" offset="100%" />
		</linearGradient>
		<linearGradient
			gradientTransform="rotate(150, 0.5, 0.5)"
			x1="50%"
			y1="0%"
			x2="50%"
			y2="100%"
			id="gggrain-gradient3"
		>
			<stop stop-color="hsl(87, 97%, 24%)" stop-opacity="1" />
			<stop stop-color="rgba(255,255,255,0)" stop-opacity="0" offset="100%" />
		</linearGradient>
		<filter
			id="gggrain-filter"
			x="-20%"
			y="-20%"
			width="140%"
			height="140%"
			filterUnits="objectBoundingBox"
			primitiveUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.88"
				numOctaves="2"
				seed="5"
				stitchTiles="stitch"
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				result="turbulence"
			/>
			<feColorMatrix
				type="saturate"
				values="0"
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="turbulence"
				result="colormatrix"
			/>
			<feComponentTransfer
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="colormatrix"
				result="componentTransfer"
			>
				<feFuncR type="linear" slope="3" />
				<feFuncG type="linear" slope="3" />
				<feFuncB type="linear" slope="3" />
			</feComponentTransfer>
			<feColorMatrix
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="componentTransfer"
				result="colormatrix2"
				type="matrix"
				values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 21 -13"
			/>
		</filter>
	</defs>
	<g mask="url(#mask)">
		<rect width="100%" height="100%" fill="hsl(16, 60%, 58%)" />
		<rect width="100%" height="100%" fill="url(#gggrain-gradient3)" />
		<rect width="100%" height="100%" fill="url(#gggrain-gradient2)" />
		<rect
			width="100%"
			height="100%"
			fill="transparent"
			filter="url(#gggrain-filter)"
			opacity="0.52"
			style="mix-blend-mode: soft-light"
		/>
	</g>
</svg>

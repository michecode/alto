<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { isDarkMode } from '$lib/utils/helpers';
	import colors from '$lib/utils/colors';

	export let iconKey: string;
	export let peekAmount: number;

	const percentage = (peekAmount / 5) * 100;
</script>

<div class="flex items-center space-x-2">
	<Icon type={iconKey} height="32px" width="32px" fill={isDarkMode() ? colors.white : colors.byz} />
	<div class="bg-white h-8 w-96 rounded-2xl z-10 shadow-xl relative">
		<div class={`bg-byz h-[75%] w-11/12 rounded-2xl z-20 absolute top-[3px] left-[6px]`} />
	</div>
</div>

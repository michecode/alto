<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<div class="relative top-0">
	<div class="overflow-hidden -z-50 absolute blur-[200px] w-11/12 left-0 right-0 top-0 mx-auto">
		<div class="h-0 pt-[100vh]">
			<div class="absolute top-0 left-0 w-full h-[150vh]">
				<div class="w-full h-full rounded-[50%] bg-gradient-0 from-byz to-silver/20" />
			</div>
		</div>
	</div>
</div>
<Header />
<slot />

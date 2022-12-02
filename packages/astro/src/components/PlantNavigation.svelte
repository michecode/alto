<script lang="ts">
  import { isMacLike } from '../utils/utils';
  import TargetMenu from './TargetMenu.svelte';

  export let placeholder = 'Current Plant';

  const handleKeyboard = (e: KeyboardEvent) => {
    // Works for all systems.
    if (e.key === 'k' && e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
      // Check macOS
    } else if (isMacLike()) {
      if (e.key === 'k' && e.metaKey) {
        e.stopPropagation();
        e.preventDefault();
      }
    } else {
      console.log('yas');
    }
  };
</script>

<svelte:window on:keydown={handleKeyboard} />

<div class="flex w-full pt-4 mb-4 bg-offwhite dark:bg-eerie dark:text-black">
  <div
    class="flex items-center justify-between bg-white opacity-75 drop-shadow-lg rounded-3xl flex-grow
    hover:opacity-100 hover:cursor-pointer"
  >
    <h1 class="px-4 font-serif font-black text-md">{placeholder}</h1>
    <h1
      class="border-black border-[1px] rounded-md p-1 my-2 mx-5 text-xs drop-shadow-lg"
    >
      &#8984;K
    </h1>
  </div>
  <TargetMenu />
</div>

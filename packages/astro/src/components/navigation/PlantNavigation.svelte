<script lang="ts">
  import { isMacLike } from '../../utils/utils';
  import TargetMenu from './TargetMenu.svelte';

  export let placeholder = 'Current Plant';
  let isMac = false;
  if (typeof navigator !== 'undefined') {
    isMac = isMacLike();
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    // Works for all systems.
    if (e.key === 'k' && e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
      openModal();
      // Check macOS
    } else if (isMacLike()) {
      if (e.key === 'k' && e.metaKey) {
        e.stopPropagation();
        e.preventDefault();
        openModal();
      }
    }
  };

  const openModal = () => {
    const dialogEl: HTMLElement | null =
      document.getElementById('search-modal');
    if (!dialogEl) {
      return;
    }
    (dialogEl as HTMLDialogElement).showModal();
  };
</script>

<svelte:window on:keydown={handleKeyboard} />

<div
  class="hidden lg:flex w-full pt-4 mb-4 bg-offwhite dark:bg-eerie dark:text-black"
>
  <button
    class="flex items-center justify-between bg-white opacity-75 drop-shadow-lg rounded-3xl flex-grow
    hover:opacity-100 hover:cursor-pointer"
    on:click={openModal}
  >
    <h1 class="px-4 font-serif font-black text-md">{placeholder}</h1>
    <h1
      class="border-black border-[1px] rounded-md p-1 my-2 mx-5 text-xs drop-shadow-lg"
    >
      <div class="inline-flex">
        {#if isMac}
          <p>&#8984;</p>
        {:else}
          <p>CTRL&nbsp;</p>
        {/if}
        K
      </div>
    </h1>
  </button>
  <TargetMenu />
</div>

<!-- Mobile Sticky Version -->
<div
  class="fixed top-0 left-0 flex lg:hidden w-full mt-4 px-4 bg-offwhite dark:bg-eerie dark:text-black"
>
  <button
    class="flex items-center justify-between bg-white opacity-75 drop-shadow-lg rounded-3xl flex-grow"
    on:click={openModal}
  >
    <h1 class="px-4 font-serif font-black text-md">Quick Search</h1>
  </button>
  <TargetMenu />
</div>

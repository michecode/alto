<script lang="ts">
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { isDarkMode, toggleTheme } from '../../utils/utils';
  import Icon from '../Icon.svelte';
  import colors from '../../styles/colors';

  let isDark = isDarkMode();
  const iconColor = isDark ? colors.black : colors.byz;
  const iconSize = '36px';
  export let open: boolean;
  export let anchorEl: HTMLElement | null;
  let drawerEl: HTMLElement | null;

  const handleClose = () => {
    open = false;
  };

  const handleThemeToggle = () => {
    toggleTheme();
    handleClose();
    isDark = isDarkMode();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    // Get the drawer element on function call because the element doenst exist until open == true
    drawerEl = document.getElementById('drawer');
    if (
      !anchorEl?.contains(e.target as Node) &&
      !drawerEl?.contains(e.target as Node)
    ) {
      handleClose();
    }
  };

  // Only mount the listener on mobile screens!
  onMount(() => {
    if (window.innerWidth < 1024) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
</script>

{#if open}
  <div
    class="fixed bottom-0 left-0 right-0 z-10 bg-white opacity-[.97] rounded-t-2xl drop-shadow-lg lg:hidden flex flex-col"
    transition:slide={{ duration: 200 }}
    id="drawer"
  >
    <button class="mx-auto py-4" on:click|stopPropagation={handleClose}
      ><Icon
        type="thickChevronDown"
        fill={iconColor}
        width={iconSize}
        heigth={iconSize}
      /></button
    >
    <ul
      class="font-serif font-bold text-4xl mx-4 pb-6 space-y-4 text-right text-byz dark:text-black"
    >
      <li class="">
        <a href="/plants" class="inline-flex items-center">
          <p class="mr-3">Plants</p>
          <Icon
            type="grid"
            fill={iconColor}
            width={iconSize}
            height={iconSize}
          />
        </a>
      </li>
      <li>
        <a href="/learn" class="inline-flex items-center">
          <p class="mr-3">Learn</p>
          <Icon
            type="eye"
            fill={iconColor}
            width={iconSize}
            height={iconSize}
          />
        </a>
      </li>
      <li>
        <button on:click={handleThemeToggle} class="inline-flex items-center">
          <p class="mr-3">{isDark ? 'Light' : 'Dark'}&nbsp;Mode</p>
          {#if isDark}
            <Icon
              type="thinSun"
              fill={iconColor}
              width={iconSize}
              height={iconSize}
            />
          {:else}
            <Icon
              type="thinMoon"
              fill={iconColor}
              width={iconSize}
              height={iconSize}
            />
          {/if}
        </button>
      </li>
    </ul>
  </div>
{/if}

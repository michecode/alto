<script lang="ts">
  import Icon from '../Icon.svelte';
  import Drawer from './Drawer.svelte';
  import { toggleTheme, isDarkMode } from '../../utils/utils';
  import colors from '../../styles/colors';
  import { onMount } from 'svelte';

  let isDark = isDarkMode();
  let open = false;
  let anchorEl: HTMLElement | null;
  let iconColor = isDark ? colors.black : colors.byz;

  let onHome = false; // is user on homepage?

  const handleClick = () => {
    open = !open;
  };

  const handleTheme = () => {
    toggleTheme();
    isDark = isDarkMode();
  };

  onMount(() => {
    if (window.location.href.endsWith('/')) onHome = true;
    anchorEl = document.getElementById('home-menu-button');
  });
</script>

<header
  class={`flex justify-between items-center py-4 px-8 sticky top-0 ${
    !onHome ? 'bg-offwhite dark:bg-eerie z-20' : ''
  }`}
  aria-controls="navbar"
>
  <div>
    <a href="/" class="">
      <h1 class="font-serif font-black text-4xl hover:opacity-80">alto</h1>
    </a>
  </div>
  <button
    class="lg:hidden"
    on:click|stopPropagation={handleClick}
    id="home-menu-button"
  >
    <Icon type="menu" fill={iconColor} width="36px" height="36px" />
  </button>
  <div class="hidden lg:flex">
    <h1
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80"
    >
      <a href="/plants">plants</a>
    </h1>
    <h1
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80"
    >
      <a href="/learn">learn</a>
    </h1>
    <button on:click={handleTheme} class="hover:opacity-80">
      {#if isDark}
        <Icon type="thickSun" focusable fill={colors.white} />
      {:else}
        <Icon type="thickMoon" focusable fill={colors.byz} />
      {/if}
    </button>
  </div>
</header>
<Drawer bind:open {anchorEl} />

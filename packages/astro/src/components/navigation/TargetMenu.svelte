<script lang="ts">
  import Icon from '../Icon.svelte';
  import Drawer from './Drawer.svelte';
  import colors from '../../styles/colors';
  import { isDarkMode, toggleTheme } from '../../utils/utils';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let isDark = isDarkMode();
  let open = false;
  let drawerOpen = false;
  let anchorEl: HTMLElement | null;
  let menuEl: HTMLElement | null;
  const iconColor = isDark ? colors.black : colors.byz;

  const handleClick = () => {
    if (window.innerWidth > 1024) {
      open = !open;
    } else {
      drawerOpen = !drawerOpen;
    }
  };

  const handleClose = () => {
    open = false;
  };

  const handleThemeToggle = () => {
    toggleTheme();
    handleClose();
    isDark = isDarkMode();
  };

  const handleOutsideClick = (event: MouseEvent) => {
    menuEl = document.getElementById('desktop-nav-menu');
    if (
      !anchorEl?.contains(event.target as Node) &&
      !menuEl?.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  // The drawer will handle the handleClose on mobile so only set this up if its desktop!
  onMount(() => {
    anchorEl = document.getElementById('plant-menu-button');
    if (window.innerWidth > 1024) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
</script>

<!-- flex keeps the height from stretching! -->
<div class="flex relative">
  <button
    aria-haspopup="true"
    aria-expanded={open}
    aria-label="dropdown navigation menu"
    on:click|stopPropagation={handleClick}
    class="bg-white opacity-75 rounded-[50px] ml-3 drop-shadow-lg hover:opacity-100"
    id="plant-menu-button"
  >
    <Icon type="target" fill={iconColor} width="42px" height="42px" />
  </button>
  {#if open}
    <ul
      id="desktop-nav-menu"
      role="menu"
      aria-label="menu"
      aria-hidden={!open}
      tabindex="0"
      class="absolute right-0 z-10 top-[50px] hidden lg:flex flex-col align-bottom bg-white
      drop-shadow-lg p-4 font-serif font-bold text-2xl rounded-xl opacity-95"
      transition:slide={{ duration: 200 }}
    >
      <li role="menuitem" tabindex="-1">
        <a href="/plants" class="inline-flex items-center hover:opacity-70">
          <Icon type="grid" fill={iconColor} width="24px" height="24px" />
          <p class="ml-1">Plants</p>
        </a>
      </li>
      <li role="menuitem" tabindex="-1">
        <a href="/learn" class="inline-flex items-center hover:opacity-70">
          <Icon type="eye" fill={iconColor} width="24px" height="24px" />
          <p class="ml-1">Learn</p>
        </a>
      </li>
      <li role="menuitem" tabindex="-1">
        <button
          on:click={handleThemeToggle}
          class="inline-flex items-center hover:opacity-70"
        >
          {#if isDark}
            <Icon type="thinSun" fill={iconColor} width="24px" height="24px" />
          {:else}
            <Icon type="thinMoon" fill={iconColor} width="24px" height="24px" />
          {/if}
          <p class="ml-1">{isDark ? 'Light' : 'Dark'}&nbsp;Mode</p>
        </button>
      </li>
    </ul>
  {/if}
</div>
<Drawer bind:open={drawerOpen} {anchorEl} />

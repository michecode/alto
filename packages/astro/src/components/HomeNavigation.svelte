<script lang="ts">
  import Icon from './Icon.svelte';
  import { changeTheme, getTheme } from "../utils/utils";
  import colors from '../styles/colors';

  // Inital theme.
  const theme = getTheme();
  let isDark = theme === 'dark' ? true : false;

  const handleTheme = () => {
    changeTheme();
    isDark = !isDark;
  }
</script>

<header class="flex justify-between items-center my-4 mx-8" aria-controls="navbar">
  <div>
    <a href="/" class="">
      <h1 class="font-serif font-black text-4xl hover:opacity-80">alto</h1>
    </a>
  </div>
  <div class="flex">
    <h1
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80"
    >
      <a href="plants">plants</a>
    </h1>
    <h1
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg hover:opacity-80"
    >
      <a href="learn">learn</a>
    </h1>
    <button on:click={handleTheme} class="hover:opacity-80">
      {#if isDark}
      <Icon type="thickSun" focusable fill={colors.white}/>
      {:else}
      <Icon type="thickMoon" focusable fill={colors.byz}/>
      {/if}
    </button>
  </div>
</header>

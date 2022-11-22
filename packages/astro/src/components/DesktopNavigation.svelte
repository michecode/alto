<script lang="ts">
  import NavigationPopover from "./NavigationPopover.svelte";
  import Icon from './Icon.svelte';
  import { plantsNavContent, learnNavContent } from '../utils/constants';
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

<header class="flex justify-between items-center my-4 mx-8">
  <div>
    <a href="/" class="">
      <h1 class="font-serif font-black text-4xl">alto</h1>
    </a>
  </div>
  <div class="flex">
    <h1
      id="desktop-plant-nav"
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg
      focus:outline-none focus:ring-4 focus:ring-byz focus:ring-offset-4 focus:ring-offset-transparent"
    >
      plants
    </h1>
    <h1
      id="desktop-learn-nav"
      class="cursor-default font-serif font-black text-4xl mr-6 rounded-lg
      focus:outline-none focus:ring-4 focus:ring-byz focus:ring-offset-4 focus:ring-offset-transparent"
    >
      learn
    </h1>
    <button on:click={handleTheme}>
      {#if isDark}
      <Icon type="thickSun" focusable fill={colors.white}/>
      {:else}
      <Icon type="thickMoon" focusable fill={colors.byz}/>
      {/if}
    </button>
  </div>
  <NavigationPopover aria-label="Plant Links" triggeredBy="#desktop-plant-nav">
    <div class="flex flex-col bg-white p-4 rounded-lg drop-shadow-lg opacity-95">
      {#each plantsNavContent as link, index}
        <a
          href={link.href}
          tabindex={index} 
          class="font-serif font-black text-xl hover:underline dark:text-black"
        >
        {link.title}
        </a>
      {/each}
    </div>
  </NavigationPopover>
  <NavigationPopover aria-label="Learn Links" triggeredBy="#desktop-learn-nav">
    <div class="flex flex-col bg-white p-4 rounded-lg drop-shadow-lg opacity-95">
      {#each learnNavContent as link, index}
        <a
          href={link.href}
          tabindex={index} 
          class="font-serif font-black text-xl hover:underline dark:text-black"
        >
          {link.title}
        </a>
      {/each}
    </div>
  </NavigationPopover>
</header>

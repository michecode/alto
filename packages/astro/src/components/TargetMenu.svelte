<script lang="ts">
  import Icon from './Icon.svelte';
  import colors from '../styles/colors';
  import { isDarkMode } from '../utils/utils';

  const isDark = isDarkMode();
  let open = false;
  let anchorEl: HTMLElement;

  const handleClick = (e: Event) => {
    if (anchorEl === e.target) {
      open = true;
    } else {
      open = false;
    }
  };
</script>

<svelte:window on:click={handleClick} />

<div class="relative">
  <button
    bind:this={anchorEl}
    class="bg-white opacity-75 rounded-[50px] ml-3 drop-shadow-lg hover:opacity-100"
    ><Icon
      type="target"
      fill={isDark ? colors.black : colors.byz}
      width="42px"
      height="42px"
    /></button
  >
  <div class={`${open ? 'flex' : 'hidden'} absolute top-0 right-0`}>
    <ul>
      <li>Plants</li>
      <li>Learn</li>
      <li>Dark Mode</li>
    </ul>
  </div>
</div>

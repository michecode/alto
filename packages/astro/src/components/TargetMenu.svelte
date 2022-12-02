<script lang="ts">
  import Icon from './Icon.svelte';
  import colors from '../styles/colors';
  import { isDarkMode } from '../utils/utils';

  const isDark = isDarkMode();
  let open = false;

  const handleClick = () => {
    open = !open;
  };
</script>

<button
  class="bg-white opacity-75 rounded-[50px] ml-3 drop-shadow-lg hover:opacity-100"
  on:click={handleClick}
  ><Icon
    type="target"
    fill={isDark ? colors.black : colors.byz}
    width="42px"
    height="42px"
  /></button
>

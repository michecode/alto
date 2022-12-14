<script lang="ts">
  import Icon from '../Icon.svelte';
  import colors from '../../styles/colors';
</script>

<dialog id="search-modal" class="rounded-2xl">
  <div class="flex items-center">
    <Icon type="search" fill={colors.black} />
    <input
      type="text"
      placeholder="Search for Plants"
      class="w-full p-4 rounded-2xl flex-grow focus:outline-none"
    />
    <button class="border-black border-solid">ESC</button>
  </div>
</dialog>

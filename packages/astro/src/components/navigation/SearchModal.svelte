<script lang="ts">
  import Icon from '../Icon.svelte';
  import colors from '../../styles/colors';

  const handleClick = (e: MouseEvent) => {
    if (!e || !e.target) {
      return;
    }
    const eventTarget = e.target as HTMLElement;

    if (eventTarget.tagName !== 'DIALOG')
      //This prevents issues with forms
      return;

    const rect = eventTarget.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    console.log(clickedInDialog);
    if (clickedInDialog === false) (eventTarget as HTMLDialogElement).close();
  };
</script>

<!-- Key event is handled automatically by dialog element (esc to exit) -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  id="search-modal"
  class="rounded-2xl backdrop:backdrop-blur-md"
  on:click={handleClick}
>
  <div id="modal-container" class="flex items-center">
    <Icon type="search" fill={colors.black} />
    <input
      type="text"
      placeholder="Search for Plants"
      class="w-full p-4 rounded-2xl flex-grow focus:outline-none"
    />
    <button class="border-black border-solid">ESC</button>
  </div>
</dialog>

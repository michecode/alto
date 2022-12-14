<script lang="ts">
  import Icon from './Icon.svelte';
  import colors from '../styles/colors';

  export let plants = [] as SearchCollection;

  let filteredPlants = [] as SearchCollection;
  let inputValue = '';
  let hiLiteIndex = -1;
  let mobileSearchScreen = false;

  $: if (!inputValue) {
    filteredPlants = [];
    hiLiteIndex = -1;
  }
  $: hiLitedPlant = filteredPlants[hiLiteIndex] ?? { name: '', slug: '' };

  const filterPlants = (_: Event | null, endIndex: number = 5) => {
    if (!inputValue) return;
    filteredPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    filteredPlants = filteredPlants.slice(0, endIndex);
  };

  const navigate = (target: string) => {
    window.location.href = `/plants/${target}`;
  };

  const navigateList = (e: KeyboardEvent) => {
    const max = filteredPlants.length - 1;
    if (e.key === 'ArrowDown') {
      hiLiteIndex < max ? (hiLiteIndex += 1) : (hiLiteIndex = 0);
    } else if (e.key === 'ArrowUp') {
      hiLiteIndex === 0 || hiLiteIndex === -1
        ? (hiLiteIndex = max)
        : (hiLiteIndex -= 1);
    } else if (e.key === 'Enter') {
      navigate(filteredPlants[hiLiteIndex].slug);
    } else {
      return;
    }
  };

  // Opens the mobile full screen search
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      mobileSearchScreen = true;
    }
  };

  const handleClose = () => {
    mobileSearchScreen = false;
    // If user closes menu with text in input clear it.
    inputValue = '';
    filterPlants(null, 5);
  };
</script>

<div
  class="flex flex-col w-3/4 mx-auto mt-8 bg-white text-black rounded-2xl opacity-75 drop-shadow-lg"
>
  <div class="flex">
    <input
      type="text"
      placeholder="Search for Plants"
      class="w-full p-4 rounded-2xl focus:outline-none"
      bind:value={inputValue}
      on:input={filterPlants}
      on:keydown={navigateList}
      on:click={handleClick}
    />
  </div>
  <!-- FILTERED LIST -->
  {#if filteredPlants.length > 0}
    <hr class="mx-4" />
    <ul class="m-4">
      {#each filteredPlants as { name, slug }, index}
        <li
          class={`py-1 rounded-lg ${
            hiLitedPlant.name === name ? 'bg-black text-white' : ''
          }`}
          on:mouseenter={() => (hiLiteIndex = index)}
          on:click={() => navigate(slug)}
          on:keydown={navigateList}
        >
          <p class="mx-2">{name}</p>
        </li>
      {/each}
    </ul>
  {/if}
</div>
<!-- MOBILE SEARCH! -->
{#if mobileSearchScreen}
  <div
    class="fixed top-0 left-0 px-4 w-full h-full z-20 bg-white flex flex-col"
  >
    <div class="flex items-center">
      <input
        type="text"
        placeholder="Search for Plants"
        class="w-full p-4 rounded-2xl focus:outline-none"
        bind:value={inputValue}
        on:input={() => filterPlants(null, 10)}
        on:keydown={navigateList}
        on:click={handleClick}
      />
      <button on:click={handleClose}>
        <Icon
          type="close"
          focusable
          fill={colors.black}
          height="32px"
          width="32px"
        />
      </button>
    </div>
    <hr />
    {#if filteredPlants.length > 0}
      <ul class="m-4">
        {#each filteredPlants as { name, slug }, index}
          <li
            class={`py-1 rounded-lg ${
              hiLitedPlant.name === name ? 'bg-black text-white' : ''
            }`}
            on:mouseenter={() => (hiLiteIndex = index)}
            on:click={() => navigate(slug)}
            on:keydown={navigateList}
          >
            <p class="text-lg">{name}</p>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}

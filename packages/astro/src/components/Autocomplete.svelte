<script lang="ts">
  // At build I need to query for the list of names
  export let plants: SearchCollection = [];

  let filteredPlants: SearchObject[] = [];

  const filterPlants = () => {
    filteredPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().startsWith(inputValue.toLowerCase());
    })
    filteredPlants = filteredPlants.slice(0,5);
    console.log('post filter', filteredPlants);
  };

  let inputValue: string = "";
    
  $: if (!inputValue) {
    filteredPlants = [];
    hiLiteIndex = -1;
  }

  const navigate = (target: string) => {
    window.location.href = `/plants/${target}`;
  }

  let hiLiteIndex: number = -1;
  $: hiLitedPlant = filteredPlants[hiLiteIndex] ?? { name: '', slug: ''}; 	

  const navigateList = (e: KeyboardEvent) => {
    const max = filteredPlants.length-1;
    if (e.key === "ArrowDown") {
      hiLiteIndex < max ? hiLiteIndex += 1 : hiLiteIndex = 0;
    } else if (e.key === "ArrowUp") {
      hiLiteIndex === 0 || hiLiteIndex === -1 ? hiLiteIndex = max : hiLiteIndex -= 1;
    } else if (e.key === "Enter") {
      navigate(filteredPlants[hiLiteIndex].slug);
    } else {
      return;
    }
  } 
</script>

<div class="flex flex-col w-3/4 mx-auto mt-8 bg-white rounded-2xl opacity-75 drop-shadow-lg">
  <div class="flex">
    <input
      type="text" 
      placeholder="Search for Plants"
      class="w-full p-4 rounded-2xl focus:outline-none"
      bind:value={inputValue} 
      on:input={filterPlants}
      on:keydown={navigateList}
    />
  </div>
  <!-- FILTERED LIST -->
  {#if filteredPlants.length > 0}
    <hr class="mx-4"/>
    <ul class="mx-4 my-4">
      {#each filteredPlants as {name, slug}, index}
        <li
          class={`py-1 rounded-lg ${hiLitedPlant.name === name ? 'bg-black text-white' : ''}`}
          on:mouseenter={() => hiLiteIndex = index}
          on:click={() => navigate(slug)}
          on:keydown={navigateList}
        >
          <p class="mx-2">{name}</p>
        </li>
      {/each}			
    </ul>
  {/if}
</div>
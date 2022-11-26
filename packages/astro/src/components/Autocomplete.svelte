<script lang="ts">
  // At build I need to query for the list of names
  const plants = ['Parlor Palm', 'Chamaedorea Elegans', 'Neanthe Bella Palm', 'Maddy', 'Madison', 'Madster', 'Madlions'];

  let filteredPlants: string[] = [];

  const filterPlants = () => {
    filteredPlants = plants.filter((plant) => {
      return plant.toLowerCase().startsWith(inputValue.toLowerCase());
    })
  };
  
  /* HANDLING THE INPUT */
  // let searchInput: HTMLElement; // use with bind:this to focus element
  let inputValue: string = "";
    
  $: if (!inputValue) {
    filteredPlants = [];
    hiLiteIndex = -1;
  }
  
  // const clearInput = () => {
  //   inputValue = "";	
  //   searchInput.focus();
  // }
    
  // const setInputVal = (plantName: string) => {
  //   inputValue = plantName;
  //   filteredPlants = [];
  //   hiLiteIndex = null;
  //   // navigate to page
  //   console.log('going to', plantName);
  // }	

  const navigate = (target: string) => {
    window.location.href = `/${target}`;
  }
  
  /* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */	
  let hiLiteIndex: number = -1;
  $: hiLitedPlant = filteredPlants[hiLiteIndex]; 	

  const navigateList = (e: KeyboardEvent) => {
    const max = filteredPlants.length-1;
    if (e.key === "ArrowDown") {
      hiLiteIndex < max ? hiLiteIndex += 1 : hiLiteIndex = 0;
    } else if (e.key === "ArrowUp") {
      hiLiteIndex === 0 || hiLiteIndex === -1 ? hiLiteIndex = max : hiLiteIndex -= 1;
    } else if (e.key === "Enter") {
      navigate(filteredPlants[hiLiteIndex]);
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
    <ul class="mx-4">
      {#each filteredPlants as name}
        <li
          class:active={hiLitedPlant === name}
          class="active:bg-black"
          on:click={() => navigate(name)}
        >
          {name}
        </li>
      {/each}			
    </ul>
  {/if}
</div>
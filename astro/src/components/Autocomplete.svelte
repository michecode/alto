<script>
  // At build I need to query for the list of names
  import { supabase } from '../utils/supabaseClient';
  const { data: plants, error } = supabase
    .from("plants")
    .select("id, names");
  console.log(plants, error);
    
    
  /* FILTERING countres DATA BASED ON INPUT */	
  let filteredPlants = [];
  // $: console.log(filteredPlants)	
  
  const filterPlants = () => {
    console.log(inputValue);
    let storageArr = []
    if (inputValue) {
      plants.forEach(plant => {
         if (country.toLowerCase().startsWith(inputValue.toLowerCase())) {
           storageArr = [...storageArr, makeMatchBold(country)];
         }
      });
    }
    filteredPlants = storageArr;
  }	
  
  
  /* HANDLING THE INPUT */
  let searchInput; // use with bind:this to focus element
  let inputValue = "";
    
  $: if (!inputValue) {
    filteredPlants = [];
    hiLiteIndex = null;
  }
  
  const clearInput = () => {
    inputValue = "";	
    searchInput.focus();
  }
    
  const setInputVal = (countryName) => {
    inputValue = removeBold(countryName);
    filteredPlants = [];
    hiLiteIndex = null;
    document.querySelector('#country-input').focus();
  }	
  
  const submitValue = () => {
    if (inputValue) {
      console.log(`${inputValue} is submitted!`);
      setTimeout(clearInput, 1000);
    } else {
      alert("You didn't type anything.")
    }
  }
  
  const makeMatchBold = (str) => {
    // replace part of (country name === inputValue) with strong tags
    let matched = str.substring(0, inputValue.length);
    let makeBold = `<strong>${matched}</strong>`;
    let boldedMatch = str.replace(matched, makeBold);
    return boldedMatch;
  }
  
  const removeBold = (str) => {
    //replace < and > all characters between
    return str.replace(/<(.)*?>/g, "");
    // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
  }	
    
  
  /* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */	
  let hiLiteIndex = null;
  //$: console.log(hiLiteIndex);	
  $: hiLitedCountry = filteredPlants[hiLiteIndex]; 	
    
  const navigateList = (e) => {
    if (e.key === "ArrowDown" && hiLiteIndex <= filteredPlants.length-1) {
      hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
    } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
      hiLiteIndex === 0 ? hiLiteIndex = filteredPlants.length-1 : hiLiteIndex -= 1
    } else if (e.key === "Enter") {
      setInputVal(filteredPlants[hiLiteIndex]);
    } else {
      return;
    }
  } 
  </script>
  
  
  <svelte:window on:keydown={navigateList} />
  
  <form autocomplete="off" on:submit|preventDefault={submitValue}>
    <div class="autocomplete">
      <input id="country-input" 
             type="text" 
             placeholder="Search for Plants" 
             bind:this={searchInput}
             bind:value={inputValue} 
             on:input={filterPlants}>
    </div>
    
    <input type="submit">
    {@debug filterPlants}
    <!-- FILTERED LIST OF COUNTRIES -->
    {#if filteredPlants.length > 0}
      <ul id="autocomplete-items-list">
        {#each filteredPlants as name, i}
          <li>{@html name}</li>
        {/each}			
      </ul>
    {/if}
  </form>
    
    
  <style>
  div.autocomplete {
    /*the container must be positioned relative:*/
    position: relative;
    display: inline-block;
    width: 300px;
  }
  input {
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
    margin: 0;
  }
  input[type=text] {
    background-color: #f1f1f1;
    width: 100%;
  }
  input[type=submit] {
    background-color: DodgerBlue;
    color: #fff;
  }
    
  #autocomplete-items-list {
    position: relative;
    margin: 0;
    padding: 0;
    top: 0;
    width: 297px;
    border: 1px solid #ddd;
    background-color: #ddd;
  }	
  </style>	
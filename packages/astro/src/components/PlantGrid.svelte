<script lang="ts">
  import { filters } from '../stores';

  export let plants: Plant[] = [];
  let filteredPlants: Plant[] = [];

  $: filterPlants($filters);

  // Hi future maddy. This function is a bit messy because I check if all the checkbox filters are the same
  // because if theyre all disabled then you should display all yknow. Ok sorry i didnt wanna make an
  // isAllSame function because i tried it and it literally blows job so kys.
  // NVMMMM IM A HYPER JEANYIS LMFOA
  // ts ignoring because filters and plant are already tightly controlled
  // @ts-ignore
  const filterPlants = (filters: Filters) => {
    filteredPlants = plants.filter((plant) => {
      console.log(plant);
      // Classification
      // If class isn't selected && theyre not all enabled/disabled then filter
      if (!filters.classification[plant.class_peek.toLowerCase()]) {
        console.log('i dont match!', plant.name);
        const pairs = Object.entries(filters.classification);
        if (checkPairs(pairs)) {
          return false;
        }
      }
      // Difficulty
      if (filters.difficulty !== 'All') {
        if (filters.difficulty !== plant.difficulty) {
          return false;
        }
      }
      // TODO: Light
      // TODO: Water
      // Toxic
      if (filters.toxic.petFriendly) {
        return plant.toxic_peek;
      }
      return true;
    });
  };

  // True if any are true
  const checkPairs = (pairs: [string, boolean][]) => {
    return pairs.some((pair) => {
      return pair[1];
    });
  };
</script>

<div class="grid grid-cols-6">
  {#each filteredPlants as { name, slug, imageUrl }}
    <a href={`/plants/${slug}`}>
      <div
        class="bg-white pt-6 pb-4 px-2 drop-shadow-lg rounded-2xl w-full h-64"
      >
        <img
          src={`${imageUrl}?w=800&h=600&fm=webp`}
          alt={`picture of a ${name}`}
          class="mx-auto h-48 w-full"
        />
        <p class="text-center mt-2 font-serif font-semibold">{name}</p>
      </div>
    </a>
  {/each}
</div>

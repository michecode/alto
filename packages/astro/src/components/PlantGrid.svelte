<script lang="ts">
  import { filters } from '../stores';

  export let plants: Plant[] = [];
  let filteredPlants: Plant[] = [];

  $: filterPlants($filters);

  // ts ignoring because filters and plant are already tightly controlled
  // @ts-ignore
  const filterPlants = (filters: Filters) => {
    filteredPlants = plants.filter((plant) => {
      // Classification
      // If class isn't selected && theyre not all enabled/disabled then filter
      if (!filters.classification[plant.classification.toLowerCase()]) {
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
        return !plant.toxicity;
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

<div class="grid grid-cols-6 gap-1">
  {#each filteredPlants as { name, slug, imageUrl }}
    <a href={`/plants/${slug}`}>
      <div
        class="bg-white pt-6 pb-4 px-2 drop-shadow-lg rounded-2xl h-64 dark:text-byz"
      >
        <div class="h-48 flex items-end">
          <img
            src={`${imageUrl}?w=800&h=600&fit=clip&fm=webp`}
            alt={`picture of a ${name}`}
            class="mx-auto pt-auto max-h-full"
          />
        </div>
        <p class="text-center mt-2 font-serif font-semibold h-8">{name}</p>
      </div>
    </a>
  {/each}
</div>

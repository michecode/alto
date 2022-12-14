<script lang="ts">
  export let plants: Plant[] = [];
</script>

<div class="grid grid-cols-6">
  {#each plants as { name, slug, imageUrl }}
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

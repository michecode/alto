<script lang="ts">
  export let articleData: Article;

  const convertHeader = (header: string) => {
    return header.toLowerCase().replaceAll(' ', '-').replaceAll("'", '-');
  };
</script>

<article class="mx-4 lg:mx-[15%] my-4 overflow-scroll">
  <div class="lg:h-96 mb-4">
    {#if articleData.imageUrl}
      <img
        src={articleData.imageUrl}
        alt={articleData.imageAltText}
        class="rounded-3xl h-full w-full mx-auto object-cover drop-shadow-2xl"
      />
    {/if}
  </div>
  <h1 class="font-serif text-4xl font-black inline">{articleData.category}</h1>
  <p class="inline">{articleData.intro}</p>
  {#each articleData.sections as section}
    <div id={`#${convertHeader(section.header)}`} class="my-4">
      <h3 class="font-serif font-semibold text-2xl">{section.header}</h3>
      <p>{section.body}</p>
    </div>
  {/each}
</article>

<script lang="ts">
  export let articleData: Article;

  const convertHeader = (header: string) => {
    return header.toLowerCase().replaceAll(' ', '-').replaceAll("'", '-');
  };
</script>

<article>
  <h1>{articleData.category}</h1>
  <p>{articleData.intro}</p>
  {#each articleData.sections as section}
    <div id={`#${convertHeader(section.header)}`}>
      <h3>{section.header}</h3>
      <p>{section.body}</p>
    </div>
  {/each}
</article>

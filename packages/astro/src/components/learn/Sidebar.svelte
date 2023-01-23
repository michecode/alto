<script lang="ts">
  export let articles: Article[];
</script>

<div class="m-2">
  {#each articles as article}
    <a href={article.category.toLowerCase()}>
      <h6 class="font-serif font-semibold text-xl">{article.category}</h6>
    </a>
    {#each article.sections as section}
      <p>{section.header}</p>
    {/each}
  {/each}
</div>

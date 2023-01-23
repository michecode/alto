<script lang="ts">
  export let title = 'Slay';
  export let body = 'Mama';
</script>

<section class="my-6 lg:my-2" id={title.toLowerCase()}>
  <h1 class="font-serif font-black text-2xl">{title}</h1>
  <hr />
  <p class="my-1">{body}</p>
</section>

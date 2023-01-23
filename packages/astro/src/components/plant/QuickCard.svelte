<script lang="ts">
  export let title = 'Plant Title';
  export let botanical = 'Botanical Name';
  export let difficulty = 'IDK';
  export let light = 5;
  export let water = 5;
</script>

<div
  class="bg-white opacity-95 rounded-2xl drop-shadow-lg p-4 text-byz dark:text-black"
>
  <header class="text-center">
    <h1 class="font-serif font-black text-2xl">{title}</h1>
    <h6 class="italic">{botanical}</h6>
  </header>
  <p>{difficulty}{light}{water}</p>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#light">Light</a></li>
    <li><a href="#water">Water</a></li>
    <li><a href="#fertilizing">Fertilizing</a></li>
    <li><a href="#humidity">Humidity</a></li>
    <li><a href="#propagation">Propagation</a></li>
    <li><a href="#repotting">Repotting</a></li>
    <li><a href="#pruning">Pruning</a></li>
    <li><a href="#pests">Pests</a></li>
  </ul>
</div>

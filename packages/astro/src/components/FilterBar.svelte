<script lang="ts"></script>

<div
  class="flex flex-col h-full mt-2 mx-2 font-serif font-bold text-xl dark:text-black overflow-scroll"
>
  <div class="my-2">
    <h3 class="">Classification</h3>
    <div class="grid grid-cols-2 font-sans text-base">
      <label>
        <input type="checkbox" />
        Palms
      </label>
      <label>
        <input type="checkbox" />
        Succulent
      </label>
      <label>
        <input type="checkbox" />
        Cacti
      </label>
      <label>
        <input type="checkbox" />
        Calathea
      </label>
      <label>
        <input type="checkbox" />
        Trees
      </label>
      <label>
        <input type="checkbox" />
        Orchids
      </label>
    </div>
  </div>
  <div class="my-2">
    <h3>Difficulty</h3>
    <div class="flex flex-col font-sans text-base">
      <label>
        <input type="radio" name="difficulty" value="All" />
        All
      </label>
      <label>
        <input type="radio" name="difficulty" value="Effortless" />
        Effortless
      </label>
      <label>
        <input type="radio" name="difficulty" value="Easy" />
        Easy
      </label>
      <label>
        <input type="radio" name="difficulty" value="Intermediate" />
        Intermediate
      </label>
      <label>
        <input type="radio" name="difficulty" value="Hard" />
        Hard
      </label>
    </div>
  </div>
  <div class="my-2">
    <h3>Light</h3>
    <div class="flex flex-col font-sans text-base">
      <label>
        <input type="checkbox" />
        Low / Artificial
      </label>
      <label>
        <input type="checkbox" />
        Indirect
      </label>
      <label>
        <input type="checkbox" />
        Direct
      </label>
    </div>
  </div>
  <div class="my-2">
    <h3>Water</h3>
    <div class="flex flex-col font-sans text-base">
      <label>
        <input type="checkbox" />
        Dry
      </label>
      <label>
        <input type="checkbox" />
        Balanced
      </label>
      <label>
        <input type="checkbox" />
        Wet
      </label>
    </div>
  </div>
  <div class="my-2">
    <h3>Toxic</h3>
    <div class="flex flex-col font-sans text-base">
      <label>
        <input type="checkbox" />
        Pet Friendly
      </label>
    </div>
  </div>
  <button
    class="bg-byz dark:bg-eerie text-white p-2 w-full rounded-lg mt-auto mb-4 transition ease-in-out delay-50 hover:opacity-80 "
    >Clear Filters</button
  >
</div>

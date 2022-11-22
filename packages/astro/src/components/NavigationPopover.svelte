<script lang="ts">
  import Popper from "./Popper.svelte";
</script>

<Popper on:show tooltip={false} placement={"bottom-start"} triggeredBy={$$props.triggeredBy}>
  <slot/>
</Popper>
<script lang="ts">
  export let nItems: number;
  export let activeIndex: number;

  $: range = Array(nItems).fill(0);
</script>

<div class="flex items-center justify-center gap-4 h-24">
  {#each range as _, idx}
    {#if activeIndex == idx}
      <div class="w-6 h-2 rounded-lg bg-ksgreen"></div>
    {:else}
      <div class="w-2 h-2 rounded-lg bg-white"></div>
    {/if}
  {/each}
</div>
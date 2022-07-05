<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { slide, fade, fly } from 'svelte/transition'
  import { browser } from "$app/env";

  export let images: Array<string> = [];
  export let duration: number = 300;
  $: n = images.length;
  let activeIndex = 0;
  let interval: any;
  
  onMount(() => {
    if (!browser) {
      return;
    }
    setInterval(() => {
      activeIndex = (activeIndex + 1) % n;
    }, duration);
  });

  onDestroy(() => {
    if (!browser) {
      return;
    }
    clearInterval(interval);
  })
</script>

<style>

</style>

{#each images as img, idx}
  {#if activeIndex == idx}
    <div 
      class="absolute top-0 bottom-0 left-0 right-0"
      style={`background: url(${img}); background-position: center; background-size: cover;`}
      in:fly={{ duration: 400, x: 200, y: 0 }}
      out:fade={{ duration: 800 }}
    >
    </div>
  {/if}
{/each}

<div class="absolute flex items-center justify-center gap-4 h-24" style="bottom: 0; left: 0; right: 0;">
  {#each images as img, idx}
    {#if activeIndex == idx}
      <div class="w-6 h-2 rounded-lg bg-ksgreen"></div>
    {:else}
      <div class="w-2 h-2 rounded-lg bg-white"></div>
    {/if}
  {/each}
</div>
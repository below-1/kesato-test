<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import CarouselIndicator from "$lib/CarouselIndicator.svelte";
  import { fly } from "svelte/transition";
  import partition from "$lib/partition";
  import type { IgPost } from "src/types";

  let activeIndex = 0;
  let interval: any = null;
  const duration = 5000;
  export let posts: Array<IgPost>;
  $: parts = partition<IgPost>(posts, 5);

  onMount(() => {
    interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % parts.length;
    }, duration);
  })

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  })
</script>

<div class="bg-ksblack text-white">
  <div class="TinySection flex flex-col">
    <div class="font-display text-center text-2xl mb-6">Follow us on Instagram</div>
    <img
      src="/img/decor/wawe.svg"
      class="w-12 self-center mb-12"
      alt="wave"
    />
    <div class="relative flex-grow overflow-hidden">
      {#each parts as part, index}
        {#if index == activeIndex}
          <div class="absolute top-0 left-0 bottom-0 right-0 flex"
            in:fly={{ x: 200 }}
            out:fly={{ x: -200 }}
          >
            {#each part as post}
              <a
                href={post.image}
                class="w-1/5 h-full flex"
                style={`background-image: url(${post.image}); background-size: cover; background-position: center;`}
              >
              </a>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
    <CarouselIndicator
      nItems={parts.length}
      {activeIndex}
    />
  </div>
</div>
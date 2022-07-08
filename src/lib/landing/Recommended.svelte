<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import type { PostMetaData, Recommended } from "src/types";
  import { page } from "$app/stores";
  import Banner from "./Banner.svelte";

  export let totalItems = 15;
  export let highlightPost: PostMetaData;
  $: postUrl = `/posts/${highlightPost.id}`;
  const per_page = 3;
  let parts: Array<Array<Recommended> | null> = Array(totalItems).fill(null);
  let activeIndex = 0;
  let intervalId: any = null;
  const duration = 5000;

  $: getPart(activeIndex);

  async function getPart(index: number) {
    if (parts[index]) {
      return;
    }
    const url = new URL('/api/menus/recommended', $page.url);
    url.searchParams.set('page', index.toString());
    url.searchParams.set('per_page', per_page.toString());
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json()
    parts[index] = data.items;
  }

  onMount(() => {
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % Math.floor(totalItems / per_page);
    }, duration);
  });
  
  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  })
</script>

<div class="bg-ksblack text-white">
  <div class="Container BigSection flex flex-col items-center justify-start pt-24">
    <img
      src="/img/decor/french-fries.png"
      alt="french fries"
      class="w-4 mb-3"
    />
    <h1 class="mb-6 font-display font-bold text-4xl">Recommend Tasty Food</h1>
    <img
      src="/img/decor/wawe.svg"
      alt="french fries"
      class="w-12 mb-6"
    />
    <div class="relative flex-grow w-full overflow-hidden">
      {#each parts as part, index}
        {#if part && activeIndex == index}
          <div 
            class="absolute top-0 left-0 right-0 flex gap-3"
            in:fly={{ y: 0, x: 200 }}
            out:fly={{ y: 0, x: -200 }}
          >
            {#each part as item}
              <div class="w-1/3 flex flex-col">
                <img 
                  src={item.photo}
                  alt="recommended menu"
                  class="w-full h-auto mb-6"
                />
                <p class="font-bold text-xl mb-3">{item.name}</p>
                <img
                  src="/img/decor/stars.png"
                  class="h-3 self-start mb-4"
                  alt="stars"
                />
                <p class="text-xs">{item.description.substring(0, 100)}...</p>
                <div class="py-4 flex items-center gap-2 font-display">
                  <span>price:</span>
                  <span class="text-ksred text-xl">${item.price.toFixed(2)}</span>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
    <div class="md:w-1/2 flex">
      <Banner
        title={highlightPost.title}
        subtitle={highlightPost.subtitle}
        actionLabel='Baca Selengkapnya'
        url={postUrl}
        image={highlightPost.photo}
      />
    </div>
  </div>
</div>
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import type { Menu } from "src/types";
  import { page } from "$app/stores";
  import CarouselIndicator from "$lib/CarouselIndicator.svelte";

  export let totalItems = 6;
  export let firstPart: Array<Menu>;

  const per_page = 3;
  let parts: Array<Array<Menu> | null> = Array(totalItems).fill(null);
  parts[0] = firstPart;

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
      activeIndex = (activeIndex + 1) % totalItems;
    }, duration);
  });
  
  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  })
</script>

<div class="bg-ksblack text-white">
  <div class="Container MediumSection flex flex-col items-center justify-start pt-24">
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
            {#each part as item, itemIndex}
              {#if itemIndex == 0}
                <div class="w-full md:w-1/3 flex flex-col">
                  <div 
                    class="w-full h-64 mb-6"
                    style={`background: url(${item.photo}); background-size: cover; background-position: center;`}
                  >

                  </div>
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
              {:else}
                <div class="w-full md:w-1/3 flex-col hidden md:flex">
                  <div 
                    class="w-full h-64 mb-6"
                    style={`background: url(${item.photo}); background-size: cover; background-position: center;`}
                  >

                  </div>
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
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
    </div>

    <div class="">
      <CarouselIndicator
        nItems={parts.length}
        {activeIndex}
      />
    </div>
  </div>
</div>
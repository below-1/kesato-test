<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biSuitHeartFill from '@iconify/icons-bi/suit-heart-fill.js';
  import biInfoCircleFill from '@iconify/icons-bi/info-circle-fill.js';
  import MenuCard from '$lib/MenuCard.svelte';
  import { page } from "$app/stores";
  import { MenuTypeOptions  } from 'src/types';
  import type { Menu, MenuType } from "src/types";

  addIcon('suit-heart-fill', biSuitHeartFill);
  addIcon('info-circle-fill', biInfoCircleFill);

  export let firstType: MenuType;
  export let firstItems: Array<Menu>;

  let activeTabIndex = 0;
  let intervalId: any;
  let activeType: MenuType;
  const changeDuration = 5000;
  let items: Array<Menu> = [];
  let cached: Map<MenuType, Array<Menu>> = new Map();
  cached.set(firstType, firstItems);

  $: activeType = MenuTypeOptions[activeTabIndex] as MenuType;
  $: getDealsByType(activeType);

  async function getDealsByType(type: MenuType) {
    if (cached.has(type)) {
      items = cached.get(type)!;
      return;
    }
    const url = new URL('/api/menus', $page.url);
    url.searchParams.set('type', type);
    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      const data = await response.json();
      cached.set(type, data.items);
      items = data.items;
    } catch (err) {
      console.log(err);
    }
  }

  onMount(() => {
    intervalId = setInterval(() => {
      activeTabIndex = (activeTabIndex + 1) % MenuTypeOptions.length;
    }, changeDuration)
  })

  onDestroy(() => {
    clearInterval(intervalId);
  })
</script>

<style>
  .Tabs .Menu.active {
    @apply shadow-ksgreen text-ksgreen;
    box-shadow: 0 0 1px;
    background: url(/img/decor/bg-btn-wsitcher.png);
    background-size: cover;
  }
</style>

<div class="bg-ksblack">
  <div class="Container BigSection flex flex-col items-center justify-start text-white pt-24">
    <img
      src="/img/decor/french-fries.png"
      alt="french fries"
      class="h-6 mb-3"
    />
    <h1 class="font-display text-4xl mb-6">Our Special Deals</h1>
    <img
      src="/img/decor/wawe.svg"
      alt="waves"
      class="w-16 mb-12"
    />
    <div class="Tabs flex items-center flex-wrap md:flex-nowrap justify-center gap-12 mb-12">
      {#each MenuTypeOptions as type, index}
        <button 
          class="Menu px-6 py-2 rounded-xl uppercase font-bold text-sm transition-all"
          class:active={index == activeTabIndex}
        >
          {type}
        </button>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      {#each items.slice(0, 4) as menu}
        <div>
          <MenuCard
            {menu}
          />
        </div>
      {/each}
    </div>
    
  </div>
</div>
<script lang="ts">
  import { page } from "$app/stores";
  import Icon, { addIcon } from '@iconify/svelte';
  import biSuitHeartFill from '@iconify/icons-bi/suit-heart-fill';
  import biInfoCircleFill from '@iconify/icons-bi/info-circle-fill';
  import type { Menu, MenuType } from "src/types";

  addIcon('suit-heart-fill', biSuitHeartFill);
  addIcon('info-circle-fill', biInfoCircleFill);

  export let type: MenuType;
  let items: Array<Menu> = [];
  let cached: Map<MenuType, Array<Menu>> = new Map();

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

  $: getDealsByType(type);
</script>

<div class="flex w-full gap-2">
  {#each items.slice(0, 4) as menu}
    <div class="flex-grow w-1/4 flex flex-col border border-ksblack-bri">
      <div class="bg-ksblack-bri flex flex-col">
        <div class="p-8 pb-0">
          <img 
            src={menu.avatar}
            alt={menu.name}
          />
        </div>
        <div 
          class="p-4 pt-0 flex items-center gap-2"
        >
          <Icon 
            icon="suit-heart-fill" 
            class="text-gray-50 w-4 h-4"
          />
          <div class="flex-grow"></div>
          <img
            src="/img/products/spicy.png"
            class="w-4 h-4"
            alt="some-sign"
          />
          <Icon 
            icon="info-circle-fill" 
            class="text-gray-50 w-4 h-4"
          />
        </div>
      </div>
      <div class="p-4 flex-grow">
        <h2 class="font-bold mb-3">{menu.name}</h2>
        <p 
          class="text-sm"
          style="line-clamp: 2; text-overflow: ellipsis;"
        >{menu.description.substring(0, 50)}...</p>
      </div>
      <div class="text-center p-4 flex items-center justify-center gap-2 font-display font-bold h-16">
        <span class="text-sm">Price</span>
        <span class="text-xl text-ksred">${menu.price}</span>
      </div>
    </div>
  {/each}
</div>
<script lang="ts">
  import type { Menu } from "src/types";
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biSuitHeartFill from '@iconify/icons-bi/suit-heart-fill.js';
  import biInfoCircleFill from '@iconify/icons-bi/info-circle-fill.js';

  addIcon('suit-heart-fill', biSuitHeartFill);
  addIcon('info-circle-fill', biInfoCircleFill);

  export let menu: Menu;
</script>

<a 
  class="flex flex-col border border-ksblack-bri"
  href={`/menus/${menu.id}`}
>
  <div class="bg-ksblack-bri flex flex-col">
    <div class="p-8 pb-0 self-center">
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
</a>
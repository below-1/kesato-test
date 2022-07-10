<script lang="ts">
  import PageHeader from "$lib/PageHeader.svelte";
  import type { Menu, MenuType } from "src/types";

  export let menu: Menu;
</script>

<PageHeader
  title={menu.name}
  subtitle={menu.description}
  bg={menu.photo}
/>
<div class="Container py-24">
  <div class="grid grid-cols-2">
    <div>
      <img
        src={menu.avatar}
        alt={menu.name}
        class="h-64 mx-auto"
      />
    </div>
    <div class="space-y-6">
      <div class="text-2xl font-display text-ksred tracking-widest">{menu.name}</div>
      <div class="leading-relaxed">
        {menu.description}
      </div>
      <div class="flex items-center gap-3 font-display text-xl">
        <div>price: </div>
        <div class="text-ksred">${menu.price}</div>
      </div>
    </div>
  </div>
</div>

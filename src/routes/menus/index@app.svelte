<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
import MenuCard from "$lib/MenuCard.svelte";

  import PageHeader from "$lib/PageHeader.svelte";
  import TypeSelect from "$lib/TypeSelect.svelte";
  import type { Menu, MenuType } from "src/types";
  
  export let type: MenuType = 'pizza';
  export let items: Array<Menu> = [];

  const onActiveChange = (event: any) => {
    const url = new URL($page.url);
    url.searchParams.set('type', event.detail);
    goto(url);
  }
</script>

<PageHeader
  title="Menus"
  subtitle="Our Precious Menus"
  bg="/img/pages/home/bg-steps.jpg"
/>
<div class="Container py-12">
  <TypeSelect
    active={type}
    on:change={onActiveChange}
  />
  <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
    {#each items as menu}
      <MenuCard
        {menu}
      />
    {/each}
  </div>
</div>
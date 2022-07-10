<script lang="ts">
  import type { FeaturedDeals } from 'src/types';
  export let deals: FeaturedDeals;
</script>

<div class="bg-ksblack">
  <div class="TinySection flex flex-wrap md:flex-nowrap gap-3 py-12">
    {#each deals as menu}
      <a 
        href={`/menus/${menu.id}`}
        class="w-full md:w-1/3 h-64 md:h-auto"
        style={`background-image: url(${menu.photo}); background-position: center; background-size: cover;`}
      >
      </a>
    {/each}
  </div>
</div>
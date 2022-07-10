<script lang="ts">
  import type { FeaturedDeals } from 'src/types';
  export let deals: FeaturedDeals;
</script>

<div class="bg-ksblack">
  <div class="TinySection flex space-x-3 py-12">
    {#each deals as menu}
      <a 
        href={`/menus/${menu.id}`}
        class="md:w-1/3 self-stretch"
        style={`background-image: url(${menu.photo});`}
      >
      </a>
    {/each}
  </div>
</div>
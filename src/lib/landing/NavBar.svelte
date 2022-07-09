<script>
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biCart from '@iconify/icons-bi/cart.js';
  import biPerson from '@iconify/icons-bi/person.js';
  import biSearch from '@iconify/icons-bi/search.js';
  import Delivery from "$lib/icons/delivery.svelte";
  import SearchButton from '$lib/SearchButton.svelte';

  addIcon('cart', biCart);
  addIcon('person', biPerson);
  addIcon('search', biSearch);
  
  let searchInputVisible = false;

  const menus = [
    { icon: 'person', path: '/account' },
    { icon: 'cart', path: '/cart' }
  ]
</script>

<style>
  .NavMenuIcon {
    @apply text-white hover:bg-ksblack-aug focus:bg-ksblack-aug p-2 rounded-full transition-all text-gray-100;
  }

  .MenuRight.Hide {
    flex-basis: 0;
    flex-grow: 0;
    overflow: hidden;
    opacity: .25;
  }
</style>

<nav class="bg-ksblack w-full flex items-center">
  <div class="md:w-3/4 md:mx-auto h-20 flex items-center">
    
    <div class="flex items-center text-white gap-x-4">
      <Delivery />
      <div>
        <div class="text-sm">For delivery, call us</div>
        <div class="font-semibold text-ksred">1-320-544-8749</div>
      </div>
    </div>

    <SearchButton 
      inputVisible={searchInputVisible}
      placeholder="What are you looking for..."
      on:input-hidden={() => {
        searchInputVisible = false;
      }}
      on:input-visible={() => {
        searchInputVisible = true;
      }}
    />

    <div 
      class="MenuRight flex items-center gap-x-2 transition-all"
      class:Hide={searchInputVisible}
    >
      {#each menus as menu}
        <a 
          href={menu.path}
          class="NavMenuIcon"
        >
          <Icon icon={menu.icon} class="h-5 w-5" />
        </a>
      {/each}
      <button 
        type="button"
        class="bg-ksred px-4 py-2 font-semibold text-white transition-all focus:font-black"
      >
        Make Your Pizza
      </button>
    </div>
  </div>
</nav>
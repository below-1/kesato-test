<script>
  import Icon, { addIcon } from '@iconify/svelte';
  import biCart from '@iconify/icons-bi/cart';
  import biPerson from '@iconify/icons-bi/person';
  import biSearch from '@iconify/icons-bi/search';
  import Delivery from "$lib/icons/delivery.svelte";
  import SearchButton from '$lib/SearchButton.svelte';
  import SearchImg from '$lib/icons/search.png';

  addIcon('cart', biCart);
  addIcon('person', biPerson);
  addIcon('search', biSearch);

  const menus = [
    { icon: 'person', path: '/account' },
    { icon: 'cart', path: '/cart' }
  ]
</script>

<style>
  .NavMenuIcon {
    @apply text-white hover:bg-ksblack-aug focus:bg-ksblack-aug p-2 rounded-full transition-all text-gray-100;
  }
</style>

<nav class="bg-ksblack w-full flex items-center">
  <div class="md:w-2/3 md:mx-auto h-20 flex items-center justify-between">
    
    <div class="flex-grow flex items-center text-white gap-x-4">
      <Delivery />
      <div>
        <div class="text-sm">For delivery, call us</div>
        <div class="font-semibold text-ksred">1-320-544-8749</div>
      </div>
    </div>

    <div class="flex items-center gap-x-2">
      <SearchButton />
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
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { MenuTypeOptions, type MenuType } from 'src/types';
import DealsCollection from './DealsCollection.svelte';

  let activeTabIndex = 0;
  let intervalId: any;
  let activeType: MenuType;
  $: activeType = MenuTypeOptions[activeTabIndex] as MenuType;
  const changeDuration = 15000;

  onMount(() => {
    intervalId = setInterval(() => {
      // activeTabIndex = (activeTabIndex + 1) % MenuTypeOptions.length;
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
  <div class="Container flex flex-col items-center justify-center text-white py-24">
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
    <div class="Tabs flex items-center justify-center gap-12 mb-12">
      {#each MenuTypeOptions as type, index}
        <button 
          class="Menu px-6 py-2 rounded-xl uppercase font-bold text-sm transition-all"
          class:active={index == activeTabIndex}
        >
          {type}
        </button>
      {/each}
    </div>

    <DealsCollection type={activeType} />
    
  </div>
</div>
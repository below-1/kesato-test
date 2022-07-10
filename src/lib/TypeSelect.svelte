<script lang="ts">
  import type { MenuType } from "src/types";
  import { createEventDispatcher } from 'svelte';
  import { MenuTypeOptions  } from 'src/types';

  export let active: MenuType;

  const dispatch = createEventDispatcher();

  const onSelectActive = (type: string) => {
    dispatch('change', type as MenuType);
  }
</script>

<style>
  .Tabs .Menu.active {
    @apply shadow-ksgreen text-ksgreen;
    box-shadow: 0 0 1px;
    background: url(/img/decor/bg-btn-wsitcher.png);
    background-size: cover;
  }
</style>

<div class="Tabs flex items-center flex-wrap md:flex-nowrap justify-center gap-12 mb-12">
  {#each MenuTypeOptions as type}
    <button 
      class="Menu px-6 py-2 rounded-xl uppercase font-bold text-sm transition-all"
      class:active={type == active}
      on:click={() => {
        onSelectActive(type);
      }}
    >
      {type}
    </button>
  {/each}
</div>
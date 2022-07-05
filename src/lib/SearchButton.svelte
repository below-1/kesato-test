<script lang="ts">
  import { fade } from 'svelte/transition';
  import Icon, { addIcon } from '@iconify/svelte';
  import biSearch from '@iconify/icons-bi/search';
  addIcon('search', biSearch);

  let inputVisible = false;

  function showInput() {
    inputVisible = true;
  }

  function hideInput() {
    inputVisible = false;
  }
</script>

{#if inputVisible}
  <input
    class="bg-ksblack-aug py-2 px-3 text-xl font-bold text-white"
    on:focusout={hideInput}
  />
{:else}
  <button
    type="button"
    class="text-white hover:bg-ksblack-aug focus:bg-ksblack-aug p-2 rounded-full transition-all text-gray-100"
    on:click={showInput}
  >
    <Icon icon="search" class="h-4 w-4" />
  </button>
{/if}
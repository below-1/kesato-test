<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition'
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biSearch from '@iconify/icons-bi/search.js';

  const dispatch = createEventDispatcher();

  addIcon('search', biSearch);

  export let inputVisible = false;
  export let placeholder = '';

  function showInput() {
    dispatch('input-visible');
  }

  function hideInput() {
    dispatch('input-hidden');
  }

  function toggleInput() {
    if (inputVisible) {
      hideInput();
    } else {
      showInput();
    }
  }
</script>

<style>
  .SearchInput {
    flex-basis: 0px;
    flex-grow: 0;
    flex-shrink: 1;
    min-width: 0;
    width: 0;
    box-sizing: content-box;
    overflow: hidden;
  }
  .SearchInput.Show {
    flex-basis: 100%;
    flex-grow: 1;
  }

  .SearchInput.Show input {
    @apply bg-ksred-aug;
  }
</style>

<div class="flex grow items-center justify-end px-2 gap-x-2">
  <div 
    class="SearchInput grow transition-all "
    class:Show={inputVisible}
  >
    <input
      class="bg-ksblack-aug py-2 px-3 text-xl font-bold text-white w-full transition-all"
      on:focusout={hideInput}
      {placeholder}
    />
  </div>
  <button
    type="button"
    class="SearchButton text-white hover:bg-ksblack-aug focus:bg-ksblack-aug p-2 rounded-full text-gray-100 transition-all"
    on:click={toggleInput}
  >
    <Icon icon="search" class="h-4 w-4" />
  </button>
</div>
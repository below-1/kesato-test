<script lang="ts">
  import type { PostMetaData } from "src/types";
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biArrowRight from '@iconify/icons-bi/arrow-right.js';

  addIcon('arrow-right', biArrowRight);

  export let blogs: Array<PostMetaData>;
</script>

<div class="bg-ksblack text-white">
  <div class="Container VhSection flex flex-col py-12">
    <img
      src="/img/decor/burger.png"
      alt="burger"
      class="w-6 mb-3 self-center"
    />
    <p class="text-center font-display font-bold text-2xl mb-6">News Blog Articles</p>
    <img
      src="/img/decor/wawe.svg"
      alt="burgerwave"
      class="w-12 mb-6 self-center"
    />
    <div class="flex flex-grow self-stetch gap-3">
      {#each blogs as blog}
        <div class="md:w-1/3">
          <img
            src={blog.photo}
            class="w-full h-auto"
            alt="blog"
          />
          <div class="p-6 border-r border-l border-b border-[#333] flex flex-col gap-6">
            <div class="flex items-center gap-2">
              <img
                src="/img/icons/calendar.png"
                class="h-3"
                alt="calendar"
              />
              <span class="text-xs text-gray-300">July 31, 2020</span>
              <img
                src="/img/icons/comments.png"
                class="h-3"
                alt="calendar"
              />
              <span class="text-xs text-gray-300">210</span>
            </div>
            <p class="font-bold text-lg">{blog.title}</p>
            <p class="text-xs leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus dolor, convallis eget mauris id, mollis aliquet mauris. In turpis sapien</p>
            <a
              href={`/posts/${blog.id}`}
              class="uppercase underline font-bold text-sm flex items-center gap-2"
            >
              <span>read more </span>
              <Icon 
                icon="arrow-right" 
                class="h-full"
              />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
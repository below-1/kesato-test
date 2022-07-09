<script lang="ts">
  import type { PostMetaData } from "src/types";
  import Banner from "./Banner.svelte";
  export let highlightPost: PostMetaData;
  $: postUrl = `/posts/${highlightPost.id}`;
</script>

<div class="bg-ksblack text-white">
  <div class="Container SmallSection flex flex-col justify-center">
    <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-2">
      <Banner
        title={highlightPost.title}
        subtitle={highlightPost.subtitle}
        actionLabel='Baca Selengkapnya'
        url={postUrl}
        image={highlightPost.photo}
      />
      <Banner
        title={highlightPost.title}
        subtitle={highlightPost.subtitle}
        actionLabel='Baca Selengkapnya'
        url={postUrl}
        image={highlightPost.photo}
      />
    </div>
  </div>
</div>
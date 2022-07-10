<script lang="ts">
  import PageHeader from "$lib/PageHeader.svelte";
  import type { Menu, MenuType, PostMetaData } from "src/types";

  export let post: PostMetaData;
  export let content: Array<string> = [''];
</script>

<svelte:head>
	<title>{post.title} -- Spedito</title>
</svelte:head>

<PageHeader
  title={post.title}
  subtitle={post.subtitle}
  bg={post.photo}
/>


<div class="w-full md:w-3/5 py-12 mx-3 md:mx-auto flex flex-col gap-6">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin mi lorem, et eleifend tellus feugiat at. Nulla elementum laoreet ante eu elementum. Curabitur vestibulum vehicula quam ut dictum. Morbi varius nibh id neque ornare, id dignissim nunc vulputate. Fusce dictum suscipit lacinia. Nullam tincidunt imperdiet euismod. Proin et sagittis est. Praesent blandit orci in tempor viverra. In hac habitasse platea dictumst. Vestibulum in quam eu dui feugiat tempor.</p>
  <p>Suspendisse mattis pellentesque varius. Proin et rutrum nibh. Cras cursus rhoncus diam at auctor. In sit amet sem at arcu mollis finibus nec quis elit. Duis scelerisque magna hendrerit mauris consectetur volutpat. Morbi nec dui vitae nunc porta iaculis et sit amet ligula. Nulla facilisi. Etiam a fermentum arcu, sed dignissim arcu. Morbi est metus, sagittis vitae dictum sit amet, blandit vel mi. Nam lobortis lectus in auctor venenatis. </p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper vulputate dignissim. Aliquam eros odio, sagittis vel elit quis, consequat porta risus. Sed tempor ante in rhoncus blandit. Vivamus porttitor finibus ex id porta. Nunc sit amet aliquam urna. Ut sed tincidunt elit. Vivamus aliquam erat sit amet nulla maximus, non convallis lectus gravida. Duis nec viverra dui. Praesent luctus porttitor magna, non luctus elit feugiat a. Ut in erat lectus. Phasellus ligula urna, mattis vel eros vitae, feugiat sollicitudin velit. Donec sollicitudin tristique nulla, non tempor lectus egestas et. Integer aliquam luctus est, nec cursus libero lacinia eget. </p>
</div>

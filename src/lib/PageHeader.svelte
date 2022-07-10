<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let bg: undefined | string = undefined;
  $: bgStyle = bg 
    ? `background-image: url(${bg}); background-position: center; background-size: cover;`
    : '';
</script>

<style>
  .PageHeader > .Container {
    min-height: 350px;
  }
  
  .PageHeader {
    clip-path: url(#oval);
  }
  .PageTitle {
    text-shadow: 0 0 6px theme('colors.ksblack');
  }
</style>

<svg height=0 width=0>
  <clipPath id="oval" clipPathUnits="objectBoundingBox">
    <path d="M 0,0  L 0,0.9  Q 0.5,1 1,0.9  L 1,0  L 0,0 Z" />
  </clipPath>
</svg>
<div class="PageHeader" style={bgStyle}>
  <div class="Container flex flex-col items-center justify-center text-center">
    <h1 class="PageTitle font-display text-4xl md:text-8xl font-bold mb-6">{title}</h1>
    {#if subtitle}
      <h2 class="text-xl">{subtitle}</h2>
    {/if}
  </div>
</div>
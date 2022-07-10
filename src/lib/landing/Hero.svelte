<script lang="ts">
import HeroCarousel from "./HeroCarousel.svelte";

  const carouselImages = [
    '/img/pages/home/slider-1.jpg',
    '/img/pages/home/slider-2.jpg',
    '/img/pages/home/slider-3.jpg'
  ]
</script>

<style>
  .Hero {
    height: calc(100vh - theme('spacing.16'));
    position: relative;
    width: 100%;
  }
</style>

<div class="Hero overflow-hidden">
  <HeroCarousel 
    images={carouselImages}
    duration={3000}
  />
  <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white text-center">
    <h1 class="text-6xl font-display">Order Today, While It's Hot!</h1>
    <h2 class="text-xl">Eat Delicious & Tasty Fast-Foods With Real Flavours</h2>
    <a
      role="button"
      href="/menus"
      class="bg-ksred px-4 py-2 my-6"
    >
      View Our Menu
    </a>
  </div>
</div>

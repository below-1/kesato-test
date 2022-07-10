<script lang="ts">
  import type { Menu } from "src/types";

  export let menu: Menu;

  $: style = `background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
    url(${menu.photo});`;
</script>

<style>
  .Outer {
    background-size: cover;
    background-position: center;
  }
</style>

<div class="Outer" style={style}>
  <div class="Container SmallSection flex flex-wrap-reverse md:flex-nowrap py-12">
    <div class="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <div class="flex items-center mb-6">
        <div class="font-bold text-ksgreen mr-2">Deal Of The Week</div>
        <img
          src="/img/decor/wawe.svg"
          alt="wave"
          class="h-4"
        />
      </div>
      <p class=" text-4xl font-display mb-12">{menu.name}</p>
      <p class="mb-12">{menu.description}</p>
      <div class="flex font-display mb-12">
        <p class="mr-3">Per Serving</p>
        <p class="font-bold text-ksred text-xl">{menu.price.toFixed(2)}$</p>
      </div>
      <button class="bg-ksred text-white font-bold px-4 py-2">
        Order Now
      </button>
    </div>
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src={menu.avatar}
        alt="deal of the week"
        class="h-full w-auto"
      />
    </div>
  </div>
</div>
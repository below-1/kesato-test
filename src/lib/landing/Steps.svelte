<script lang="ts">
  import { fly } from "svelte/transition";
  import partition from "$lib/partition";
  import { onDestroy, onMount } from "svelte";
import CarouselIndicator from "$lib/CarouselIndicator.svelte";

  const steps = [
    {
      title: 'Choose Crust',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante sagittis',
      image: '/img/pages/home/step-1.png'
    },
    {
      title: 'Select Your Sauce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante sagittis',
      image: '/img/pages/home/step-2.png'
    },
    {
      title: 'Add Some Cheese',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante sagittis',
      image: '/img/pages/home/step-3.png'
    },
    {
      title: 'Do Another Thing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante sagittis',
      image: '/img/pages/home/step-4.png'
    }
  ]

  const partSteps = partition(steps, 3);

  let activeIndex = 0;
  let mobileActiveIndex = 0;
  let intervalId: any;
  const duration = 5000;

  onMount(() => {
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % 2;
      mobileActiveIndex = (mobileActiveIndex + 1) % steps.length;
    }, duration);
  })

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<style>
  .Steps {
    background: url(/img/pages/home/bg-steps.jpg);
    background-size: cover;
    background-position: center;
  }

  .PartStep::before {
    visibility: hidden;;
    height: 100%;
    width:  100%;
    position: static;
  }
</style>

<div class="Steps VhSection flex flex-col items-center justify-center">

  <div class="Container  mb-12">
    <div class="md:w-1/2 flex">
      <div class="flex-grow">
        <div class="flex items-center gap-2">
          <span class="text-ksgreen">Order Your Own Tasty Food</span>
          <img
            src="/img/decor/wawe.svg"
            alt="wave"
            class="h-4"
          />
        </div>
        <div class="font-display font-bold text-3xl text-white">
          It Takes 2 Minutes to Make Your Own Tasty Pizza And Order From Us
        </div>
      </div>
      <img
        src="/img/decor/chilli.png"
        alt="chilli"
        class="h-24"
      />
    </div>
  </div>

  <div class="w-full flex justify-start">
    <div class="hidden md:block md:w-1/4">
      <img
        alt="pan-with-pizza"
        src="/img/pages/home/img-steps.png"
      />
    </div>
    <div class="flex flex-col w-full md:w-3/4">

      <div class="hidden md:block Outer relative overflow-hidden h-64">

        {#each partSteps as ps, partIndex}
          {#if partIndex == activeIndex}
            <div 
              class="PartStep absolute flex flex-wrap text-white w-full"
              in:fly={{ y: 0, x: 200 }}
              out:fly={{ y: 0, x: -200 }}
            >
              {#each ps as step, index}
                <div class="md:w-1/3 flex flex-col px-8">
                  <div class="flex justify-between items-center pr-16 mb-6">
                    <img
                      src={step.image}
                      alt="pizza-step"
                      class="h-[90%]"
                    />
                    <img
                      src="/img/decor/custome-arrow.svg"
                      alt="customer-arrow"
                    />
                  </div>
                  <p class="text-ksgreen mb-3">step {index + 1}</p>
                  <p class="font-bold mb-1">{step.title}</p>
                  <p class="text-sm">{step.description}</p>
                </div>
              {/each}
            </div>
          {/if}
        {/each}
      </div>

      <div class="block md:hidden Outer relative overflow-hidden h-64">

        {#each steps as step, partIndex}
          {#if partIndex == mobileActiveIndex}
            <div 
              class="PartStep absolute flex flex-wrap text-white w-full"
              in:fly={{ y: 0, x: 200 }}
              out:fly={{ y: 0, x: -200 }}
            >
              <div class="md:w-1/3 flex flex-col px-8">
                <div class="flex justify-between items-center pr-16 mb-6">
                  <img
                    src={step.image}
                    alt="pizza-step"
                    class="h-[90%]"
                  />
                  <img
                    src="/img/decor/custome-arrow.svg"
                    alt="customer-arrow"
                  />
                </div>
                <p class="text-ksgreen mb-3">step {partIndex + 1}</p>
                <p class="font-bold mb-1">{step.title}</p>
                <p class="text-sm">{step.description}</p>
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <div class="hidden md:block">
        <CarouselIndicator
          nItems={partSteps.length}
          {activeIndex}
        />
      </div>
      <div class="block md:hidden">
        <CarouselIndicator
          nItems={steps.length}
          activeIndex={mobileActiveIndex}
        />
      </div>

      <button class="mx-auto text-center bg-ksred text-white font-bold px-4 py-2 self-center">
        Create and Order Now
      </button>
    </div>
  </div>
</div>
<style>
  .ClippedBanner {
    clip-path: ellipse(60% 12% at 50% 0%);
    background: url(/img/pages/home/slider-1.jpg);
    filter: blur(6px);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .About.Content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

<div class="About overflow-hidden w-full relative bg-ksblack text-white">
  <div class="ClippedBanner">
  </div>
  <div class="Content h-screen flex items-center">

    <div class="Container flex flex-wrap justify-center">
      <div class="md:w-1/2" style="background: url(/img/pages/home/img-about.png); background-size: contain; background-repeat: no-repeat; background-position: 60% 50%;">
      </div>
      <div class="md:w-1/2 flex flex-col items-start">
        <img
          src="/img/decor/burger.png"
          class="h-6 mb-2"
          alt="burger"
        />
        <div class="text-2xl font-display mb-2">Cooking With Passion</div>
        <img
          src="/img/decor/wawe.svg"
          class="h-3 mb-6"
          alt="wave"
        />

        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar suscipit augue, vel scelerisque est euismod a. Curabitur iaculis fermentum magna non iaculis. Phasellus eget arcu a odio fermentum varius sit amet ut augue. Fusce diam magna, molestie ut ex non, elementum maximus justo. </p>
        <p class="mb-3">Mauris efficitur arcu dolor. Mauris in massa sodales erat dapibus rhoncus ac et nibh. Vestibulum quis elit vulputate, sollicitudin erat quis, tempus mi</p>
        <button class="text-white bg-ksred px-4 py-2 self-start mt-6">read more</button>
      </div>
    </div>

  </div>
</div>
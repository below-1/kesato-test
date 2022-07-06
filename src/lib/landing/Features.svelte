<script lang="ts">
  import feat1Svg from '$lib/icons/feature-1.svg';
  import feat2Svg from '$lib/icons/feature-2.svg';
  import feat3Svg from '$lib/icons/feature-3.svg';

  const features = [
    {
      title: 'Fresh Ingredients',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit',
      icon: feat1Svg
    },
    {
      title: 'The Certified Chefs',
      description: 'Nam ullamcorper facilisis diam, non condimentum orci porta nec',
      icon: feat2Svg
    },
    {
      title: '30 Mins Delivery',
      description: 'Morbi a eros erat. Nulla vitae velit risus. Nulla aliquam sodales eleifend.',
      icon: feat3Svg
    },
  ]
</script>

<style>
  .Features {
    background: url(/img/pages/home/bg_features.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .DecorFeatures {
    position: absolute;
    bottom: -20px;
    right: -12%;
  }
  .SpiceContainer {
    position: absolute;
    bottom: -10%;
    left: 0;
    right: 0;
    top: -10%;
    background: url(/img/pages/home/decor-features.png);
    background-position: 120% 1%;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>

<div class="Features mb-64">
  <div 
    class="Container py-24 flex justify-start"
  >
    {#each features as feat}
      <div class="w-1/3 flex flex-col justify-between leading-none">
        <img src={feat.icon} alt="feature-icon" class="h-24 self-start mb-3">
        <img 
          src='/img/decor/wawe.svg' 
          alt="waves" 
          class="w-16"
        />
        <div class="pt-8">
          <p class="font-bold text-white text-xl mb-3">{feat.title}</p>
          <p class="text-white font-normal">{feat.description}</p>
        </div>
      </div>
    {/each}
  </div>
  <div class="hidden md:block SpiceContainer">
  </div>
</div>
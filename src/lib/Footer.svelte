<script lang="ts">
  import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
  import biFacebook from '@iconify/icons-bi/facebook.js';
  import biTwitter from '@iconify/icons-bi/twitter.js';
  import biLinkedin from '@iconify/icons-bi/linkedin.js';
  import biGoogle from '@iconify/icons-bi/google.js';
  import biYoutube from '@iconify/icons-bi/youtube.js';

  addIcon('facebook', biFacebook);
  addIcon('twitter', biTwitter);
  addIcon('linkedin', biLinkedin);
  addIcon('google', biGoogle);
  addIcon('youtube', biYoutube);

  const socials = [
    { icon: 'facebook', url: 'https://www.facebook.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'linkedin', url: 'https://www.linkedin.com' },
    { icon: 'google', url: 'https://www.google.com' },
    { icon: 'youtube', url: 'https://www.youtube.com' }
  ]
</script>


<div class="bg-ksblack text-white">
  <div class="Container SmallSection flex flex-col justify-center py-12 gap-12">
    <img
      src="/img/logo.png"
      class="h-24 self-center"
      alt="spedito"
    />
    <div class="flex flex-grow flex-wrap md:flex-nowrap items-center text-center">
      <div class="w-full md:w-1/3 flex flex-col items-center">
        <p class="font-bold mb-3">Our Address</p>
        <div class="border-b border-[#555] w-6 mb-6"></div>
        <div class="text-xs leading-relaxed">
          430, Barfield Lane, Indianapolis, <br/> CA 46278, USA
        </div>
      </div>
      <div class="w-full md:w-1/3 flex flex-col items-center">
        <p class="font-bold mb-3">Opening Hours</p>
        <div class="border-b border-[#555] w-6 mb-6"></div>
        <div class="text-xs leading-relaxed">
          Mon - Sat 10:00 AM - 11:30 PM <br/> Sun 9:00 AM - 4:00 PM
        </div>
      </div>
      <div class="w-full md:w-1/3 flex flex-col items-center">
        <p class="font-bold mb-3">Contact Us</p>
        <div class="border-b border-[#555] w-6 mb-6"></div>
        <div class="text-xs leading-relaxed">
          Email: food@spedito.com <br/> Phone: +628238273827
        </div>
      </div>
    </div>
    <div class="flex gap-2 self-center">
      {#each socials as soc}
        <a
          href={soc.url}
          target="_blank"
          class="rounded-full border border-[#555] text-gray-600 flex items-center justify-center p-3"
        >
          <Icon
            icon={soc.icon}
            class="h-3 w-3"
          />
        </a>
      {/each}
    </div>
    <p class="text-xs self-center text-center">&copy; Copyright 2020 Spedito. All rights reserved. 
        <a href="/" class="underline text-gray-600">Terms And Condition</a>
    </p>
  </div>
</div>
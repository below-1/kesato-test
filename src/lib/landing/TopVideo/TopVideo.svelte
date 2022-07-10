<script>
import CenterCircle from "./CenterCircle.svelte";
import SideVideoLink from "./SideVideoLink.svelte";

</script>

<div class="bg-ksblack text-white">
  <div class="Container flex flex-col justify-center items-center py-24">
    <img
      src="/img/decor/french-fries.png"
      alt="french fries"
      class="h-6 mb-3"
    />
    <p class="font-display text-center text-2xl mb-3">
      We Value Our Food <br/>
      Only Familits & Communities
    </p>
    <img
      src="/img/decor/wawe.svg"
      alt="french fries"
      class="w-12 mb-6"
    />
    <p class="text-sm mb-6">We're always thiink about serving up better fast-food, Here's how we actually do</p>

    <div class="flex items-center gap-12 text-xs leading-relaxed mb-12">
      <p class="md:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum, risus at venenatis cursus, magna erat consectetur odio, eget congue risus justo a nibh. Fusce a nunc blandit, mollis urna quis, sodales ipsum.
      </p>
      <p class="md:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum, risus at venenatis cursus, magna erat consectetur odio, eget congue risus justo a nibh. Fusce a nunc blandit, mollis urna quis, sodales ipsum. 
      </p>
    </div>

    <div class="flex flex-wrap md:flex-nowrap items-center space-x-6">

      <div class="md:w-1/3 space-y-12 text-center md:text-left">

        <SideVideoLink
          icon='/img/icons/video-1.svg'
          title="Certified Pure Oil"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tortor, consequat nec nibh pulvinar"
          url="https://www.youtube.com/watch?v=L2--LdZITbk"
          justify="start"
        />

        <SideVideoLink
          icon='/img/icons/video-1.svg'
          title="Reduce Antibiotics"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tortor, consequat nec nibh pulvinar"
          url="https://www.youtube.com/watch?v=bcdJgjNDsto"
          justify="start"
        />

      </div>

      <div class="hidden md:block">
        <CenterCircle/>
      </div>

      <div class="md:w-1/3 space-y-12 text-center md:text-left">
        <SideVideoLink
          icon='/img/icons/video-1.svg'
          title="Certified Pure Oil"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tortor, consequat nec nibh pulvinar"
          url="https://www.youtube.com/watch?v=L2--LdZITbk"
          justify="end"
        />

        <SideVideoLink
          icon='/img/icons/video-1.svg'
          title="Reduce Antibiotics"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor tortor, consequat nec nibh pulvinar"
          url="https://www.youtube.com/watch?v=bcdJgjNDsto"
          justify="end"
        />
      </div>

    </div>

  </div>
</div>
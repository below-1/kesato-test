<script lang="ts">
  export let icon: string;
  export let url: string;
  export let title: string;
  export let description: string;
  export let justify: string;
</script>

<style>
  .just-left {
    @apply items-start text-left;
  }
  .just-right {
    @apply items-end text-right;
  }
</style>

<a 
  class="SideVideoLink flex flex-col"
  class:just-left="{justify == 'end'}"
  class:just-right="{justify == 'start'}"
  href={url}
  target="_blank"
>
  <img
    src={icon}
    alt="some feature"
    class="h-16"
  />
  <div class="font-bold mb-3">{title}</div>
  <div class="text-xs">
    {description}
  </div>
</a>
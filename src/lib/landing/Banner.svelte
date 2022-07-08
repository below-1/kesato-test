<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let actionLabel: string;
  export let url: string;
  export let image: string;

  $: bannerStyle = `
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
      url(${image});
  `;
</script>

<div class="Banner h-full p-8" style={bannerStyle}>
  <p class="text-ksgreen underline mb-6">{subtitle}</p>
  <p class="font-display text-2xl mb-3">{title}</p>

  <a
    role="button"
    href={url}
    class="border-2 border-gray-100 p-3 text-white"
  >
    {actionLabel}
  </a>
</div>
<script>
  import NavBar from '$lib/NavBar.svelte';
  import Footer from '$lib/Footer.svelte';
  import Cto from '$lib/CTO.svelte';
</script>

<div id="AppLayout" class="bg-ksblack text-white min-h-screen">
  <NavBar />
  <slot></slot>
  <Cto/>
  <Footer/>
</div>


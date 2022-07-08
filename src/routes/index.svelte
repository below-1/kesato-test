<script lang="ts">
	import Counter from '$lib/Counter.svelte';
import About from '$lib/landing/About.svelte';
import Features from '$lib/landing/Features.svelte';
import Hero from '$lib/landing/Hero.svelte';
	import NavBar from '$lib/landing/NavBar.svelte';
import SpecialDeals from '$lib/landing/SpecialDeals.svelte';
import Steps from '$lib/landing/Steps.svelte';
</script>

<svelte:head>
	<title>Kesato Tasty -- Order Today</title>
	<meta name="description" content="Kesato Tasty Food" />
</svelte:head>

<div>
	<NavBar/>
	<Hero/>
	<About/>
	<Features/>
	<SpecialDeals />
	<Steps/>
</div>

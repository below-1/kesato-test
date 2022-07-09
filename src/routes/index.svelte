<script lang="ts">
	import About from '$lib/landing/About.svelte';
import Banners from '$lib/landing/Banners.svelte';
	import Features from '$lib/landing/Features.svelte';
	import Hero from '$lib/landing/Hero.svelte';
	import NavBar from '$lib/landing/NavBar.svelte';
	import Recommended from '$lib/landing/Recommended.svelte';
	import SpecialDeals from '$lib/landing/SpecialDeals.svelte';
	import Steps from '$lib/landing/Steps.svelte';
	import type { Menu, MenuType, PostMetaData } from 'src/types';

	export let highlightPost: PostMetaData;
	export let specialDeals: {
		firstType: MenuType,
		firstItems: Array<Menu>
	};
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
	<SpecialDeals 
		firstType={specialDeals.firstType}
		firstItems={specialDeals.firstItems}
	/>
	<Steps/>
	<Recommended 
	/>
	<Banners
		{highlightPost}
	/>
</div>

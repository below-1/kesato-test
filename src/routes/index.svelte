<script lang="ts" context="module">
	export  const prerender = true;
</script>

<script lang="ts">
	import About from '$lib/landing/About.svelte';
	import Banners from '$lib/landing/Banners.svelte';
	import Cto from '$lib/CTO.svelte';
	import DealOfTheWeek from '$lib/landing/DealOfTheWeek.svelte';
	import Features from '$lib/landing/Features.svelte';
	import Hero from '$lib/landing/Hero.svelte';
	import Instagram from '$lib/landing/Instagram.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Recommended from '$lib/landing/Recommended.svelte';
	import SpecialDeals from '$lib/landing/SpecialDeals.svelte';
	import FeaturedDealsSect from '$lib/landing/FeaturedDeals.svelte';
	import Steps from '$lib/landing/Steps.svelte';
	import TopVideo from '$lib/landing/TopVideo/TopVideo.svelte';
	import type { IgPost, Menu, MenuType, PostMetaData, FeaturedDeals } from 'src/types';
	import RecentBlogs from '$lib/landing/RecentBlogs.svelte';
	import Footer from '$lib/Footer.svelte';

	export let highlightPost: PostMetaData;
	export let specialDeals: {
		firstType: MenuType,
		firstItems: Array<Menu>
	};
	export let recommended: {
		firstPart: Array<Menu>
	};
	export let dealOfTheWeek: Menu;
	export let igPosts: Array<IgPost>;
	export let featuredDeals: FeaturedDeals;
	export let recentBlogs: Array<PostMetaData>;
</script>

<svelte:head>
	<title>Spedito -- Order Today</title>
	<meta name="description" content="Spedito Tasty Food" />
</svelte:head>

<main class="font-body bg-ksblack text-white">
	<NavBar/>
	<Hero/>
	<About
		url={`/posts/${highlightPost.id}`}
	/>
	<Features/>
	<SpecialDeals 
		firstType={specialDeals.firstType}
		firstItems={specialDeals.firstItems}
	/>
	<Steps/>
	<Recommended 
		firstPart={recommended.firstPart}
	/>
	<Banners
		{highlightPost}
	/>
	<DealOfTheWeek
		menu={dealOfTheWeek}
	/>
	<TopVideo/>
	<Cto />

	<FeaturedDealsSect
		deals={featuredDeals}
	/>
	<RecentBlogs blogs={recentBlogs} />
	<Instagram posts={igPosts}/>

	<Footer />
</main>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import NavBar from '$lib/landing/NavBar.svelte';
</script>

<svelte:head>
	<title>Kesato Tasty -- Order Today</title>
	<meta name="description" content="Kesato Tasty Food" />
</svelte:head>

<NavBar/>
<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.css';
	import githubSvg from '$lib/assets/images/github.svg';
	import twitterSvg from '$lib/assets/images/twitter.svg';
	import linkedinSvg from '$lib/assets/images/linkedin.svg';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	export let data;
</script>

<div class="h-screen">
	<Navbar />
	<!-- {#key data.pathname}
<div 
class="hidden md:block"
in:fly|local={{ easing: cubicOut, x:100, duration: 300, delay: 400 }}
out:fly|local={{ easing: cubicIn, x: -100, duration: 300 }}
>
    <slot/>
</div>
{/key}
    <div class="md:hidden"> -->

	<slot />
	<!-- </div> -->
</div>

<style lang="post">
	:global(body) {
		background-color: #011627;
	}
</style>

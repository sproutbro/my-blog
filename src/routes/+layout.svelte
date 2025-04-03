<script>
	import '../app.css';
	export let data;
</script>

<header>
	<nav>
		<h1>My Blog</h1>
		<div class="nav-links">
			<a href="/">Home</a>
			<a href="/score">Score</a>
			{#if data.user}
				<a href="/auth/user">User</a>
			{:else}
				<a href="/auth/login">Login</a>
			{/if}
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

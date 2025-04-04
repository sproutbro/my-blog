<script>
	async function fff(params) {
		try {
			const response = await fetch('api/score', {
				method: 'POST',
				body: JSON.stringify({ score: 99 }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return response.json();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<a href="/running">Running</a>

<button on:click={fff}>djiofs</button>

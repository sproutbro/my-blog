<script>
	function loginWithKakao() {
		window.location.href = '/auth/login/kakao';
	}

	function loginWithGoogle() {
		console.log('구글 로그인');
	}

	function loginWithGithub() {
		console.log('깃허브 로그인');
	}
</script>

<div class="oauth-buttons">
	<button on:click={loginWithKakao}>🟡 Login with Kakao</button>
	<button on:click={loginWithGoogle}>🔵 Login with Google</button>
	<button on:click={loginWithGithub}>⚫ Login with GitHub</button>
</div>

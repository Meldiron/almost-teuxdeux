<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="w-screen h-screen flex flex-col space-y-10 items-center justify-center">
	<div>
		<h1 class="text-center title-bold tracking-wider text-3xl">Almost TeuxDeux</h1>
		<p class="text-center text-neutral-500 text-lg mt-4">Peaceful task management. 100% free!</p>
	</div>

	<div class="flex items-center justify-center space-x-3">
		<a href="https://auth.teuxdeux.almostapps.eu/"
			><button class="rounded-md bg-transparent border border-white text-white py-2 px-6"
				>Login</button
			></a
		><a href="https://auth.teuxdeux.almostapps.eu/">
			<button class="rounded-md bg-white border border-white text-neutral-800 py-2 px-6"
				>Sign up</button
			></a
		>
	</div>
</div>

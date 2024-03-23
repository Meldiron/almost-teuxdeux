<script lang="ts">
    export let name: string = 'Unnamed';
	export let subname: string = '';
	export let todos: any[] = [];

	todos.push({
		$id: '',
		text: '',
		completed: false
	});

	$: {
		if (todos[todos.length - 1].text !== '') {
			todos.push({
				$id: '',
				text: '',
				completed: false
			});
		}
	}

	async function onClick(e: any) {
		const rect = e.target.getBoundingClientRect();
		const x = (rect.left + rect.right) / 2;
		const y = (rect.top + rect.bottom) / 2;

		const confettiSettings = {
			particleCount: 100,
			spread: 70,
			origin: { x: x / window.innerWidth, y: y / window.innerHeight }
		};

		// @ts-ignore
		confetti(confettiSettings);
	}
</script>

<div class="p-6">
    {#if subname}
    
        <h3 class="text-sm title uppercase text-neutral-500 mb-0 ">{subname}</h3>
        {/if}
	<h1 class="text-3xl uppercase title-bold mb-2">{name}</h1>
	<div>
		{#each todos as todo}
			<div class="flex items-center">
				<div class="inline-flex items-center">
					<label
						class="relative flex items-center p-3 rounded-full cursor-pointer"
						for="checkbox"
					>
						<input
							disabled={todo.text === ''}
							on:click={onClick}
							bind:checked={todo.completed}
							type="checkbox"
							class="disabled:opacity-10 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-neutral-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600"
							id="checkbox"
						/>
						<span
							class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3.5 w-3.5"
								viewBox="0 0 20 20"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="1"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					</label>
				</div>

				<input
					bind:value={todo.text}
					type="text"
					class="w-full bg-transparent border-b border-neutral-800 focus:outline-none focus:border-neutral-600 p-2"
				/>
			</div>
		{/each}
	</div>
</div>

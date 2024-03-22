<script lang="ts">
	export let selected: boolean = false;
	export let title: string = "Unnamed";
</script>

{#if selected}
	<button on:click class="rounded-lg bg-neutral-100 border border-neutral-100 text-neutral-800 py-1 px-4"
		>{title}</button
	>
{:else}
	<button on:click class="rounded-lg bg-transparent border border-neutral-100 text-neutral-100 py-1 px-4"
		>{title}</button
	>
{/if}

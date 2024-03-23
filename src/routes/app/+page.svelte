<script lang="ts">
	import type { PageData } from './$types';
	import List from './List.svelte';
	import Tab from './Tab.svelte';
	
	export let data: PageData;
	
	let selectedTab = data.tabs[0].$id;
	$: selectedLists = data.tabs.find(tab => tab.$id === selectedTab).lists;
</script>

<div class="w-screen h-[calc(100vh-2px)] grid grid-rows-12">
	<div class="w-full row-span-7 bg-neutral-900">
	
	<div class="w-full h-full grid grid-cols-12 gap-4">
	 {#each data.days as list}
    	<div class="col-span-4 overflow-auto h-full">
        
                 <div class="col-span-4  overflow-auto h-full">
                     <List todos={list.todos} subname={list.subname} name={list.name} />
                 </div>
        </div>
        {/each}
	</div>
	
	</div>
	<div class="w-full row-span-5 bg-neutral-950 flex flex-col">
		<div class="flex-0 p-6 pb-0 inline-flex space-x-4">
		     {#each data.tabs as tab}
                <Tab title={tab.title} on:click={() => selectedTab = tab.$id} selected={selectedTab === tab.$id} />
            {/each}
							
		<button on:click class="rounded-lg bg-transparent border border-neutral-100 text-neutral-100 py-1 px-4"
			>+</button
		>
		</div>
		<div class="w-full h-full grid grid-cols-12 gap-4">
		      {#each selectedLists as list}
                <div class="col-span-4 bg-neutral-950 overflow-auto h-full">
                    <List todos={list.todos} name={list.name} />
                </div>
            {/each}
		</div>
	</div>
</div>

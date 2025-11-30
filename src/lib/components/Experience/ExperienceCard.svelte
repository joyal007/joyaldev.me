<script>
	export let company;
	export let year;
	export let role;
	export let description;
	export let techStack;
</script>

<a href={company?.link} target="_blank" rel="noopener noreferrer">
	<div
		class="grid sm:grid-cols-8 gap-2 md:gap-8 hover:bg-[#1e293b80] cursor-pointer p-4 rounded-lg group md:w-[720px] border border-slate-600 w-full"
	>
		<div class="sm:col-span-2 w-fit sm:w-auto">
			{#if typeof role == 'string'}
				<p class="text-[#64748b] text-sm">{year[0]} - {year[1]}</p>
			{:else}
				{#each role as item, index}
					{#if index == 0}
						<h1
							class={`text-white group-hover:text-[#5eead4] font-semibold ${
								typeof role == 'string' ? '' : 'block sm:hidden'
							}`}
						>
							{role[0].name} ·
							<span class="">{company?.name}</span><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
									clip-rule="evenodd"
								/></svg
							>
						</h1>
						<p class="text-[#64748b] text-sm">{item.year[0]} - {item.year[1]}</p>
						<div class="flex justify-start py-1 ml-2">
							<div class="flex flex-col justify-center items-center w-2 gap-2">
								<div class="w-[5px] h-[5px] rounded-full bg-[#cfcfcf] mx-[1px]" />
								<div class="w-[1px] h-10 bg-[#cfcfcf]" />
								<div class="w-[5px] h-[5px] rounded-full bg-[#cfcfcf] mx-[1px]" />
							</div>
						</div>
					{:else}
						<div>
							<p
								title={item.name}
								class="text-[#aba7a7] text-ellipsis overflow-hidden"
								style="white-space: nowrap"
							>
								{item.name}
							</p>
							<p class="text-[#64748b] text-sm">{item.year[0]} - {item.year[1]}</p>
						</div>
					{/if}
				{/each}
			{/if}
		</div>
		<div class="sm:col-span-6">
			<div class="">
				<h1
					class={`text-white group-hover:text-[#5eead4] font-semibold ${
						typeof role == 'string' ? '' : 'hidden sm:block'
					}`}
				>
					{#if typeof role === 'string'}{role} {:else} {role[0].name}{/if} ·
					<span class="">{company?.name}</span><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
						aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
							clip-rule="evenodd"
						/></svg
					>
				</h1>
				<p class="text-[#94a3b8] text-base pt-2">
					{description}
				</p>
			</div>
			{#if techStack && techStack.length > 0}
				<ul class="flex gap-1 text-sm pt-5 flex-wrap">
					{#each techStack as tech}
						<li class=" bg-[#2dd4bf1a] rounded-full py-1 px-3">
							<p class="text-[#5eead4]">{tech}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</a>

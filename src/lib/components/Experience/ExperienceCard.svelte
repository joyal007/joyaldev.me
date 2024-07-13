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
		<div class="sm:col-span-2">
			<p class="text-[#64748b] text-sm">{year[0]} - {year[1]}</p>
		</div>
		<div class="sm:col-span-6">
			<div class="">
				<h1 class="text-white group-hover:text-[#5eead4] font-semibold">
					{role} · <span class="">{company?.name}</span><svg
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

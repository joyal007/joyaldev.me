<script>
	import fillArrowSvg from '$lib/assets/images/fillarrow.svg';
    import arrowSvg from '$lib/assets/images/arrow.svg';
    import mailSvg from "$lib/assets/images/mail.svg";
    import file1 from "$lib/assets/images/file.svg"
    import file2 from "$lib/assets/images/file-blue.svg"
    import file3 from "$lib/assets/images/file-green.svg"
    import phoneSvg from "$lib/assets/images/phone.svg"
	const contents = [
		{
			title: 'personal-info',
			items: [
				{
                    type: "folder",
					title: 'bio',
                    svg: file1,
					color: '#E99287',
					subItems:[{
                    type: "file",
                    title:"biography"
                    }]
				}
			]
		},
		{
			title: 'contacts',
			items: [
                {
                    type: "file",
                    svg: mailSvg,
                    title:"joyalraphel00@gmail.com"
                },
                {
                    type: "file",
                    svg: phoneSvg,
                    title:"+91-9947975499"
                }
            ]
		}
	];
    let activeElement = ""
    let subElement = ""
</script>
<!-- 
{#each contents as item,index}
	<button class="flex w-full h-full justify-start items-center gap-4 bg-accent-10 pl-[27px]" on:click={()=>{activeElement == item.title?activeElement ="":activeElement = item.title}}>
		<img alt="arrow" src={fillArrowSvg} class:rotate-90={item.title == activeElement} height="6px" width="8.5px" />
		<p class="py-[5px] font-FiraCode text-white font-normal not-italic text-base">
			{item.title}
		</p>
        
	</button>
    {#if activeElement == item.title}
        <div class="py-4 pl-[27px]">
            {#each contents[index].items as content}
                <div class="flex mb-2">
                    {#if content?.type == "folder"}
                    <img src={arrowSvg} alt="arrow" height="8px" width="12px"/>
                    {/if}
                    <img class="ml-3" src={content?.svg}/>
                    <p class="font-FiraCode text-base text-secondary font-normal not-italic ml-2 hover:text-white">{content.title}</p>
                </div>
            {/each}
        </div>
        {/if}
{/each} -->

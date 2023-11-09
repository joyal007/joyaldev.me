<script>
	import { goto } from "$app/navigation";
    export let image
    export let link
    export let website
    export let title
    export let content
    export let svg
    export let type
    import githubSvg from "$lib/assets/images/github-variant.svg"
</script>
<div class="h-full">
<p class="text-typo-blue text-base font-[700] not-italic font-FiraCode my-3">{title}</p>
<div class="rounded-[15px] relative border border-accent-10 overflow-hidden bg-primary-bg-variant">
    {#if type=="img"}
    <img src={image} class="w-full aspect-[1.81/1] h-full object-contain"/>
    {:else}
        <video width="100%" class="" height="146px" autoplay muted>
            <source src={image} type="video/webm">
        </video>
    {/if}
    <div class="absolute w-[28px] h-[28px] right-2 top-2 bg-accent-80 rounded-[2px] z-30 p-[3px]">
        <img src={svg} class="h-full w-full object-cover" alt="language"/>
    </div>
    <div class="px-[21px]">
        <p class="font-FiraCode text-base font-[450] text-secondary not-italic mt-5 mb-4">{content}</p>
        <div class="flex w-full justify-between items-center mb-[24px]">
            <a href={`${website?website:link}`} class="text-white rounded-[8px] font-[450] font-FiraCode text-sm px-[14px] py-[10px] bg-accent-30">view-project</a>
            {#if link}
            <a href="{link}" class="drop-shadow-md rounded-full w-8 h-8 bg-slate-700 p-[3px]">
                <img src={githubSvg} height="25px" width="25px"/>
            </a>
            {/if}
        </div>
    </div>
</div>
</div>
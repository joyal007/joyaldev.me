<script>
    import hambergerSvg from "$lib/assets/images/hamberger.svg";
    import closeSvg from "$lib/assets/images/close.svg";
    import { fly } from "svelte/transition";
    import githubSvg from "$lib/assets/images/github.svg";
    import twitterSvg from "$lib/assets/images/twitter.svg";
	import { cubicIn, cubicOut } from "svelte/easing";
    import linkedinSvg from "$lib/assets/images/linkedin.svg"
	import { goto } from "$app/navigation";
    let sidebarOpen = false;
    import { page } from "$app/stores";
    $:console.log($page.url.pathname)
</script>

<div class=" flex md:w-full justify-between items-center border-b-[1px] border-accent-10 relative">
    <div class="md:w-[400px] p-[18px]">
        <p class="font-FiraCode text-secondary w-fit text-base font-[450] not-italic ">Joyal-Raphel</p>
    </div>
    <div class="md:flex justify-between items-center w-full h-full relative hidden text-accent-10">
        <div class="flex justify-center items-center w-fit h-full">
            <a href="/" class="cursor-pointer  border-l-[1px] border-accent-10">
                <p class="px-[31px] py-[16px] h-full font-FiraCode  hover:text-white text-base font-[450] not-italic " class:text-white={$page.url.pathname == "/"} >_home</p>
            </a>
            <a href="/about" class="cursor-pointer  border-l-[1px] border-accent-10">
                <p class="px-[31px] py-[16px] h-full font-FiraCode  hover:text-white text-base font-[450] not-italic " class:text-white={$page.url.pathname == "/about"}>_about-me</p>
            </a>
            <a href="/projects" class="cursor-pointer  border-l-[1px] border-r-[1px] border-accent-10">
                <p class="px-[31px] py-[16px] font-FiraCode  hover:text-white text-base font-[450] not-italic " class:text-white={$page.url.pathname == "/projects"}>_projects</p>
            </a>
        </div>
        <div class="flex justify-center items-center">
            <a href="/contacts" class="cursor-pointer border-l-[1px]  border-accent-10">
                <p class="px-[31px] py-[16px] font-FiraCode  hover:text-white text-base font-[450] not-italic " class:text-white={$page.url.pathname == "/contacts"}>_contact-me</p>
            </a>
        </div>
    </div>
    <div on:click={()=>sidebarOpen = true} class="md:hidden p-[18px]">
        <img width="18px" height="16px" src={hambergerSvg} alt="hamberger-svg"/>
    </div>
</div>
{#if sidebarOpen }
<div class="p-2 fixed z-50 left-0 top-0 right-0 bottom-0 w-full h-full bg-primary-bg">
    <div class=" border border-accent-10 w-full h-full bg-primary-bg rounded-lg flex flex-col justify-between items-stretch" 
    in:fly|local={{ easing: cubicOut, x: 200, duration: 400 }}
    out:fly|local={{ easing: cubicIn, x: 200, duration: 400 }}>
        <div class="">
            <div class="flex justify-between items-center  p-[18px] border-b-[1px] border-accent-10">
                <p class="font-FiraCode text-secondary text-base font-normal not-italic ">Joyal-Raphel</p>
                <div class="h-fit w-fit p-2 " on:click={()=>sidebarOpen = false}>
                    <img width="16px" height="16px" src={closeSvg} class="pointer-events-none" alt="close-svg"/>
                </div>
            </div>
            <button on:click={()=>{sidebarOpen= false;goto("/")}} class="flex w-full justify-between items-center  p-[17px] border-b-[1px] border-accent-10">
                <p class="font-FiraCode text-white text-base font-normal not-italic ">_home</p>
                
            </button>
            <button on:click={()=>{sidebarOpen= false;goto("/about")}} class="flex w-full justify-between items-center  p-[17px] border-b-[1px] border-accent-10">
                <p class="font-FiraCode text-white text-base font-normal not-italic ">_about-me</p>
                
            </button>
            <button on:click={()=>{sidebarOpen= false;goto("/projects")}} class="flex w-full justify-between items-center  p-[17px] border-b-[1px] border-accent-10">
                <p class="font-FiraCode text-white text-base font-normal not-italic ">_projects</p>
                
            </button>
            <button on:click={()=>{sidebarOpen= false;goto("/contacts")}} class="flex w-full justify-between items-center  p-[17px] border-b-[1px] border-accent-10">
                <p class="font-FiraCode text-white text-base font-normal not-italic ">_contact-me</p>
                
            </button>
        </div>
        <div class="  border-t-[1px] border-accent-10 pl-[18px] flex relative justify-between items-center ">
            <div class="h-full">
                <p class="pt-[13px] pb-[15px] font-FiraCode text-base text-secondary not-italic font-[450]">find me in :</p>
            </div>
            <div class="flex justify-end items-center h-full">
                <a href="https://twitter.com/joyalDev" class="px-[16px] border-l-[1px] border-accent-10 h-full flex justify-center">

                    <img height="24px" width="24px" src={twitterSvg} alt="twitter"/>
                </a>
                <a href="https://twitter.com/joyalDev" class="px-[16px] py-[16px] border-l-[1px] border-accent-10 h-full flex justify-center">

                    <img height="24px" width="24px" src={linkedinSvg} alt="twitter"/>
                </a>
                <a href="https://github.com/joyal007" class="px-[16px] border-l-[1px] border-accent-10 h-full flex justify-center">

                    <img height="24px" width="24px" src={githubSvg} alt="github"/>
                </a>
                <!-- <img/> -->
            </div>
        </div>
        
    </div>
    
</div>
{/if}
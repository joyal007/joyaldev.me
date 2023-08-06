<script>
	import arrowSvg from "$lib/assets/images/fillarrow.svg";
	import termSvg from "$lib/assets/images/terminal.svg";
	import webSvg from "$lib/assets/images/webcam.svg";
	import joySvg from "$lib/assets/images/joystick.svg";
	import mailSvg from "$lib/assets/images/mail.svg";
    import phoneSvg from "$lib/assets/images/phone.svg"
	import { cubicInOut } from "svelte/easing";
	import { slide } from "svelte/transition";
	let opened = ""
</script>

<div class="flex justify-start h-full">
	<div class="hidden md:flex flex-col gap-5 justify-start h-full pt-5 border-r-[1px] border-accent-10 items-center w-[80px]">
		<img src={termSvg} height="24px" width="24px" alt="termial" />
		<img src={webSvg} height="24px" width="24px" alt="web" />

		<img src={joySvg} height="24px" width="24px" alt="joy" />

	</div>
	<div class="hidden md:flex flex-col h-full w-[330px] border-r-[1px] border-accent-10" >
            <div class="bg-accent-10 cursor-pointer w-full h-fit py-[5px] pl-[27px] flex gap-4" on:click={()=>opened == "contact"?opened="":opened="contact"}>
                <img src={arrowSvg} width="9px" height="6px" class:rotate-90={opened=="contact"}/>
                <p class="text-white pointer-events-none font-FiraCode text-base font-normal not-italic ">contacts</p>
            </div>
            {#if opened == "contact"}
            <div transition:slide={{easing: cubicInOut,duration:100}}
            >
                <div class="flex pl-[27px] gap-4 mt-4">
                    <img src={mailSvg} width="14px" height="11px"/>
                    <a class="text-white font-FiraCode text-base font-normal not-italic" href="mailto:joyalraphel00@gmail.com">joyalraphel00@gmail.com</a>
                </div>
                <div class="flex pl-[27px] gap-4 mt-4">
                    <img src={phoneSvg} width="14px" height="11px"/>
                    <a class="text-white font-FiraCode text-base font-normal not-italic" href="tel:+91-9947975499">+91-9947975499</a>
                </div>
            </div>
                {/if}
	</div>
	<div class="w-full">
		<p class="text-white pt-4 pl-[27px] font-FiraCode text-sm font-[450] leading-tight not-italic">
			_about-me
		</p>
		
		<div class="pl-[27px] mt-4 md:w-[700px] ">
			<p class="text-white font-FiraCode text-base font-[450] not-italic">
				// personal-info <span class="text-secondary">/ bio</span>
			</p>
			<div class="text-base font-FiraCode mt-4 text-secondary font-[450] pr-[21px]">
				🎓 Recent BTech Graduate 🎓<br />
				<br />
				👋 Hey there, I'm Joyal, a dynamic full-stack web developer on a mission to craft seamless, innovative
				online experiences. With a toolkit brimming with Node.js and Go for backend wizardry, and the artistry
				of React and SvelteKit for front-end finesse, I'm here to turn concepts into captivating digital
				realities.<br />
				<br />
				🚀 Engineering the Back-End 🚀 <br /><br />
				In the back-end realm, I wield the power of Node.js and Go to architect data-driven solutions that
				harmonize functionality and performance. My coding symphonies are tuned to create APIs, streamline
				data flows, and sculpt databases, ensuring that applications not only function flawlessly but also
				stand the test of scalability. <br /><br />
				✨ Front-End Enchantments ✨<br /><br />
				 Venturing into the front-end cosmos,
				I harness React and SvelteKit to craft interfaces that mesmerize and engage. From breathing life
				into UI components to orchestrating seamless user journeys, my creations are infused with aesthetics,
				interactivity, and a sprinkle of enchantment.
			</div>
		</div>
	</div>
</div>


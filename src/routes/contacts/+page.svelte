<script>
	import arrowSvg from '$lib/assets/images/fillarrow.svg';
	import mailSvg from '$lib/assets/images/mail.svg';
	import phoneSvg from '$lib/assets/images/phone.svg';
	import { cubicInOut } from 'svelte/easing';
	import githubSvg from '$lib/assets/images/github.svg';
	import twitterSvg from '$lib/assets/images/twitter.svg';
	import linkedinSvg from '$lib/assets/images/linkedin.svg';
	import { slide } from 'svelte/transition';
	import closeSvg from '$lib/assets/images/close.svg';
	let opened = '';
	let formElement;
	let message = '';
    let email = ""
	let subject = '';
    let date = new Date().toLocaleDateString('en-us', { weekday: 'short',day:"2-digit", month:"short"})
	let handleSubmit = () => {
		formElement.href = `mailto:joyalraphel00@gmail.com?subject=👋🏼Hello from ${subject}&body=${message}`;
		console.log(formElement);
		formElement.click();
	};
</script>

<div class="h-full flex flex-col">
	<div class="md:flex md:h-full">
		<p
			class="text-white md:hidden pt-4 pl-[27px] font-FiraCode text-sm font-[450] leading-tight not-italic"
		>
			_contact-me
		</p>
		<div class="mt-6 md:mt-0 flex-col gap-1 md:w-[320px] border-r-[1px] border-accent-10">
			<div
				class="bg-accent-10 cursor-pointer py-[5px] pl-[27px] flex gap-4"
				on:click={() => (opened == 'contact' ? (opened = '') : (opened = 'contact'))}
			>
				<img
					src={arrowSvg}
					width="9px"
					height="6px"
					class="pointer-events-none"
					class:rotate-90={opened == 'contact'}
				/>
				<p class="text-white pointer-events-none font-FiraCode text-base font-normal not-italic">
					contacts
				</p>
			</div>
			{#if opened == 'contact'}
				<div transition:slide={{ easing: cubicInOut, duration: 100 }} class="md:hidden">
					<div class="flex pl-[27px] gap-4 mt-4 ">
						<img src={mailSvg} width="14px" height="11px" />
						<a
							class="text-white font-FiraCode text-base font-normal not-italic"
							href="mailto:joyalraphel00@gmail.com">joyalraphel00@gmail.com</a
						>
					</div>
					<div class="flex pl-[27px] gap-4 mt-4">
						<img src={phoneSvg} width="14px" height="11px" />
						<a
							class="text-white font-FiraCode text-base font-normal not-italic"
							href="tel:+91-9947975499">+91-9947975499</a
						>
					</div>
				</div>
			{/if}
			<div class="hidden md:block">
					<div class="flex pl-[27px] gap-4 mt-4">
						<img src={mailSvg} width="14px" height="11px" />
						<a
							class="text-white font-FiraCode text-base font-normal not-italic"
							href="mailto:joyalraphel00@gmail.com">joyalraphel00@gmail.com</a
						>
					</div>
					<div class="flex pl-[27px] gap-4 mt-4">
						<img src={phoneSvg} width="14px" height="11px" />
						<a
							class="text-white font-FiraCode text-base font-normal not-italic"
							href="tel:+91-9947975499">+91-9947975499</a
						>
					</div>
			</div>
		</div>
		<div class=" mt-8 md:mt-0 w-full">
			<div class="hidden w-full md:block border-b border-accent-10">
				<div
					class="hidden md:flex text-base w-fit px-6 py-[5px] gap-5 border-accent-10 border-r-[1px] font-FiraCode font-normal not-italic text-secondary"
				>
					<p>Contacts</p>
					<img src={closeSvg} height="13px" width="13px" />
				</div>
			</div>
			<div class="md:grid grid-cols-2 justify-between items-center">
				<div class="max-w-3xl md:min-w-3xl md:flex md:mt-20 justify-center items-center">
					<form class="px-[27px]" on:submit={handleSubmit}>
						<a href="" class="hidden" bind:this={formElement}>Hii</a>
						<label class="w-full">
							<p class="font-FiraCode text-base font-[450] text-secondary mb-[10px] not-italic">
								_name:
							</p>
							<input
								bind:value={subject}
								type="text"
								class="text-white outline-none font-FiraCode text-base no-underline p-2 h-[41px] w-full rounded-[8px] border-1 border-accent-10 bg-primary-bg-variant"
							/>
						</label>
                        <label class="w-full hidden md:block">
							<p class="font-FiraCode text-base font-[450] text-secondary mb-[10px] not-italic">
								_email:
							</p>
							<input
								bind:value={email}
								type="text"
								class="text-white outline-none font-FiraCode text-base no-underline p-2 h-[41px] w-full rounded-[8px] border-1 border-accent-10 bg-primary-bg-variant"
							/>
						</label>
						<label class="mt-[18px] w-full">
							<p class="font-FiraCode text-base font-[450] text-secondary mb-[10px] not-italic">
								_message:
							</p>
							<textarea
								bind:value={message}
								rows="10"
								cols="40"
								class="text-white outline-none font-FiraCode text-base p-2 w-full rounded-[8px] border-1 resize-none border-accent-10 bg-primary-bg-variant"
							/>
						</label>
						<button
							type="submit"
							on:click={() => {}}
							class="text-white mt-4 rounded-[8px] font-[450] font-FiraCode text-sm px-[14px] py-[10px] bg-accent-30"
							>submit-message</button
						>
					</form>
				</div>
				<div class="hidden md:block w-full">
					<p class="font-FiraCode text-lg font-[450] not-italic">
						<span style="color:#C98BDF"> const </span> <span style="color:#5565E8"> button </span>
						<span style="color:#C98BDF"> =</span>
						<span style="color:#5565E8"
							>document.querySelector<span style="color:#FEA55F">( '#sendBtn' )</span>;</span
						><br />
						<br />
						<span style="color:#C98BDF"> const </span> <span style="color:#5565E8"> message </span>
						<span style="color:#C98BDF"> =</span>
						{@html '<span style="color:#607B96">{</span>'} <br />
						<span style="color:#5565E8">name</span>:
						<span style="color:#FEA55F">"{subject}"</span><span style="color:#607B96">,</span>
						<br /><span style="color:#5565E8"> email </span><span style="color:#607B96">:</span>
						<span style="color:#FEA55F">"{email}"</span><span style="color:#607B96">,</span><br />
						<span style="color:#5565E8"> message </span><span style="color:#607B96">:</span>
						<span style="color:#FEA55F">"{message}"</span><span style="color:#607B96">,</span> <br /><span
							style="color:#607B96">date:</span
						><span style="color:#FEA55F"> "{date}"</span><br
						/>{@html '<span style="color:#607B96">}</span>'}
                        <br/>
                        <br/>
                        <span style="color:#5565E8"> button.addEventListener </span>
                        <span style="color:#607B96">( </span><span style="color:#FEA55F">'click'</span><span style="color:#607B96">,</span><span style="color:#607B96">( )</span> <span style="color:#C98BDF">=></span>  {@html '<span style="color:#607B96">{</span>'}<br/> <span style="color:#5565E8"> form.send<span style="color:#607B96">(</span>message<span style="color:#607B96">);</span></span><br/> {@html '<span style="color:#607B96">} )</span>'}
					</p>
				</div>
			</div>
		</div>
	</div>
	<div
		class=" bottom-0 fixed z-40 bg-primary-bg border-[1px] border-accent-10 pl-[18px] flex w-full justify-between items-center"
	>
		<div class="h-full">
			<p class="pt-[13px] pb-[15px] font-FiraCode text-base text-secondary not-italic font-[450]">
				find me in :
			</p>
		</div>
		<div class="flex justify-end items-center h-full">
			<a
				href="https://twitter.com/joyalDev"
				class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
			>
				<img height="24px" width="24px" src={twitterSvg} alt="twitter" />
			</a>
			<a
				href="https://twitter.com/joyalDev"
				class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
			>
				<img height="24px" width="24px" src={linkedinSvg} alt="twitter" />
			</a>
			<a
				href="https://github.com/joyal007"
				class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
			>
				<img height="24px" width="24px" src={githubSvg} alt="github" />
			</a>
			<!-- <img/> -->
		</div>
	</div>
</div>

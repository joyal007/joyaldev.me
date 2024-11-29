<script>
	import bg1 from '$lib/assets/images/bg1.svg';
	import bg2 from '$lib/assets/images/bg2.svg';
	import githubSvg from '$lib/assets/images/github.svg';
	import twitterSvg from '$lib/assets/images/twitter.svg';
	import linkedinSvg from '$lib/assets/images/linkedin.svg';
	import codingSvg from '$lib/assets/images/coding.svg';
</script>

<div class=" h-[calc(100%-61px)] w-full flex flex-col justify-between main relative">
	<div class="md:flex w-full justify-center items-center gap-16 h-full overflow-y-hidden">
		<div class="pl-[27px] md:pl-0 mt-20 md:mt-0">
			<h2 class="text-lg pb-[10px] font-FiraCode text-accent-50 font-[450] not-italic">
				Hii all👋🏼. I am
			</h2>
			<h1
				class="text-[62px] w-40 md:w-full leading-[62px] font-FiraCode text-accent-50 font-normal not-italic"
			>
				Joyal Raphel
			</h1>
			<p class="text-typo-green text-xl md:text-3xl font-[450] font-FiraCode not-italic mt-[5px]">
				{@html '>  Software developer'}
			</p>
			<div class="hidden md:block mt-14">
				<p class="text-secondary font-sm font-FiraCode font-[450] not-italic">
					// find my profile on Github:
				</p>
				<p class="font-sm mt-4 font-FiraCode font-[500] not-italic">
					<span class="text-typo-blue">const</span>
					<span class="text-typo-green">github</span>
					<span class="text-white">=</span>
					<span class="text-typo-orange"
						><a href="https://github.com/joyal007">“https://github.com/joyal007”</a></span
					>
				</p>
			</div>
		</div>
		<div class="hidden md:flex flex-col gap-4">
			<div class="absolute z-10 w-fit h-[calc(100%-61px)] blur-lg overflow-y-clip">
				<img
					src={bg1}
					width="454px"
					height="492px"
					class="relative -z-10 -left-10 -top-20 rotate-45 right-0"
				/>
				<img
					src={bg2}
					width="454px"
					height="492px"
					class="absolute -z-10 left-32 top-20 rotate-45 right-0"
				/>
			</div>
			<img width="520px" class="blur-sm" height="182px" src={codingSvg} />
			<img width="520px" height="182px" class="relative z-30" src={codingSvg} />
			<img width="520px" height="182px" class="blur-sm" src={codingSvg} />
			<img width="520px" height="182px" class="blur-sm" src={codingSvg} />
		</div>
	</div>
	<div class="absolute md:hidden -z-10 w-full h-[calc(100%-61px)] blur overflow-hidden">
		<img
			src={bg1}
			width="255px"
			height="277px"
			class="relative -z-10 left-50 top-10 rotate-12 right-0"
		/>
		<img
			src={bg2}
			width="255px"
			height="277px"
			class="absolute -z-10 -right-20 top-32 rotate-12 right-0"
		/>
	</div>
	<div>
		<div class="md:hidden pl-[27px] mb-10">
			<p class="text-secondary font-sm font-FiraCode font-[450] not-italic">
				// find my profile on Github:
			</p>
			<p class="font-sm mt-4 font-FiraCode font-[500] not-italic">
				<span class="text-typo-blue">const</span>
				<span class="text-typo-green">github</span>
				<span class="text-white">=</span>
				<span class="text-typo-orange"
					><a href="https://github.com/joyal007">“https://github.com/joyal007”</a></span
				>
			</p>
		</div>
		<div
			class=" bottom-0 z-40 bg-primary-bg border-[1px] border-accent-10 pl-[18px] flex w-full justify-between md:justify-normal items-center"
		>
			<div class="h-full md:w-[120px]">
				<p
					class="pt-[13px] pb-[15px] pr-[15px] w-fit font-FiraCode text-base text-secondary not-italic font-[450]"
				>
					find me in :
				</p>
			</div>
			<div class="flex justify-end md:justify-between md:w-full items-center h-full">
				<div class="flex justify-start">
					<a
						href="https://twitter.com/joyalDev"
						class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
					>
						<img height="24px" width="24px" src={twitterSvg} alt="twitter" />
					</a>
					<a
						href="https://www.linkedin.com/in/joyalraphel/"
						class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
					>
						<img height="24px" width="24px" src={linkedinSvg} alt="twitter" />
					</a>
				</div>
				<div class="text-secondary flex">
					{/**<a
						href="https://github.com/joyal007"
						class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
					>
						<p
							class="hidden hover:text-white md:block text-base font-FiraCode mr-2 pl-1 font-normal not-italic"
						>
							Resume
						</p>
					</a> **/}
					<a
						href="https://github.com/joyal007"
						class="px-[14px] py-[14px] border-l-[1px] border-accent-10 h-full flex justify-center"
					>
						<p
							class="hidden hover:text-white md:block text-base font-FiraCode mr-2 pl-1 font-normal not-italic"
						>
							@joyal007
						</p>
						<img height="24px" width="24px" src={githubSvg} alt="github" />
					</a>
				</div>
				<!-- <img/> -->
			</div>
		</div>
	</div>
</div>

<style>
	/* .main{
        background-image: url("/src/lib/assets/images/bg1.svg");
        background-repeat: no-repeat;
    }     */
</style>

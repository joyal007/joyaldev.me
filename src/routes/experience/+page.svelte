<script>
	import ExperienceCard from '$lib/components/Experience/ExperienceCard.svelte';

	const experiences = [
		{
			year: ['July, 2024', 'PRESENT'],
			role: 'Software Engineer Contr.',
			company: { name: 'FalconX', link: 'https://www.falconx.io' },
			description:
				'FalconX is a digital asset trading platform, and Satoshi is our AI copilot that supports trading with market insights, technical help, and investment guidance. I’m an engineer on the Satoshi project, working to enhance its features and user experience.'
			// techStack: ['React JS', 'Nest JS', 'MUI', 'Cloudflare', 'MongoDB', 'Typescript']
		},
		{
			year: ['July, 2024', 'PRESENT'],
			role: [
				{ name: 'Software Engineer', year: ['Oct ,2025', 'PRESENT'] },
				{ name: 'Associate Software Engineer', year: ['July, 2024', 'Sep, 2025'] }
			],
			company: { name: 'Tarams', link: 'https://www.tarams.com' },
			description:
				'At Tarams, we specialize in bridging the gap between ideas and thriving digital ecosystems. With expertise in Product Engineering and Data Engineering & Data Science, we define the path to success, helping companies scale their businesses.'
			// techStack: ['React JS', 'Nest JS', 'MUI', 'Cloudflare', 'MongoDB', 'Typescript']
		},
		{
			year: ['Dec, 2023', 'Jun, 2024'],
			role: 'Full stack developer Intern',
			company: { name: 'Vidyalai', link: 'https://www.vidyalai.com' },
			description:
				'Vidyalai is an online learning platform offering live courses to students worldwide, with users spanning over 10 countries. I am responsible for developing and maintaining the platform, working on both frontend and backend.',
			techStack: ['React JS', 'Nest JS', 'MUI', 'Cloudflare', 'MongoDB', 'Typescript']
		}
	];
</script>

<div>
	<!-- <p class="text-white pt-4 pl-[27px] font-FiraCode text-sm font-[450] leading-tight not-italic">
		_projects
	</p> -->
	<div class="px-2 mt-5 w-full flex items-center flex-col gap-4">
		{#each experiences as experience}
			<ExperienceCard {...experience} />
		{/each}
	</div>
</div>

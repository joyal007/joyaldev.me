<script>
	import ExperienceCard from '$lib/components/Experience/ExperienceCard.svelte';

	const experiences = [
		{
			year: ['Dec, 2023', 'PRESENT'],
			role: 'Full stack developer Intern',
			company: { name: 'Vidyalai', link: 'https://vidyalai.com' },
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
	<div class="px-2 mt-5 w-full flex items-center flex-col">
		{#each experiences as experience}
			<ExperienceCard {...experience} />
		{/each}
	</div>
</div>

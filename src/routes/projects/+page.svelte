<script>
	import Card from '$lib/components/Projects/Card.svelte';
	import nautilusImg from '$lib/assets/images/nautilus.webm';
	import icefossImg from '$lib/assets/images/icefoss.webm';
	import jsSvg from '$lib/assets/images/js.svg';
	import m3homeImg from '$lib/assets/images/m3homes.png';
	import pdfEditorImg from '$lib/assets/images/pdfeditor.svg';
	import reactSvg from '$lib/assets/images/react.svg';
	import yalGamerImg from '$lib/assets/images/yalgamers.png';
	const formbricksImg =
		'https://user-images.githubusercontent.com/675065/203262290-3c2bc5b8-839c-468a-b675-e26a369c7fe2.png';
	import goSvg from '$lib/assets/images/go.svg';
	import goImg from '$lib/assets/images/goBan.webp';
	const shortendImg =
		'https://i0.wp.com/www.thestartupfounder.com/wp-content/uploads/2022/10/Link-Shortener.jpg?fit=640%2C480&ssl=1';
	import htmlSvg from '$lib/assets/images/html.svg';
	import unsplashImg from '$lib/assets/images/unsplash.png';

	const formeditorImg =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkIc791fFEqtwVdO-d6k-zOQCOCo15PIGS3NrsZz2ldIllz5-Dltoy8q4z01dzkha4tw&usqp=CAU';
	const projects = [
		{
			link: 'https://github.com/formbricks/formbricks/pull/931',
			title: 'formbricks',
			img: formbricksImg,
			cont: `My first open-source contribution.\n 
            My PR is about introducing keyboard gestures to formbricks for better UX`,
			svg: jsSvg,
			type: 'img',
			website: 'https://formbricks.com'
		},
		{
			link: '',
			title: 'Yal_gamers',
			img: yalGamerImg,
			cont: 'Yalgamers is an application for gaming community. Built using svelteJs',
			svg: jsSvg,
			type: 'img',
			website: 'https://yalgamers.gg'
		},
		{
			link: 'https://github.com/joyal007/url-shortened/',
			title: 'Url-shortener',
			img: shortendImg,
			cont: `Easy url shortener for making urls shortend, created using Next JS and Postgres`,
			svg: jsSvg,
			type: 'img',
			website: 'https://url.joyaldev.me'
		},
		{
			link: 'https://github.com/joyal007/unsplash-gallery',
			title: 'Unsplash Gallery',
			img: unsplashImg,
			cont: `An image gallery with search feature. Images are retrieved from UnSplash`,
			svg: jsSvg,
			type: 'img',
			website: 'https://url.joyaldev.me/UV73Xt'
		},
		{
			link: 'https://github.com/joyal007/form-editor/',
			title: 'FormEditor (Developing)',
			img: formeditorImg,
			cont: `Simple formeditor with 3 types of question. Along with drag and drop features`,
			svg: jsSvg,
			type: 'img',
			website: 'https://formeditor.joyaldev.me'
		},
		{
			link: 'https://github.com/joyal007/pdf-editor',
			title: 'Pdf Splitter (Developing)',
			img: pdfEditorImg,
			cont: 'Simple pdf splitter for easy and instant pdf splitting and swapping pages',
			svg: jsSvg,
			type: 'img',
			website: 'https://pdfsplitter.joyaldev.me'
		},
		{
			link: 'https://github.com/joyal007/Icefoss-checkin',
			title: 'Go-Backend',
			img: goImg,
			cont: 'Backend RestFul API using GO',
			svg: goSvg,
			type: 'img'
		},
		{
			link: 'https://github.com/joyal007/Nautilus',
			title: 'Nautilus',
			img: nautilusImg,
			type: 'video',
			cont: 'Project developed using  HTML, JS, Node.JS',
			svg: jsSvg,
			website: 'https://www.github.joyaldev.me/Nautilus/'
		},
		{
			type: 'video',
			link: 'https://github.com/joyal007/ICEFOSS2023',
			title: 'ICEFOSS',
			img: icefossImg,
			cont: 'Project developed using  HTML, JS, Node.JS',
			svg: jsSvg,
			website: 'https://www.github.joyaldev.me/ICEFOSS2023/'
		},
		{
			link: 'https://github.com/joyal007/ICEFOSS2023',
			title: 'CodingCamp',
			img: 'https://user-images.githubusercontent.com/60638195/234769497-81167498-48a0-4e67-999d-7a3326756ad5.mov',
			cont: 'Project developed using  React, Node JS',
			svg: reactSvg,
			type: 'video'
		},
		{
			title: 'M3homes',
			img: m3homeImg,
			cont: 'Project developed using  HTML, JS, Node.JS',
			svg: htmlSvg,
			website: 'https://m3homes.co.in/',
			type: 'img'
		},
		{
			link: 'https://github.com/joyal007/Excel_Clone',
			title: 'Excel_clone',
			img: 'https://user-images.githubusercontent.com/60638195/234772216-08f63d00-a4d1-4601-a842-4b17c734d5e4.mp4',
			cont: 'Project developed using PHP, HTML, JS, mysql',
			svg: jsSvg,
			type: 'video'
		},
		{
			link: 'https://github.com/joyal007/Admin-Dashboard-React',
			title: 'Admin_DashBoard',
			img: 'https://user-images.githubusercontent.com/60638195/234778001-faa38de7-f56a-4682-833f-5dc36f32cac0.mp4',
			cont: 'Project developed using React, Mui',
			svg: reactSvg,
			type: 'video'
		}
	];
</script>

<div>
	<!-- <p class="text-white pt-4 pl-[27px] font-FiraCode text-sm font-[450] leading-tight not-italic">
		_projects
	</p> -->
	<div class="mx-[27px] mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each projects as project}
			<Card
				type={project.type}
				image={project.img}
				website={project.website}
				title={project.title}
				svg={project.svg}
				link={project.link}
				content={project.cont}
			/>
		{/each}
	</div>
</div>

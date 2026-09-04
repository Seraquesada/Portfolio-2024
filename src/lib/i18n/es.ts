import { Dictionary, PROJECT_LINKS, REFERRAL_LINKS } from './types'

const es: Dictionary = {
	htmlLang: 'es-AR',
	nav: {
		about: 'Sobre mí',
		works: 'Experiencia',
		skills: 'Skills',
		studies: 'Educación',
		projects: 'Proyectos',
		referrals: 'Referencias',
		hire: 'Contacto',
	},
	subtitle: 'Desarrollador Front-End argentino · +2 años de experiencia',
	common: {
		webSite: 'sitio web',
		github: 'git hub',
		stack: 'Stack: ',
	},
	about: {
		title: 'Sobre mí',
		intro: (age) =>
			`Hola, soy Serafín Quesada, Desarrollador Front-End de ${age} años con más de 2 años de experiencia, nacido en el sur de Argentina, la Patagonia.`,
		work: 'Diseño y desarrollo interfaces web con React, TypeScript y Next.js, enfocado en soluciones escalables, eficientes y centradas en el usuario. Mi trabajo más reciente fue el buyflow oficial del Mundial FIFA 2026, una plataforma de alto tráfico y crítica para el negocio.',
		personal:
			'Muy fanático de la naturaleza, los deportes y los videojuegos.',
	},
	works: {
		title: 'Experiencia',
		items: [
			{
				company: 'Direct TV / Globant',
				role: 'Desarrollador Front-End',
				date: '11/2025 - 07/2026',
				highlights: [
					'Actualicé el buyflow oficial del Mundial FIFA 2026 con React y TypeScript, trabajando sobre un flujo de alto tráfico y crítico para la facturación.',
					'Construí componentes reutilizables dentro de un monorepo, aportando al design system compartido entre varios equipos.',
					'Desarrollé páginas web con Next Js 13, usando Nx para manejar el versionado del monorepo.',
					'Usé Liferay para crear y administrar contenido, agilizando las actualizaciones de páginas por parte de perfiles no técnicos.',
				],
				stack: 'React, TypeScript, Jest, Tailwind, Next Js 13 y Liferay.',
			},
			{
				company: 'Airtable / Globant',
				role: 'Desarrollador Front-End',
				date: '01/2025 - 11/2025',
				highlights: [
					'Construí interfaces web dinámicas y responsivas con TypeScript y React, mejorando la experiencia de los usuarios.',
					'Entregué nuevas funcionalidades y diseños de UI en plazos ajustados, cuidando tanto el funcionamiento como el detalle visual.',
					'Diseñé y desarrollé componentes de UI centrados en el usuario, mejorando la usabilidad.',
					'Mantuve un código limpio y confiable con análisis continuo en SonarQube.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind, Node Js y Contentful.',
			},
			{
				company: 'Upler',
				role: 'Desarrollador Front-End',
				date: '01/2023 - 10/2024',
				highlights: [
					'Aporté a aplicaciones front-end modernas usando TypeScript y React.',
					'Diseñé interfaces intuitivas, mejorando la interacción y la satisfacción del usuario.',
					'Plataforma que combina una solución de gestión de software con un gran marketplace donde las personas encuentran todo el software que necesitan para sus proyectos.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind y Node Js.',
				github: PROJECT_LINKS.uplerGithub,
			},
			{
				company: 'Materia Prima',
				role: 'Desarrollador Front-End Freelance',
				date: '07/2024',
				highlights: [
					'Propuse e implementé Next Js y Tailwind para lograr soluciones escalables.',
					'Mantuve altos estándares de código y gestioné los repositorios en GitHub.',
					'Sitio donde se puede ver el trabajo que hace la empresa y ponerse en contacto.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind, Node Js y GSAP.',
				webSite: PROJECT_LINKS.materiaPrimaSite,
				github: PROJECT_LINKS.materiaPrimaGithub,
			},
		],
	},
	skills: {
		title: 'Skills',
		groups: [
			{
				title: 'Principales',
				items: [
					'HTML (Avanzado)',
					'CSS (Avanzado)',
					'JavaScript (Avanzado)',
					'React (Avanzado)',
					'TypeScript (Avanzado)',
					'Next Js (Intermedio)',
				],
			},
			{
				title: 'Herramientas y otros',
				items: [
					'Tailwind (Avanzado)',
					'Jest (Intermedio)',
					'SonarQube (Intermedio)',
					'GitHub (Intermedio)',
					'Postman (Intermedio)',
					'SASS (Intermedio)',
				],
			},
			{
				title: 'Idiomas',
				items: ['Español (nativo - C2)', 'Inglés (avanzado - C1)'],
			},
		],
	},
	studies: {
		title: 'Educación',
		school: 'Digital House',
		date: '01/2022 - 12/2023',
		degree: 'Certified Tech Developer (CTD)',
		description:
			'Carrera de dos años donde en el primero se aprenden los conceptos base de la programación web y en el segundo te especializás en el área que elegís, en mi caso Front-End.',
		rows: [
			{
				label: 'Stack Front-End: ',
				value: 'HTML, CSS, JavaScript, React Js, Next Js, TypeScript y Jest.',
			},
			{
				label: 'Stack Back-End: ',
				value: 'Java, SpringBoot, Selenium Web Driver y JUnit.',
			},
			{ label: 'Base de datos: ', value: 'MySql.' },
			{
				label: 'Herramientas de infraestructura: ',
				value: 'AWS y Docker.',
			},
			{
				label: 'Herramientas de trabajo: ',
				value: 'Git, GitHub y GitLab.',
			},
		],
	},
	projects: {
		title: 'Proyectos',
		items: [
			{
				title: 'Front-End - Digital Booking',
				date: '19/10/2022 - 12/12/2022',
				description:
					'Sistema de alquiler de autos donde podés elegir el vehículo según la ubicación y la categoría.',
				stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git y Github',
				github: PROJECT_LINKS.digitalBooking,
			},
			{
				title: 'Front-End - PassPortal',
				date: '15/10/2023 - 15/12/2023',
				description:
					'Web donde podés encontrar los últimos eventos y conseguir tus entradas para asistir.',
				stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git y Github',
				github: PROJECT_LINKS.passPortal,
			},
		],
	},
	referrals: {
		title: 'Referencias',
		lead: 'Referencias de personas con las que trabajé o estudié',
		readMore: 'Ver más',
		readLess: 'Ver menos',
		items: [
			{
				name: 'Joaquin Marmol',
				position: 'Desarrollador Frontend',
				description:
					'Durante nuestro tiempo en Upler, una startup especializada en la gestión de licencias de software, tuve el placer de trabajar muy de cerca con Serafín. Su experiencia en desarrollo frontend, sumada a su formación en el programa Certified Tech Developer (CTD), lo convirtió en una pieza clave del equipo. Serafín demostró siempre dedicación, solvencia técnica y una actitud positiva, lo que contribuyó de manera significativa al éxito de nuestros proyectos. Lo recomiendo sin dudarlo para cualquier oportunidad futura, con plena confianza en su capacidad para programar y aportar valor.',
				...REFERRAL_LINKS.joaquin,
			},
			{
				name: 'Tomas Bernandin',
				position: 'Desarrollador Backend',
				description:
					'Compartí con Serafín mis estudios en Digital House, en la carrera Certified Tech Developer. Él fue el responsable del área de FrontEnd en el proyecto final del programa. Es un gran profesional y, sobre todo, una gran persona, siempre aportando de forma positiva al equipo.',
				...REFERRAL_LINKS.tomas,
			},
			{
				name: 'Luca Beati',
				position: 'Desarrollador Backend',
				description:
					'Tuve el placer de trabajar con Serafín en los dos proyectos integradores de la carrera CTD (Certified Tech Developer). Ambas veces fueron un placer; estuvo comprometido tanto con los proyectos como con sus tareas, cumplió los plazos, pero por sobre todo siempre tuvo predisposición para trabajar, proactividad y, lo más importante, una actitud positiva. ¡Espero que volvamos a cruzarnos en futuros proyectos!',
				...REFERRAL_LINKS.luca,
			},
			{
				name: 'Cesar Calderon',
				position: 'Desarrollador Frontend',
				description:
					'Tuve el privilegio de trabajar junto a Serafin en Globant, y es uno de los profesionales más dedicados con los que he coincidido. Desde el primer día destacó por su gran trabajo en equipo y su disposición.Siempre está listo para colaborar, discutir soluciones o ayudar a cualquier compañero, generando un ambiente de trabajo excepcional.					Técnicamente, su impacto es notable.Es admirable su rápido crecimiento profesional.Tiene una agilidad de aprendizaje, asumiendo nuevos retos técnicos a una velocidad que supera ampliamente las expectativas. Serafin mejora tanto la base de código como la dinámica de todo el equipo de desarrollo.Lo recomiendo a ojo cerrado.',
				...REFERRAL_LINKS.cesar,
			},
		],
	},
	hire: {
		title: 'Contacto',
		question: '¿Buscás un Desarrollador Front-End?',
		lead: 'Escribime',
		downloadCv: 'Descargar CV',
		cvPath: '/FrontEnd-SerafinQuesada-ESP.pdf',
		cvFileName: 'FrontEnd-SerafinQuesada-ESP.pdf',
		copied: 'Gmail copiado al portapapeles',
		copyEmail: 'Copiar la dirección de correo al portapapeles',
	},
	toggles: {
		theme: (next) =>
			next === 'dark' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro',
		language: 'Switch the language to English',
		languageShort: 'EN',
	},
}

export default es

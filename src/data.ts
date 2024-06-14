import { Data } from "./types/Data.types";

import Project1 from './assets/projects/1.png'
import Project2 from './assets/projects/2.png'
import Project6 from './assets/projects/6.png'

export const data: Data = {
	creator: "Jorge Pires",
	work: "Desenvolvedor Full-Stack",
	bio: "Sou um estudante de ciência da computação na UFSCar, apaixonado por desenvolvimento e criação de novos desafios. Atualmente faço parte do PET-BCC como bolsista, atuando em diversos projetos de desenvolvimento.",
	email: "jlmp2002@gmail.com",
	timeline: [
		{
			title: "Bolsista PET-BCC",
			date: "Julho 2023",
			description: "Ativo em diversos projetos, principalmente relacionados a Desenvolvimento Web e Github.",
			link: "https://petbcc.ufscar.br"
		},
		{
			title: "UFSCar",
			date: "Março 2020",
			description: "Graduando na Universidade Federal de São Carlos em Ciência da Computação."
		}
	],
	projects: [
		{
			id: 1,
			title: "Webchat to PET-BCC",
			demo_link: "https://petbcc-webchat.vercel.app",
			size: "2x2",
			tec: ["ReactJs", "TailwindCSS", "Firebase", "JavaScript" ],
			desc: "Utilizando autenticação via email, via Firebase, o ChatApp foi criado como um protótipo para ser colocado dentro do site do PET-BCC para a comunicação entre os membros. ",
			img: Project2
		},
		{
			id: 2,
			title: "Kings League API",
			github_link: "https://github.com/jorgeprj/kings-league-api",
			size: "1x2",
			tec: ["Python", "SQLite", "Flask", "Web Scraping"],
			desc: "Uma API da Kings League World Cup 2024. Ela foi construida utilizando Flask e com um banco de dados em SQLite. Os dados são retirados do site oficial através de um script de web-scraping.",
			big_desc: [
				"Inicialmente, o projeto começou com a construção de uma API simples de jogadores utilizando Python, com a biblioteca Flask, e SQLite como banco de dados. Durante o processo, ficou claro a necessidade de um script de web-scraping, devido ao tamanho do dataset (+400 jogadores).",
				"Para o web-scraping, também foi utilizado Python, com a biblioteca Beautiful Soup. O script identifica padrões específicos de classe em tags HTML no site oficial da Kings World Cup, extrai os valores e os organiza em uma tabela usando a biblioteca Pandas. Após o processamento completo, os dados foram exportados para o arquivo players.csv.",
				"Para finalizar, foi desenvolvido um código simples que lê o arquivo players.csv e insere os dados no SQLite."
			]
		},
		{
			id: 3,
			title: "Nubank Landing Page",
			demo_link: "https://nubank-landing-page.vercel.app",
			size: "2x2",
			tec: ["NextJs", "TailwindCSS"],
			desc: "Representação simplificada do site oficial do banco Nubank. A ideia era criar um landing page simples utilizando NextJS e TailwindCSS",
			img: Project1
		},
		{
			id: 4,
			title: "Pass.in",
			github_link: "https://github.com/jorgeprj/passin",
			size: "1x2",
			tec: ["Java"],
			desc: "A criação do backend de um site de gestão de participantes em eventos presenciais. A aplicação utiliza Java para fazer funções como adicionar e remover participantes, dar check-in e muito mais.",
		},
		{
			id: 5,
			title: "CS2 Match Simulator",
			github_link: "https://github.com/jorgeprj/cs2-match-simulator",
			size: "1x2",
			tec: ["ReactTs", "TailwindCSS", "Typescript"],
			desc: "Um simulador interativo de uma partida de CS2 com acesso as estatisticas dos jogadores durante a partida. A aplicação utiliza TypeScript para criar um algoritmo de kill, utilizando toda a lógica do jogo real.",
		},
		{
			id: 6,
			title: "GoodFood",
			github_link: "https://github.com/jorgeprj/goodfood-react",
			size: "2x2",
			tec: ["ReactJs", "CSS"],
			desc: "Um site fictício de comida contendo receitas, análise dos chefes, ranking... Os dados são retirados de arquivos JSON e todas as imagens são geradas com IA.",
			img: Project6
		},
		{
			id: 7,
			title: "Arca do Cerrado",
			github_link: "https://github.com/petbccufscar/arca-do-cerrado",
			size: "1x2",
			tec: ["ReactJS", "TailwindCSS", "Django", "JavaScript", "Python" ],
			desc: "A criação de um site para o Arca do Cerrado da UFSCar. O site possui uma mapa interativo construido com o Leaflet, envio de mensagem, blog e um backend feito em Django.",
		},
		{
			id: 7,
			title: "CSGO Major Cards",
			github_link: "https://github.com/jorgeprj/csgo-major-cards",
			demo_link: "https://github.com/jorgeprj/csgo-major-cards",
			size: "1x2",
			tec: ["HTML", "CSS", "JavaScript"],
			desc: "Design de carta feito em HTML e CSS. É possivel mudar o jogador através de uma menu lateral que utiliza um script em JS."
		},
	],
	socialMedia: [
		{
			name: "linkedin",
			link: "https://linkedin.com/in/jorgeprj",
			title: "Se conecte no Linkedin!",
			text1: "Conheça meu linkedin, e se contecte comigo!",
		},
		{
			name: "github",
			title: "Me siga no Github!",
			link: "https://github.com/jorgeprj",
			text1: "+20 repositórios",
			text2: "+856 contribuições"
		},

	],
	certificates: [
		{
			name: "NLW Unite Java",
			from: "Rocketseat",
			link: ""
		},
		{
			name: "NLW Unite Python",
			from: "Rocketseat",
			link: ""
		},
		{
			name: "Curso de JavaScript e TypeScript do básico ao avançado JS/TS",
			from: "Udemy",
			link: ""
		},
		{
			name: "Fundamentos para Desenvolvimento de Software por Microsoft e LinkedIn",
			from: "Microsoft",
			link: ""
		}
	]
} as const;

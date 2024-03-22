export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "project" | "projects";

export interface GridItemInterface {
	layout: GridItemLayout;
	type: GridItemType;
	title: string;
	icon?: string;
	username?: string;
	description?: string;
	color?: string;
	buttonTitle?: string;
	buttonLink?: string;
	buttonSecondaryText?: string;
	stars?: number;
	projects?: ProjectItem[];
	image?: string;
}

export type ProjectItem = {
	title: string;
	link: string;
};

export const GridItems: GridItemInterface[] = [
	{
		layout: "2x2",
		type: "project",
		title: "Nubank Landing Page",
		icon: "github",
		username: "NextJS - TailwindCSS",
		description:
			"Essa Landing Page é uma representação simplificada do site oficial do banco Nubank.",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://github.com/jorgeprj/nubank-landing-page",
		color: "black",
	},
	{
		layout: "2x2",
		type: "project",
		title: "Arca do Cerrado",
		icon: "github",
		username: "React - Tailwind - Django",
		description:
		"A criação de um site para o Arca do Cerrado da UFSCar com um Mapa Interativo. ",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://github.com/petbccufscar/arca-do-cerrado",
		color: "black",
	},
	{
		layout: "2x4",
		type: "projects",
		title: "Todos os Projetos",
		image: "/projects.png",
		projects: [
			{
				title: "Nubank Landing Page",
				link: "https://github.com/jorgeprj/nubank-landing-page",
			},
			{
				title: "Hattrick",
				link: "https://github.com/jorgeprj/hattrick-react",
			},
			{
				title: "eBid",
				link: "https://github.com/jorgeprj/ebid-react",
			},
			{
				title: "GoodFood",
				link: "https://github.com/jorgeprj/goodfood-react",
			},
			{
				title: "Bucks",
				link: "https://github.com/jorgeprj/bucks-react",
			},
			{
				title: "To-Do List",
				link: "https://github.com/jorgeprj/todo-list-react",
			},
			{
				title: "Taskee",
				link: "https://github.com/jorgeprj/taskee-react",
			},
			{
				title: "CSGO Match Simulator",
				link: "https://github.com/jorgeprj/csgo-match-simulator",
			},
		],
	},
	{
		layout: "2x2",
		type: "project",
		title: "WebChat via Email",
		icon: "github",
		username: "React - StyledComponents - Firebase",
		description:
			"Projeto desenvolvido para criar um ambiente de comuniação entre os membros do PET via email.",
		color: "black",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://github.com/jorgeprj/web-chat",
	}
];

export const siteConfig = {
	creator: "Jorge Pires",
	title: "Desenvolvedor",
	bio: "Sou um estudante de ciência da computação na UFSCar, apaixonado por desenvolvimento web e design de interfaces.",
	email: "jorgeprjdev@gmail.com",
	items: GridItems,
} as const;

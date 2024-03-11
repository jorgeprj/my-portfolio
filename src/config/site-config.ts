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
		title: "CSGO Major Cards",
		icon: "github",
		username: "HTML - CSS - JavaScript",
		description:
		"Um projeto para representar alguns jogadores brasileiros em cartas com características únicas.",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://jorgeprj.github.io/csgo-major-cards/",
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
		],
	},
	{
		layout: "2x2",
		type: "project",
		title: "eBid - Site de Leilão",
		icon: "github",
		username: "React - TailwindCSS",
		description:
			"Projeto que consiste em um site de vendas de itens de colecionador em formato de leilão.",
		color: "black",
		buttonTitle: "Saiba Mais",
		buttonLink: "#",
	}
];

export const siteConfig = {
	creator: "Jorge Pires",
	title: "Desenvolvedor Front-end",
	bio: "Sou um estudante de ciência da computação na UFSCar, apaixonado por desenvolvimento web e design de interfaces.",
	location: "São Paulo, Brasil",
	locationLink: "https://www.google.com/maps/place/Ribeirão+Preto,+SP/@-21.1796323,-47.8025861,12z/data=!3m1!4b1!4m6!3m5!1s0x94b9bf1d68acc21d:0x37b8ee0abedeea39!8m2!3d-21.1694018!4d-47.8110855!16zL20vMDFzcXNz?entry=ttu",
	email: "jorgeprjdev@gmail.com",
	items: GridItems,
} as const;

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "certificate";

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
		type: "social",
		title: "UFSCar",
		icon: "ufscar",
		username: "Bacharelado, Ciência da Computação",
		description:
			"Graduando em Ciência da Computação pela Universidade Federal de São Carlos (UFSCar).",
		color: "#E74A51",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://www.ufscar.br",
	},
	{
		layout: "1x2",
		type: "social",
		title: "LinkedIn",
		icon: "linkedin",
		username: "@jorgeprj",
		buttonTitle: "Conexão",
		buttonLink: "https://www.linkedin.com/in/jorgeprj/",
		color: "#0077B5",
	},
	{
		layout: "1x2",
		type: "social",
		title: "Github",
		icon: "github",
		username: "@jorgeprj",
		buttonTitle: "Seguir",
		buttonSecondaryText: "10",
		buttonLink: "https://github.com/jorgeprj",
		color: "#070707",
	},
	{
		layout: "2x4",
		type: "project",
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
		type: "social",
		title: "PET-BCC",
		icon: "pet",
		username: "Bolsista do PET-BCC",
		description:
			"Ativo em diversos projetos, principalmente relacionados a Desenvolvimento Web e Github.",
		color: "#008CB8",
		buttonTitle: "Saiba Mais",
		buttonLink: "https://petbcc.ufscar.br",
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

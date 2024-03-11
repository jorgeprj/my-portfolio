import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jorge Pires - Portfolio",
	description: siteConfig.bio,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" className="h-full">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="flex flex-col h-full">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

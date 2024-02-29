"use client";
import { siteConfig } from "@/config/site-config";
import { Download, Mail } from "lucide-react";
import Footer from "./Footer";
import Button from "./forms/Button";
import Image from "next/image";
import Avatar from "./Avatar";

const Header = () => {
	return (
		<header key="header" className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full">
			<div>
				<Avatar/>
				<div className="mt-6">
					<div className="font-semibold text-primary mb-2">{siteConfig.title}</div>
					<h1 className="text-4xl font-bold mb-1">{siteConfig.creator}</h1>
					<p className="text-neutral-500">{siteConfig.bio}</p>
				</div>


				<div className="flex items-center gap-3 mt-6">
					<Button href="/CV.pdf">
						<Download size="14" />
						Curriculo
					</Button>
					<Button href={`mailto:${siteConfig.email}`}>
						<Mail size="14" />
						Contato
					</Button>
				</div>

				<div className="hidden mt-6 xl:flex">
					<Footer />
				</div>
			</div>
		</header>
	);
};

export default Header;
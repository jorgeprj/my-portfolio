"use client";
import { siteConfig } from "@/config/site-config";
import { Download, Mail } from "lucide-react";
import Footer from "./Footer";
import Button from "./forms/Button";
import Avatar from "./Avatar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Timeline from "./Timeline";

const Header = () => {
	return (
		<header key="header" className="flex flex-col justify-between pt-6 xl:max-w-sm xl:py-10 xl:h-full">
			<div>
				<Avatar />
				<div className="mt-6">
					<div className="font-semibold text-primary mb-2">{siteConfig.title}</div>
					<h1 className="text-4xl font-bold mb-1">{siteConfig.creator}</h1>
					<p className="text-neutral-500">{siteConfig.bio}</p>
				</div>

				<div className="flex gap-4 mt-4 items-center">
					<a href="https://www.linkedin.com/in/jorgeprj/">
						<FaLinkedinIn className="w-6 h-6 text-neutral-900 dark:text-white" />
					</a>
					<a href="https://github.com/jorgeprj">
						<FaGithub className="w-6 h-6 text-neutral-900 dark:text-white" />
					</a>
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

				<div className="mt-8">
					<Timeline/>
				</div>

				<div className="hidden my-6 xl:flex">
					<Footer />
				</div>
			</div>
		</header>
	);
};

export default Header;
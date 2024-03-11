import Image from "next/image";

import PetLogo from '@/assets/pet.png'
import Ufscar from '@/assets/ufscar.png'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Icons: {
	[key: string]: JSX.Element;
} = {
	linkedin: (
		<FaLinkedinIn className="w-6 h-6 text-white"/>
	),
	github: (
		<FaGithub className="w-6 h-6 text-white"/>
	)
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
	return (
		<div
			style={{
				backgroundColor: color,
			}}
			className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
		>
			{Icons[type]}
		</div>
	);
};

export default Icon;
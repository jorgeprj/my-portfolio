import { FaArrowUpRightFromSquare, FaChevronLeft, FaGithub } from "react-icons/fa6";
import Component from "./Component"
import { data } from "@/data";
import Image from "next/image";
import Tag from "@/components/common/Tag";

interface ProjectProps {
	projectId: number | null;
	setProjectId: (id: number | null) => void;
}

const Project = ({ projectId, setProjectId }: ProjectProps) => {
	const project = data.projects.find((project) => project.id === projectId);
	return (
		<div className="grid grid-cols-1 gap-6 w-full h-fit">
			<Component>
				<button onClick={() => setProjectId(null)} className="flex gap-1 items-center text-sm">
					<FaChevronLeft /> Voltar para a página princial
				</button>
				<div className="flex flex-col lg:flex-row gap-8  mt-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-2xl font-bold">{project?.title}</h1>
						<div className="flex flex-wrap gap-2 text-xs dark:text-zinc-400 text-zinc-800">
							{project?.tec.map((tec, index) => (
								<Tag key={index} name={tec} />
							))}
						</div>
						<div className="flex gap-8">
							<div className="flex flex-col gap-8 w/1/2">
								<div className="flex flex-col gap-4">
									<p className="dark:text-zinc-300 text-sm">
										<span className="italic dark:text-zinc-100">{project?.title} - </span>
										{project?.desc}
									</p>
									{project?.big_desc && project.big_desc.map((desc, index) => (
										<p key={index} className="dark:text-zinc-300 text-sm">
											{desc}
										</p>
									))}
								</div>

								
								<div className="flex gap-4">
									{project?.github_link && (
										<div className="border border-zinc-800 dark:border-white w-fit p-2.5 rounded-full hover:bg-zinc-200 hover:dark:bg-zinc-800 cursor-pointer">
											<a href={project.github_link} target="_blank"><FaGithub /></a>
										</div>
									)}
									{project?.demo_link && (
										<div className="border border-zinc-800 dark:border-white w-fit p-2.5 rounded-full">
											<a href={project.demo_link} target="_blank"><FaArrowUpRightFromSquare /></a>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					{project?.img && (
						<Image src={project?.img} alt={project?.title} className="rounded lg:w-1/2" />
					)}
				</div>

			</Component>
		</div>
	)
}

export default Project
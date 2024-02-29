import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const ProjectsBox = ({ item }: { item: GridItemInterface }) => {
    return (
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950/90" />
            <Image
                className="z-0 object-cover object-center w-full h-full"
                src={item.image ?? ""}
                alt="projects"
                fill
            />
            <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
                <div className="text-sm font-medium text-white">{item.title}</div>
                <div className="flex flex-wrap items-center gap-3">
                    {item.projects?.map((project, index) => {
                        return (
                            <Link
                                className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900 "
                                key={project.link + index}
                                href={project.link}
                            >
                                {project.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsBox;
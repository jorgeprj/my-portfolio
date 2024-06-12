import { data } from "@/data"
import ProjectBox from "./box/Project"
import Social from "./box/Social"
import CertificateBox from "./box/Certificate";

interface GridProps {
    setProjectId: (id: number | null) => void;
}

const Grid = ({ setProjectId }: GridProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-6 w-full md:w-[792px] 2xl:w-full auto-rows-[175px] h-fit">
            <>
                {data.projects.slice(0, 3).map((project, index) => (
                    <ProjectBox project={project} setProjectId={setProjectId} key={`project-${index}`} />
                ))}
            </>
            <Social socialMedia={data.socialMedia[0]} />
            <Social socialMedia={data.socialMedia[1]} />
            <>
                {data.projects.slice(3, 10).map((project, index) => (
                    <ProjectBox project={project} setProjectId={setProjectId} key={`project-${index}`} />
                ))}
            </>
        </div>
    )
}

export default Grid

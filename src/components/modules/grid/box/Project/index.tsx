import React from 'react'
import Component from '../../Component'
import { Project } from '@/types/Data.types'
import Image from 'next/image'
import { getIcon } from '../../Icon'

interface ProjectProps{
    project: Project,
    setProjectId: (id: number) => void,
}

const ProjectBox = ({ project, setProjectId }: ProjectProps) => {
    return (
        <Component
            componentId={project.id}
            link={""}
            size={project.size}
            key={project.id}
            onClick={() => setProjectId(project.id)}
        >
            <div className="flex flex-col gap-2">
                {getIcon(project.tec[0])}
                <div className="flex flex-col gap-1">
                    <h2 className="leading-5">{project.title}</h2>
                    <p className="text-neutral-500 text-xs overflow-hidden">{project.desc}</p>
                </div>
                {project.img && (
                    <Image
                        src={project.img}
                        alt={project.title}
                        className="rounded max-h-[200px] object-cover"
                    />
                )}
            </div>
        </Component>
    )
}

export default ProjectBox
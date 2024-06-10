'use client'
import Footer from "@/components/layout/Footer";
import Aside from "@/components/modules/aside";
import Grid from "@/components/modules/grid";
import Project from "@/components/modules/project";
import { useState } from "react";

export default function Home() {
    const [projectId, setProjectId] = useState<number | null>(null);

    return (
        <main className="flex flex-col w-full h-full gap-4 justify-center lg:flex-row p-4 py-2">
            <Aside />
            <div className="container relative z-20 flex flex-col justify-center w-full h-full gap-12 xl:flex-row p-6">
                {projectId ? (
                    <Project projectId={projectId} setProjectId={setProjectId} />
                ) : (
                    <Grid setProjectId={setProjectId} />
                )}

                <div className="flex pb-6 xl:hidden">
                    <Footer />
                </div>
            </div>
        </main>
    );
}

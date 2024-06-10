'use client'

import React, { useState } from "react";

import AvatarUI from "@/components/common/Avatar";
import Status from "@/components/common/Status";

interface AvatarProps {
    src: string;
    status: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, status }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-fit">
            <AvatarUI src={src} />
            <Status onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                {isHovered && (
                    <div className="ml-6 px-4 py-2 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-neutral-900 dark:text-green-400" role="alert">
                        <span className="text-sm text-nowrap">{status}</span>
                    </div>
                )}
            </Status>
        </div>
    );
};

export default Avatar;
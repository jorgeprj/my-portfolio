import Image from 'next/image'
import React, { useState } from 'react'

const Avatar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            <Image
                src="/profile.jpg"
                alt="Avatar"
                width="120"
                height="120"
                className="rounded-md"
                priority
                loading="eager"
            />
            <span
                className="flex items-center absolute bottom-0 left-[108px] transform translate-y-1/4 w-5 h-5 bg-sucess border-2 border-white dark:border-neutral-950 rounded-full cursor-pointer"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                {isHovered && (
                    <div className="ml-6 px-4 py-2 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-neutral-900 dark:text-green-400" role="alert">
                        <span className="text-sm text-nowrap">Open to Work!</span>
                    </div>
                )}
            </span>
        </div>
    );
};

export default Avatar
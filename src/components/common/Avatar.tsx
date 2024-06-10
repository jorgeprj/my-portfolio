"use client";
import Image from 'next/image';

interface AvatarProps {
    src: string;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
    return (
        <Image
            src={src}
            alt="Avatar"
            width={100}
            height={100}
            className={`rounded-full ${className || ''}`}
            priority
            loading="eager"
        />
    );
};

export default Avatar;
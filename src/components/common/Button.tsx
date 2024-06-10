import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, href, onClick }) => {
    return (
        <a href={href} onClick={onClick} className={`flex items-center cursor-pointer gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit bg-[#008CB8] ${className}`}>
            {children}
        </a>
    );
}

export default Button;
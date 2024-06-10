import React, { ReactNode } from 'react';

interface StatusProps {
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    children?: ReactNode;
}

const Status: React.FC<StatusProps> = ({ children, onMouseOver, onMouseOut }) => {
    return (
        <span
            className="flex items-center absolute bottom-2 right-2 transform translate-y-1/4 w-5 h-5 bg-green-500 border-2 border-white dark:border-neutral-950 rounded-full cursor-pointer"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {children}
        </span>
    );
};

export default Status;
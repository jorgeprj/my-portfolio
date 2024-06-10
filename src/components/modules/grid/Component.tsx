import React, { HTMLAttributes, ReactNode, MouseEvent } from 'react'

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
    componentId: number;
	size: string;
    link: string;
    children: ReactNode;
}

const Component = ({ componentId, size, link, onClick, children }: ComponentProps) => {
	const getSize = (size: string) => {
		let sizeClass = "";
		switch (size) {
			case '1x1':
				sizeClass = 'md:col-span-1 col-span-1 row-span-1';
				break;
			case '1x2':
				sizeClass = 'md:col-span-2 col-span-2 row-span-1';
				break;
			case '2x2':
				sizeClass = 'md:col-span-2 col-span-2 row-span-2';
				break;
		}
		return sizeClass;
	}

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (componentId === 0) {
            window.open(link, '_blank');
        } else if (onClick) {
            onClick(e);
        }
    }


	return (
		<div onClick={handleClick} className={`cursor-pointer shadow-grid rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-6 hover:dark:bg-neutral-800 hover:bg-neutral-100 duration-75 transition-colors ease-in-out ${getSize(size)}`}>
			{children}
		</div>
	);
};


export default Component
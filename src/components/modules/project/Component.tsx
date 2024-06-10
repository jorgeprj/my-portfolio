import React, { HTMLAttributes, ReactNode } from 'react'

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Component = ({children}: ComponentProps) => {
    return (
        <div className={`shadow-grid rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-6`}>
            {children}
        </div>
    )
}

export default Component
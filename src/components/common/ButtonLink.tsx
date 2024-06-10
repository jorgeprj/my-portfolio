import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    href?: string;
}

const ButtonLink = ({ children, href }: Props) => {
    return (
        <a href={href || '#'} target='_blank' className="flex items-center w-full gap-2 px-4 py-2 text-xs font-medium border rounded-md border-neutral-100 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900">
            {children}
        </a>
    )
}

export default ButtonLink
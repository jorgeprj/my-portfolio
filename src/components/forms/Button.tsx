import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href?: string;
}

const Button = ({ children, href }: Props) => {
    return (
        <a href={href || '#'} className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800">
            {children}
        </a>
    );
};

export default Button;
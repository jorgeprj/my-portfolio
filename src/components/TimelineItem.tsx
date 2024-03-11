import { motion } from "framer-motion";

interface Props {
    data: string;
    titulo: string;
    descricao: string;
    link?: string
}

const TimelineItem = ({ data, titulo, descricao, link }: Props) => {
    return (
        <li className='mb-10 ms-4'>
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <time className="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">{data}</time>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{titulo}</h3>
                <p className="mb-4 text-sm font-normal text-neutral-500 dark:text-neutral-400">{descricao}</p>
                {link && (
                    <a href={link} className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit bg-[#008CB8]">
                        Saiba Mais
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                )}
            </motion.div>
        </li>
    )
}

export default TimelineItem
"use client";

const GridItems = new Array(12).fill(0)

const GridItems2 = [
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-2 row-span-2"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-2"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-2"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-2 row-span-4"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-2 row-span-2"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-1"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-1"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-1"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-2 row-span-2"
    },
    {
        className: "rounded-md bg-neutral-200 dark:bg-neutral-900 col-span-1 row-span-1"
    }
]


const GridPanel = () => {
    return (
        <div className="flex-1 h-full p-6">
            <div className="w-full h-full grid grid-cols-4 auto-rows-[76px] gap-10">
                {GridItems2.map((item, index) => {
                    return <div key={index} className={item.className}></div>
                })}
            </div>
        </div>
    );
};

export default GridPanel;
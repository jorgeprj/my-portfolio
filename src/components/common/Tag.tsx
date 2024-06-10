import React from 'react'

interface TagProps{
    name: string
}

const Tag = ({ name }: TagProps) => {
  return (
    <div className="border rounded-full p-0.5 px-2 border-zinc-600 dark:border-zinc-500">
        {name}
    </div>
  )
}

export default Tag
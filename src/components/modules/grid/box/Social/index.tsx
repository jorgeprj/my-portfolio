import React from 'react'
import { getIcon } from '../../Icon'
import Component from '../../Component'
import { SocialMedia } from '@/types/Data.types'

interface SocialProps{
    socialMedia: SocialMedia;
}

const Social = ({ socialMedia }: SocialProps ) => {
    return (
        <Component
            componentId={0}
            link={socialMedia.link}
            size={"1x1"}
        >
            <div className="flex flex-col gap-2">
                {getIcon(socialMedia.name)}
                <div className="flex flex-col gap-1">
                    <h2 className="leading-5">{socialMedia.title}</h2>
                    <p className="text-neutral-500 text-xs overflow-hidden">{socialMedia.text1}</p>
                    {socialMedia.text2 && <p className="text-neutral-500 text-xs overflow-hidden">{socialMedia.text2}</p>}
                </div>
            </div>
        </Component>

    )
}

export default Social
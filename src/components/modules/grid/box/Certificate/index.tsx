import { Certificate } from '@/types/Data.types'
import React from 'react'
import Component from '../../Component';
import { getIcon } from '../../Icon';

interface CertificateProps{
    certificate: Certificate;
}

const CertificateBox = ({ certificate }: CertificateProps) => {
    return (
        <Component
            componentId={0}
            link={certificate.link}
            size={"1x2"}
        >
            <div className="flex flex-col gap-2">
                {getIcon(certificate.from)}
                <div className="flex flex-col gap-1">
                    <h2 className="leading-5">{certificate.name}</h2>
                    <p className="text-neutral-500 text-xs overflow-hidden">{certificate.from}</p>
                    
                </div>
            </div>
        </Component>
    )
}

export default CertificateBox
import React from 'react';
import { Download, Mail } from "lucide-react";
import ButtonLink from '@/components/common/ButtonLink';


interface ButtonsProps {
    email: string;
}

const Buttons: React.FC<ButtonsProps> = ({ email }) => {
    return (
        <div className="flex items-center gap-3">
            <ButtonLink href="/JorgePires_Curriculo.pdf">
                <Download size={14} />
                <p>Currículo</p>
            </ButtonLink>
            <ButtonLink href={`mailto:${email}`}>
                <Mail size={14} />
                Contato
            </ButtonLink>
        </div>
    );
}

export default Buttons;
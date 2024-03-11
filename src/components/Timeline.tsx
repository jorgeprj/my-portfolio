import React from 'react'
import TimelineItem from './TimelineItem';

const Timeline = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Experiencia</h2>

            <ol className="relative border-s border-neutral-200 dark:border-neutral-700">
                <TimelineItem data='Março 2020' titulo='UFSCar' descricao='Graduando na Universidade Federal de São Carlos em Ciência da Computação.' />
                <TimelineItem data='Julho 2023' titulo='Bolsista PET-BCC' descricao='Ativo em diversos projetos, principalmente relacionados a Desenvolvimento Web e Github.' link='https://petbcc.ufscar.br'/>
            </ol>
        </div>
    );
};

export default Timeline
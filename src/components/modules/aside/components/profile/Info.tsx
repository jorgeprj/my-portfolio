import React from 'react';

interface InfoProps {
    work: string;
    name: string;
    bio: string;
}

const Info: React.FC<InfoProps> = ({ work, name, bio }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-1">{name}</h1>
            <div className="font-semibold text-primary mb-2">{work}</div>
            <p className="text-neutral-500 text-sm">{bio}</p>
        </div>
    );
}

export default Info;
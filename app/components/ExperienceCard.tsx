import Image from 'next/image';
import React from 'react';

type ExperienceCardProps = {
    years: string;
    image: string;
    description: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    return (
        <div className="group relative bg-gradient-to-r from-secondary to-blue w-fit py-4 px-2.5 text-white border-[1px] border-dark rounded-2xl mt-5 md:mt-0">
            <span className="font-semibold text-4xl select-none cursor-default">{props.years}</span>
            <div className="absolute flex items-center top-[-18px] bg-white px-2.5 py-1 border-[1px] border-dark rounded transition-all duration-300 ease-in-out">
                <Image
                    src={props.image}
                    width={20}
                    height={20}
                    alt="Logo"
                />
                <span className="overflow-hidden whitespace-nowrap w-0 text-dark font-semibold group-hover:ml-2.5 select-none cursor-default transition-all duration-300 ease-in-out group-hover:w-auto">{props.description}</span>
            </div>
        </div>
    );
}

export default ExperienceCard;
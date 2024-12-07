import ExperienceCard from "../ExperienceCard";
import '../../styles/bucketlist.css';

import { usePortfolioData } from "../../hooks/usePortifolioData";
import { useLanguage } from "../../context/LanguageContext";

import BucketlistComponent from "../Bucketlist";

import { Skeleton } from "@nextui-org/react";

export default function AboutMe() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);

    if (!data) {
        // Render skeleton while loading
        return (
            <div className="flex flex-col">
                <Skeleton className="w-full h-6 mb-2" />
                <Skeleton className="w-3/4 h-6 mb-4" />
                <div className="flex flex-wrap justify-around mt-30">
                    {[...Array(4)].map((_, index) => (
                        <Skeleton key={index} className="w-[200px] h-[150px] rounded-lg mb-4" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <p>{data.aboutme.p1}</p>
            <p>{data.aboutme.p2}</p>
            <div className="flex flex-wrap justify-around mt-30">
                {
                    data.aboutme.experience.map((exp, index) => (
                        <ExperienceCard key={index} years={exp.time} image={exp.icon} description={exp.title} />
                    ))
                }
            </div>
            <a className="relative mt-2.5 self-end cursor-pointer before:bg-black before:absolute before:-bottom-0 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">More about my experience</a>
            <div className="mt-5 lg:h-[300px] pl-3 lg:overflow-y-scroll custom-scrollbar">
                <h1 className="font-semibold text-2xl pl-2">Bucket List</h1>
                <BucketlistComponent data={data.bucketlist} />
            </div>
        </div>
    );
}
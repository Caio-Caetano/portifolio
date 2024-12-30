import Image from 'next/image';
import { Eye } from 'lucide-react';
import { useRef, useEffect } from "react";
import IconLanguage from './IconLanguage';
import { Project } from '@/app/types/projects';

interface Props {
    project: Project;
}

export default function Card(props: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll horizontal com o mouse
    useEffect(() => {
        const container = containerRef.current;

        if (container) {
        container.addEventListener("wheel", (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY; // Scroll horizontal
        });
        }

        return () => {
            container?.removeEventListener("wheel", () => {});
            };
    }, []);

    return (
        <a
            href={props.project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
        >
            <div className="relative flex flex-col items-center h-[250px] w-[300px] bg-dark rounded-3xl border-[2px] border-dark overflow-hidden group">
                {/* Header */}
                <div className="relative z-10 bg-white rounded-t-3xl w-full text-center text-dark font-bold border-b-[2px] border-dark">
                    <h3>{props.project.title}</h3>
                </div>

                {/* Central Image */}
                <div className="relative grow w-full">
                    <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full border-[1px] border-dark bg-white w-fit p-2 cursor-pointer group-hover:block">
                        <Eye size={24} />
                    </div>
                    <Image
                        className="absolute top-0 left-0 w-full h-full object-cover blur-[3px] group-hover:blur-[10px] transition-all duration-300 ease-in-out z-0 cursor-pointer"
                        src={props.project.img}
                        width={300}
                        height={200}
                        alt="Img Projeto"
                    />
                </div>

                {/* Footer */}
                <div ref={containerRef} className="group relative z-10 bg-dark rounded-b-3xl w-full p-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                    <div className="inline-flex gap-1">
                        {props.project.langs.map((lang) => {
                            return (
                                <IconLanguage key={lang} path={lang} alt='Logo Language'/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </a>
    )
}
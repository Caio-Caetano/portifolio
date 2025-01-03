'use client';

import { useState } from 'react';
import { MapPin, MessageCircle, Mail, Linkedin, Github, Download, PhoneOutgoing, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolioData } from '../hooks/usePortifolioData';
import { Skeleton } from '@nextui-org/react';

export default function InfoCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleInfoCard = () => {
        setIsExpanded(!isExpanded);
    }

    const { language } = useLanguage();
    const data = usePortfolioData(language);

    if (!data) {
        return (
          <div className="flex flex-col justify-center items-center bg-blue rounded-3xl shadow-3xl w-100 h-5/6 p-30 lg:w-[300px]">
            <Skeleton className="w-[200px] h-[200px] rounded-full mb-5" />
            <Skeleton className="w-3/4 h-6 mb-3 rounded" />
            <Skeleton className="w-1/2 h-4 mb-6 rounded" />
            <div className="flex flex-col gap-4">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="w-full h-5" />
              ))}
            </div>
          </div>
        );
      }

    return (
        <div className="flex flex-col justify-center items-center bg-blue rounded-3xl shadow-3xl w-100 h-5/6 p-30 lg:w-[300px]">

            <div className="w-100 flex flex-col items-center md:flex-row lg:flex-col">
                <div className="w-[200px] h-[200px] rounded-full bg-secondary border-3 border-white mb-5 overflow-hidden">
                    <Image
                        src="/memoji-1.png"
                        width={200}
                        height={200}
                        alt="Me"
                    />
                </div>
                <div className="flex flex-col ml-30 ml-0 items-center md:ml-30 md:items-start lg:ml-0 lg:items-center">
                    <span className="text-white text-[32px] font-semibold">{data.me.name}</span>
                    <hr className="text-white w-1/2 my-2.5 lg:w-2/5 lg:m-2.5" />
                    <span className="text-white text-[15px] mb-30">{data.me.role}</span>
                </div>
                <button onClick={toggleInfoCard} className="text-white mb-3 md:ml-auto lg:hidden">
                    <ChevronDown size={30} className={`transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>

            <div
                className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden lg:opacity-100 lg:max-h-screen  lg:block`}
            >
                <div className="flex items-center text-white leading-none mb-5">
                    <MapPin size={24} className="mr-2.5" />
                    <div>
                        <p>{data.me.city}</p>
                        <small>{data.me.state} - {data.me.country}</small>
                    </div>
                </div>
                <div className="flex items-center text-white leading-none mb-5">
                    <MessageCircle size={24} className="mr-2.5" />
                    <div>
                        <a className='relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' href="https://wa.me/5512981351855" target='_blank'><p>{data.me.phone}</p></a>
                    </div>
                </div>
                <div className="flex items-center text-white leading-none mb-5">
                    <Mail size={24} className="mr-2.5" />
                    <div>
                        <p>{data.me.email}</p>
                    </div>
                </div>
            </div>

            <div className="text-white hidden lg:flex">
                <a className="transition-all duration-200 hover:scale-125" href={data.me.links.linkedin} target='_blank'><Linkedin size={24} className="mr-2.5" /></a>
                <a className="transition-all duration-200 hover:scale-125" href={data.me.links.github} target='_blank'><Github size={24} className="mr-2.5" /></a>
            </div>
            <button className="group relative mt-auto overflow-hidden mb-2.5 h-12 w-full bg-gradient-to-r from-light to-white rounded-full text-primary font-medium transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-dark before:rounded-full before:duration-100 before:ease-linear hover:bg-white hover:text-white hover:before:border-[25px]">
                <span className="flex justify-center items-center relative z-10"><Download size={24} className="mr-2.5 group-hover:animate-bounce" />{data.me.btns.download}</span>
            </button>
            <button className="group relative overflow-hidden h-12 w-full bg-gradient-to-r from-dark to-primary rounded-full text-white font-medium transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-gradient-to-r before:from-light before:to-white before:duration-300 before:ease-out hover:text-primary hover:before:h-40 hover:before:w-full">
                <span className="flex justify-center items-center relative z-10"><PhoneOutgoing size={24} className="mr-2.5 group-hover:animate-shake" />{data.me.btns.contact}</span>
            </button>
        </div>
    )
}
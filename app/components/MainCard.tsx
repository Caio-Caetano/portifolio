'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import AboutMe from './tabs/AboutMe';
import Projects from './tabs/Projects';
import Career from './tabs/Career';
import Education from './tabs/Education';
import Experience from './tabs/Experience';
import Contact from './tabs/Contact';
import {useState} from 'react';
import { LanguageSwitch } from './LanguageSwitch';

export default function MainCard() {
    const [selected, setSelected] = useState<any>("aboutme");
    return (
        <div className="flex w-full flex-col">
            <LanguageSwitch />
            <Tabs 
                aria-label="Options"
                variant="underlined"
                selectedKey={selected}
                onSelectionChange={setSelected}
                classNames={{
                    base: "border-b-[1px] border-primary",
                    tabList: "gap-6 w-full pb-3",
                    cursor: "w-[10px] h-[10px] bg-primary rounded-full",
                    tab: "flex flex-col max-w-fit px-0 h-6 pb-6",
                    tabContent: "group-data-[selected=true]:text-primary group-data-[selected=true]:font-medium text-xl text-blue"
            }}>
                <Tab key="aboutme" title="About me"> <AboutMe /> </Tab>
                <Tab key="projects" title="Projects"> <Projects /> </Tab>
                <Tab key="career" title="Career"> <Career /> </Tab>
                <Tab key="education" title="Education"> <Education /> </Tab>
                <Tab key="experience" title="Experience"> <Experience /> </Tab>
                <Tab key="contact" title="Contact"> <Contact /> </Tab>
            </Tabs>
        </div>
    );
}
'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import AboutMe from './tabs/AboutMe';
import Projects from './tabs/Projects';
import Career from './tabs/Career';
import Education from './tabs/Education';
import Experience from './tabs/Experience';
import Contact from './tabs/Contact';
import { useState } from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolioData } from '../hooks/usePortifolioData';
import { Skeleton } from '@nextui-org/react';

// Define component types
interface ComponentMap {
    AboutMe: React.ComponentType<{ onActionClick?: () => void }>;
    Projects: React.ComponentType<Record<string, unknown>>;
    Career: React.ComponentType<Record<string, unknown>>;
    Education: React.ComponentType<Record<string, unknown>>;
    Experience: React.ComponentType<Record<string, unknown>>;
    Contact: React.ComponentType<Record<string, unknown>>;
}

// Component mapping
const componentMap: ComponentMap = {
    AboutMe,
    Projects,
    Career,
    Education,
    Experience,
    Contact,
};

export default function MainCard() {
    // Use a string type for the selected tab
    const [selected, setSelected] = useState<string>("aboutme");
    const { language } = useLanguage();
    const data = usePortfolioData(language);

    if (!data) {
        return (
            <div className="flex gap-2">
                {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} className="w-[200px] h-5" />
                ))}
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col">
            <LanguageSwitch />
            <Tabs
                aria-label="Options"
                variant="underlined"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key.toString())} // Convertendo explicitamente para string
                classNames={{
                    base: "border-b-[1px] border-primary",
                    tabList: "gap-6 w-full pb-3",
                    cursor: "w-[10px] h-[10px] bg-primary rounded-full",
                    tab: "flex flex-col max-w-fit px-0 h-6 pb-6",
                    tabContent: "group-data-[selected=true]:text-primary group-data-[selected=true]:font-medium text-xl text-blue",
                }}
            >
                {data.tabs.map((tab) => {
                    const Component = componentMap[tab.component as keyof ComponentMap];
                    if (!Component) return null;

                    const additionalProps =
                        tab.component === "AboutMe"
                            ? { onActionClick: () => setSelected("projects") }
                            : {};

                    return (
                        <Tab key={tab.key} title={tab.title}>
                            <Component {...additionalProps} />
                        </Tab>
                    );
                })}
            </Tabs>
        </div>
    );
}

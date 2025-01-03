import { useLanguage } from "@/app/context/LanguageContext";
import { usePortfolioData } from "@/app/hooks/usePortifolioData";
import { ArrowUpRight } from "lucide-react";

export default function Education() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {data?.education.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col w-[280px] bg-white rounded-xl shadow-2xl p-2">
                        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                        <div className="flex justify-between mb-5">
                            <span>{item.organization}</span>
                            <span className="text-gray">{item.local}</span>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span>{item.date}</span>
                            <a target="_blank" href={item.url} className="text-dark rounded-full p-1 border-[1px] border-dark transition ease-in hover:bg-dark hover:text-white"><ArrowUpRight /></a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
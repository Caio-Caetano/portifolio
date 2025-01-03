import { useLanguage } from "@/app/context/LanguageContext";
import { usePortfolioData } from "@/app/hooks/usePortifolioData";
import { Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { Star } from "lucide-react";

export default function Experience() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);

    return (
        <ScrollShadow hideScrollBar className="h-[600px]">
            <div className="flex flex-col gap-5">
                {
                    data?.experience.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between items-center rounded border-[1px] border-dark p-3 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center rounded-full bg-white p-4 w-[60px] h-[60px] shadow-md">
                                        <Image
                                            className="object-contain"
                                            src={item.img}
                                            width={60}
                                            height={60}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="font-bold text-xl">{item.lang}</h4>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="flex gap-2 text-lg">
                                        <span>{item.stars}/5</span>
                                        <Star />
                                    </div>
                                    <span className="text-sm text-blue">{item.time}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ScrollShadow>
    );
}
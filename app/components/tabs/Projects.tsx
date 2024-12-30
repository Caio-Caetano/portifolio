import Card from "../project/Card";
import { useLanguage } from '../../context/LanguageContext';
import { usePortfolioData } from '../../hooks/usePortifolioData';

export default function Projects() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);
    return (
        <div className="flex flex-wrap gap-[10px]">
            {
                data?.projects.map((project) => {
                    return (
                        <Card key={project.title} project={project}/>
                    )
                })
            }
        </div>
    );
}
import { useEffect, useState } from 'react';
import { PortfolioData } from "@/app/types/portfolio";

export const usePortfolioData = (language: 'en' | 'pt') => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const jsonData = await import(`../data/${language}-data.json`);
      setData(jsonData.default); // Default is the exported object in JSON imports
    };
    loadData();
  }, [language]);

  return data;
};

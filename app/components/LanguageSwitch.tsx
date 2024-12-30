import {VisuallyHidden, useSwitch} from "@nextui-org/react";
import BrazilLogo from "../../public/br.svg";
import UsaLogo from "../../public/us.svg";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitch = () => {
    const {Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps} = useSwitch();
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = () => {
        // Alterna entre os idiomas
        const newLanguage = language === 'en' ? 'pt' : 'en';
        setLanguage(newLanguage);
      };

    return (
        <div className="flex justify-end gap-2 mb-3">
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                <input {...getInputProps()} onClick={handleLanguageChange}/>
                </VisuallyHidden>
                <div
                {...getWrapperProps()}
                className={
                    slots.wrapper({
                    class: [
                    "w-8 h-8",
                    "flex items-center justify-center",
                    "rounded bg-default-100 hover:bg-default-200",
                    "group-data-[selected=true]:bg-white"
                    ],
                })}
                >
                    {isSelected
                        ? <Image width={40} height={40} src={BrazilLogo} alt="BrLogo"/>
                        : <Image width={40} height={40} src={UsaLogo} alt="UsaLogo"/>}
                </div>
            </Component>
        </div>
      );
}
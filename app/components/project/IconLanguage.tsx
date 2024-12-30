import Image from 'next/image';

interface Props {
    path: string;
    alt: string;
}

export default function IconLanguage(props: Props) {
    return (
        <div className="flex items-center justify-center rounded-full bg-white p-2 w-[30px] h-[30px] shadow-md group-hover:w-[60px] group-hover:h-[60px] transition-all duration-300 ease-in-out">
            <Image
                className="object-contain group-hover:p-2"
                src={props.path}
                width={60}
                height={60}
                alt={props.alt}
            />
        </div>
    )
}
import Image from 'next/image'
import { FC } from "react";

interface ArticleCardProps {
    content: {
    anchor: string;
    imageUrl: string;
    year: string;
    text: string;
    id: number;
    tags: string[];
    };
}

const ArticleCard: FC<ArticleCardProps> = ({ content }) => {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[30rem] w-full lg:w-[60rem] bg-customGray m-6 p-6 lg:p-10 justify-evenly shadow-custom rounded-custom">
            <div className="w-full lg:w-1/2 h-60 lg:h-auto bg-slate-500 rounded-2xl mb-6 lg:mb-0">
            <Image
                src={`${content.imageUrl}`}
                alt="External Image"
                unoptimized
                width={300}
                height={300}
            />
            </div>
            <div className="w-full lg:w-1/2 text-xl lg:text-2xl px-4 lg:px-6">
                <h1 className="text-center mb-4">{content.year}</h1>
                <p>{content.text}</p>
            </div>
        </div>
    );
}

export default ArticleCard;
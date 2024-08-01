import { FC } from "react";

interface ArticleCardProps {
    content: {
        year: number;
        title: string;
        id: number;
    };
}

const ArticleCard: FC<ArticleCardProps> = ({ content }) => {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[40rem] w-full lg:w-[70rem] bg-customGray m-6 p-6 lg:p-10 justify-evenly shadow-custom rounded-custom">
            <div className="w-full lg:w-1/2 h-60 lg:h-auto bg-slate-500 rounded-2xl mb-6 lg:mb-0">
            </div>
            <div className="w-full lg:w-1/2 text-xl lg:text-2xl px-4 lg:px-6">
                <h1 className="text-center mb-4">{content.year}</h1>
                <p>{content.title}</p>
            </div>
        </div>
    );
}

export default ArticleCard;
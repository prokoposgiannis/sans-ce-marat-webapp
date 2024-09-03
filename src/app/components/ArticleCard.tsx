import Image from 'next/image'
import { FC } from "react";
import { ArticleCardProps } from "@/app/components/types/types"

const ArticleCard: FC<ArticleCardProps> = ({ content }) => {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[30rem] w-full lg:w-[60rem] bg-customGray m-6 p-6 lg:p-10 justify-evenly shadow-custom rounded-custom">
            <div className="w-full lg:w-1/2 h-60 lg:h-auto bg-slate-500 rounded-2xl mb-6 lg:mb-0">
                <Image
                    src={`${content.imageUrl}`}
                    alt="External Image"
                    unoptimized
                    style={{
                        objectFit: "cover", 
                        width: '100%',      
                        height: '100%',     
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={300}
                    height={300}
                    priority
                />
            </div>
            <div className="w-full lg:w-1/2 text-xl lg:text-2xl px-4 lg:px-6">
                <h1 className="text-center mb-4">{content.year}</h1>
                <p>{content.tags.slice(1).map((e, index)=>{
                    if (e.type === "text") {
                        return e.text;
                    } else if (e.type === "anchor") {
                        return <a key={index} className="text-violet-500" href={`${e.href}`}>{e.text}</a>
                    }
                })}
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
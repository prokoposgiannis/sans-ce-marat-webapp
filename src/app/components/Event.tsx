import Image from 'next/image'
import { FC } from "react";
import { EventProps } from "@/app/components/types/types"
import { RWebShare } from "react-web-share";


const Event: FC<EventProps> = ({ content, openModalWithUrl }) => {

    const contentText = content.tags.length < 2 ? content.text : content.tags.map((e, index)=>{
        if (e.type === "text" || e.type === "i-text") {
            if (index === 0) {
                return e.text.slice(2);
            } else {
                return e.text;
            }
        } else if (e.type === "anchor" || e.type === "i-anchor") {
            return <a key={index} className="text-indigo-600" href="#" onClick={(event)=>{
                event.preventDefault();
                openModalWithUrl(e.href ?? "https://www.wikipedia.org")
            }}>{e.text}</a>
        }
    })

    return (
        <div className=" flex flex-col lg:flex-row h-auto lg:h-[30rem] w-full lg:w-[60rem] bg-customGray m-6 p-6 lg:p-10 justify-evenly shadow-custom rounded-custom">
            <div className="w-full lg:w-1/2 h-60 lg:h-auto rounded-2xl mb-6 lg:mb-0">
                <Image
                    src={`${content.imageUrl}`}
                    alt="On this day relative Image"
                    unoptimized
                    style={{
                        objectFit: "contain", 
                        width: '100%',      
                        height: '100%', 
                        padding: "6px",    
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={100}
                    height={100}
                    priority
                />
            </div>
            <div className="w-full lg:w-1/2 text-xl lg:text-2xl px-4 lg:px-6">
                <h1 className="text-center mb-4">{content.year}</h1>
                <p>{contentText}</p>
                <RWebShare
                data={{
                    text: "Sans Ce Marat - Σαν σήμερα",
                    url: "http://localhost:3000",
                    title: "Sans Ce Marat - Σαν σήμερα",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button>Share on Web</button>
            </RWebShare>
            </div>
        </div>
    );
}

export default Event;
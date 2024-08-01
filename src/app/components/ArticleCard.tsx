import { FC } from "react";

interface ArticleCardProps {
    content: {
        title: string;
        description: string;
        id:number;
    };
  }

const ArticleCard: FC<ArticleCardProps> = ({content}) => {
  return (
<div className="flex h-[40rem] w-[70rem] bg-customGray m-6 p-10 justify-evenly shadow-custom rounded-custom">
    <div className="w-1/2 bg-slate-500 rounded-2xl">
    
    </div>
    <div className="w-1/2 pr-6 text-2xl pl-6">
        <h1 className="text-center">1980</h1>
        <p>Ο Κωνσταντίνος Καραμανλής εκλέγεται πρόεδρος της Ελληνικής Δημοκρατίας για πρώτη φορά.</p>
        </div>
    </div>
  );
}

export default ArticleCard;

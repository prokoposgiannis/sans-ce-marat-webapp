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
    <div className="h-56 w-2/3 bg-customGray m-6 shadow-custom rounded-custom">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <p>{content.id}</p>
    </div>
  );
}

export default ArticleCard;

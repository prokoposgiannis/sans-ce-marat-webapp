export interface CardContent {
    anchor: string;
    imageUrl: string;
    year: string;
    text: string;
    id: number;
    tags: string[];
}

export interface ArticleCardProps {
    content: CardContent;
}
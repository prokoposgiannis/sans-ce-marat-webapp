interface Tag {
    type: string;
    href?: string;
    text: string;
}

export interface CardContent {
    anchor: string;
    imageUrl: string;
    year: string;
    text: string;
    id: number;
    tags: Tag[];
}

export interface ArticleCardProps {
    content: CardContent;
    openModalWithUrl: (url: string) => void;
}
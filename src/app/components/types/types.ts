interface EventTag {
    type: string;
    href?: string;
    text: string;
}

export interface EventContent {
    anchor: string;
    imageUrl: string;
    year: string;
    id: number;
    tags: EventTag[];
}

export interface EventProps {
    content: EventContent;
    openModalWithUrl: (url: string) => void;
}
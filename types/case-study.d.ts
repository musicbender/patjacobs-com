export type ProjectBodyNodeType = 'paragraph' | 'image' | 'video';

export interface CaseStudyBaseRevealProps {
    startGrid: number;
    endGrid: number;
}

export interface ProjectBodyParagraphText {
    text: string
}

export interface ProjectBodyMediaData {
    src: string;
    title?: string;
    mimeType?: string;
    width?: string;
    height?: number;
    handle?: number;
    altText?: string;
}

export interface ProjectBodyParagraph {
    contentType: ProjectBodyNodeType;
    text: ProjectBodyParagraphText[];
}

export interface ProjectBodyMedia {
    contentType: ProjectBodyNodeType;
    mediaText?: string;
    data: ProjectBodyMediaData;
}

export interface RevealedElementsState {
    [key: string]: boolean;
}

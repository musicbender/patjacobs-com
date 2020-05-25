export type ProjectBodyNodeType = 'paragraph' | 'image' | 'video';

export interface CaseStudyBaseRevealProps {
    startGrid: number;
    endGrid: number;
}

export interface ProjectBodyParagraphText {
    leaf: string;
    marks?: any[];
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
    text: ProjectBodyParagraphText[] | string;
}

export interface ProjectBodyMedia {
    contentType: ProjectBodyNodeType;
    text?: string;
    data: ProjectBodyMediaData;
}

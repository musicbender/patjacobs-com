import React from 'react';
import RevealBlock from '../../global/reveal-block';
import { ProjectBodyWrapper, BodyParagraph, BodyImage, BodyVideo, Caption } from './styles';
import {
    SitePageContextAllProjectsBody,
    ProjectBodyParagraphText,
    RevealBlockContentType,
} from '../../../../types';

interface Props {
    body: SitePageContextAllProjectsBody[];
    getRevealProps(elm: string, contentType: RevealBlockContentType): any;
}

type BodyItem = SitePageContextAllProjectsBody;

const projectBody = ({ body, getRevealProps }: Props) => {
    const renderParagraph = (item: BodyItem, i: number) => {
        return item.text.map((textItem: ProjectBodyParagraphText, j: number) => {
            if (!textItem.leaf) return;
            const key = `paragraph-${i}-${j}-${textItem.leaf.length}`;
            return (
                <RevealBlock {...getRevealProps(key, 'text')} key={key}>
                    <BodyParagraph>{textItem.leaf}</BodyParagraph>
                </RevealBlock>
            );
        });
    };

    const renderImage = (item: BodyItem, i: number) => {
        if (!item.data.src) return;
        const key = `image-${i}-${item.data.handle}`;
        return (
            <>
                <RevealBlock {...getRevealProps(key, 'img')}>
                    <BodyImage src={item.data.src} alt={item.data.altText || item.data.title} />
                </RevealBlock>
                {item.text && item.text[0] && item.text[0].leaf && (
                    <RevealBlock {...getRevealProps(key, 'text')} key={key}>
                        <Caption>[{item.text[0].leaf}]</Caption>
                    </RevealBlock>
                )}
            </>
        );
    };

    const renderVideo = (item: BodyItem, i: number) => {
        if (!item.data.src) return;
        const key = `video-${i}-${item.data.handle}`;
        return (
            <>
                <RevealBlock {...getRevealProps(key, 'video')}>
                    <BodyVideo src={item.data.src} />
                </RevealBlock>
                {item.text && item.text[0] && item.text[0].leaf && (
                    <RevealBlock {...getRevealProps(key, 'text')} key={key}>
                        <Caption>[{item.text[0].leaf}]</Caption>
                    </RevealBlock>
                )}
            </>
        );
    };

    const renderNodes = () => {
        return body.map((item: BodyItem, i: number) => {
            switch (item.contentType) {
                case 'paragraph':
                    return renderParagraph(item, i);
                case 'image':
                    return renderImage(item, i);
                case 'video':
                    return renderVideo(item, i);
            }
        });
    };

    return <ProjectBodyWrapper>{body && renderNodes()}</ProjectBodyWrapper>;
};

export default projectBody;

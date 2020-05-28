import React from 'react';
import RevealBlock from '../../global/reveal-block';
import { ProjectBodyWrapper, BodyParagraph, BodyImage, BodyVideo, Caption } from './styles';
import {
    SitePageContextProjectBody,
    ProjectBodyParagraphText,
    RevealBlockContentType,
} from '../../../../types';

interface Props {
    body: SitePageContextProjectBody[];
    getRevealProps(elm: string, contentType: RevealBlockContentType): any;
}

type BodyItem = SitePageContextProjectBody;

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
            <React.Fragment key={key + '-fragment'}>
                <RevealBlock {...getRevealProps(key, 'img')} key={key}>
                    <BodyImage src={item.data.src} alt={item.data.altText || item.data.title} />
                </RevealBlock>
                {item.text && item.text[0] && item.text[0].leaf && (
                    <RevealBlock {...getRevealProps(key, 'text')} key={key + '-caption'}>
                        <Caption>[{item.text[0].leaf}]</Caption>
                    </RevealBlock>
                )}
            </React.Fragment>
        );
    };

    const renderVideo = (item: BodyItem, i: number) => {
        if (!item.data.src) return;
        const key = `video-${i}-${item.data.handle}`;
        return (
            <React.Fragment key={key + '-fragment'}>
                <RevealBlock {...getRevealProps(key, 'video')} key={key}>
                    <BodyVideo src={item.data.src} />
                </RevealBlock>
                {item.text && item.text[0] && item.text[0].leaf && (
                    <RevealBlock {...getRevealProps(key, 'text')} key={key + '-caption'}>
                        <Caption>[{item.text[0].leaf}]</Caption>
                    </RevealBlock>
                )}
            </React.Fragment>
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

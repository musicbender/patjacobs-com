import React from 'react';
import RevealBlock from '@components/global/reveal-block';
import { ProjectBodyWrapper, BodyParagraph, BodyImage, BodyVideo, Caption } from './styles';
import { GcmsProjectBodyNode, ProjectBodyItem, RevealBlockContentType } from '@types';

type Props = {
  body: ProjectBodyItem[];
  getRevealProps(elm: string, contentType: RevealBlockContentType): any;
};

const projectBody = ({ body, getRevealProps }: Props): JSX.Element => {
  const renderParagraph = (item: ProjectBodyItem, i: number) => {
    return item.text.map((textItem: GcmsProjectBodyNode, j: number) => {
      if (!textItem.text) return;
      const key = `paragraph-${i}-${j}-${textItem.text.length}`;
      return (
        <RevealBlock {...getRevealProps(key, 'text')} key={key}>
          <BodyParagraph>{textItem.text}</BodyParagraph>
        </RevealBlock>
      );
    });
  };

  const renderImage = (item: ProjectBodyItem, i: number): JSX.Element => {
    if (!item.src) return;
    const key = `image-${i}-${item.handle}`;
    return (
      <React.Fragment key={key + '-fragment'}>
        <RevealBlock {...getRevealProps(key, 'img')} key={key}>
          <BodyImage src={item.src} alt={item.altText || item.title} />
        </RevealBlock>
        {item.mediaText && (
          <RevealBlock {...getRevealProps(key, 'text')} key={key + '-caption'}>
            <Caption>[ {item.mediaText} ]</Caption>
          </RevealBlock>
        )}
      </React.Fragment>
    );
  };

  const renderVideo = (item: ProjectBodyItem, i: number) => {
    if (!item.src) return;
    const key = `video-${i}-${item.handle}`;
    return (
      <React.Fragment key={key + '-fragment'}>
        <RevealBlock {...getRevealProps(key, 'video')} key={key}>
          <BodyVideo src={item.src} />
        </RevealBlock>
        {item.mediaText && (
          <RevealBlock {...getRevealProps(key, 'text')} key={key + '-caption'}>
            <Caption>[ {item.mediaText} ]</Caption>
          </RevealBlock>
        )}
      </React.Fragment>
    );
  };

  return (
    <ProjectBodyWrapper>
      {body &&
        body.map((item: ProjectBodyItem, i: number) => {
          switch (item.type) {
            case 'paragraph':
              return renderParagraph(item, i);
            case 'image':
              return renderImage(item, i);
            case 'video':
              return renderVideo(item, i);
          }
        })}
    </ProjectBodyWrapper>
  );
};

export default projectBody;

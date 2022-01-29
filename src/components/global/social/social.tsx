import React, { FC } from 'react';
import { SocialWrapper, InnerWrapper, LinkText } from './styles';
import { SocialLink } from '../../../../types/graphcms-schema';

type Props = {
  socialLinks: SocialLink[];
};

const Social: FC<Props> = ({ socialLinks }) => {
  // TODO: use getSocialLinks.graphql
  return (
    <SocialWrapper>
      <InnerWrapper>
        {socialLinks.map((item: SocialLink, i: number) => (
          <LinkText href={item.url} target="_blank" key={item.id + i * 3}>
            {item.label}
          </LinkText>
        ))}
      </InnerWrapper>
    </SocialWrapper>
  );
};

export default Social;

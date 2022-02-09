import React, { FC } from 'react';
import { SocialWrapper, InnerWrapper, LinkText } from './styles';
import { SocialLink, useGetSocialLinksQuery } from '@types';

const Social: FC = () => {
  const { data } = useGetSocialLinksQuery();
  // TODO: use getSocialLinks.graphql
  return (
    <SocialWrapper>
      <InnerWrapper>
        {data.socialLinks.map((item: SocialLink, i: number) => (
          <LinkText href={item.url} target="_blank" key={item.id + i * 3}>
            {item.label}
          </LinkText>
        ))}
      </InnerWrapper>
    </SocialWrapper>
  );
};

export default Social;

import React from 'react';
import socials from './config.json';
import { SocialWrapper, InnerWrapper, LinkText } from './styles';

const Social = () => {
  return (
    <SocialWrapper>
      <InnerWrapper>
        {
          socials.map((item: any, i: number) => (
            <LinkText
              href={item.url}
              target="_blank"
              key={item.id + i * 3}
            >
              {item.label}
            </LinkText>
          ))
        }
      </InnerWrapper>
    </SocialWrapper>
  );
}

export default Social;

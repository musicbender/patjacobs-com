import React from 'react';
import { SocialWrapper, InnerWrapper, LinkText } from './styles';
import { Gcms_SocialLink } from '../../../../types';

const Social = () => {
    // TODO: use getSocialLinks.graphql
    return (
        <SocialWrapper>
            <InnerWrapper>
                {gcms.socialLinks.map((item: Gcms_SocialLink, i: number) => (
                    <LinkText href={item.url} target="_blank" key={item.id + i * 3}>
                        {item.label}
                    </LinkText>
                ))}
            </InnerWrapper>
        </SocialWrapper>
    );
};

export default Social;

import React, { FC } from 'react';
import { ItemInfoWrapper, Title, Description, StyledButton } from './styles';

type Props = {
  title?: string;
  description?: string;
  isStopped?: boolean;
  isParallax?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  linkType?: string;
  className?: string;
};

const ItemInfo: FC<Props> = ({
  title = 'Project Item',
  description,
  isStopped = false,
  isParallax = false,
  buttonUrl,
  buttonText = 'view project',
  linkType = 'Case_Study',
  className = '',
}) => {
  return (
    <ItemInfoWrapper stopped={isStopped} className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {!!buttonUrl && (
        <StyledButton
          isParallax={isParallax}
          stopped={isStopped}
          text={buttonText}
          url={buttonUrl}
          isExternal={linkType === 'External'}
        />
      )}
    </ItemInfoWrapper>
  );
};

export default ItemInfo;

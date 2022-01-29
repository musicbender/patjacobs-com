import React from 'react';
import { useTriggerTransition } from 'gatsby-plugin-transition-link';
import { ItemInfoWrapper, Title, Description, StyledButton } from './styles';
const tlConf = require('../../../constants/transition-link.json');

interface Props {
  title?: string;
  description?: string;
  isStopped?: boolean;
  isParallax?: boolean;
  isMobile?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  linkType?: string;
  className?: string;
}

const ItemInfo = ({
  title = 'Project Item',
  description,
  isStopped = false,
  isParallax = false,
  isMobile = false,
  buttonUrl,
  buttonText = 'view project',
  linkType = 'Case_Study',
  className = '',
}: Props) => {
  const triggerTransition = useTriggerTransition(tlConf);
  return (
    <ItemInfoWrapper
      stopped={isStopped}
      onClick={isMobile ? triggerTransition : null}
      className={className}
    >
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

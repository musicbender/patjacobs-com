import React from 'react';
import { ButtonTypes } from '@types';
import { InnerWrapper, Line, Text, ButtonA, ButtonDiv } from './styles';
import Link from 'next/link';

type Props = {
  type?: ButtonTypes;
  text?: string;
  url?: string;
  isExternal?: boolean;
  className?: string;
  callback?: (event: React.MouseEvent) => any;
};

const Button = ({
  type = 'line',
  text = 'Learn More',
  url = '/',
  isExternal = false,
  className,
  callback = null,
}: Props) => {
  const getInnerContent = (
    <InnerWrapper type={type}>
      {type === 'line' && <Line />}
      <Text>{text}</Text>
    </InnerWrapper>
  );

  switch (true) {
    case isExternal:
      return (
        <ButtonA type={type} href={url} target="_blank" className={className}>
          {getInnerContent}
        </ButtonA>
      );
    case !!url:
      return (
        <Link href={url} passHref>
          <ButtonA type={type} onClick={callback} className={className}>
            {getInnerContent}
          </ButtonA>
        </Link>
      );
    default:
      return (
        <ButtonDiv type={type} onClick={callback} className={className}>
          {getInnerContent}
        </ButtonDiv>
      );
  }
};

export default Button;

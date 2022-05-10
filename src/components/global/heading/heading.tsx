import React, { FC } from 'react';
import { HeadingWrapper } from './styles';

type Props = {
  text: string;
  className?: string;
};

const Heading: FC<Props> = ({ text, className }) => (
  <HeadingWrapper className={className}>{text}</HeadingWrapper>
);

export default Heading;

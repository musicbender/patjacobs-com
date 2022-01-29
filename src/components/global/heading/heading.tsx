import React from 'react';
import { HeadingWrapper } from './styles';

interface Props {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: Props) => (
  <HeadingWrapper className={className}>{text}</HeadingWrapper>
);

export default Heading;

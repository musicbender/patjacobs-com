import React from 'react';
import { HeadingWrapper } from './styles';

type Props = {
  text: string
}

const Heading = ({ text }: Props) => <HeadingWrapper>{text}</HeadingWrapper>;

export default Heading;

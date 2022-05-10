import React from 'react';
import styled from 'styled-components';
import UpNext from './up-next';
import theme from '@styles/theme';

// test data
const tests = [
  {
    label: 'Lineage 2',
    path: '/case-study/lineage2',
  },
  {
    label: 'This is a much longer title here',
    path: '/long',
  },
];

// decorator
const Decorator = styled.div`
  position: absolute;
  top: 5em;
  margin-left: ${`${theme.gridSizes.s * 2 + theme.gridSizes.m}%`};
`;

// metadata
export default {
  title: 'UpNext',
  component: UpNext,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
};

// stories
export const Default = () => <UpNext />;

export const ExplicitLabelAndPath = () => <UpNext label={tests[0].label} path={tests[0].path} />;

export const LongLabel = () => <UpNext label={tests[1].label} path={tests[1].path} />;

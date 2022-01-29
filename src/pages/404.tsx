import React, { FC } from 'react';
import styled from 'styled-components';

const NotFoundCopy = styled.h2`
  margin-left: 8%;
  margin-top: 8em;
  font-size: 2rem;
`;

const NotFound: FC = () => {
  return <NotFoundCopy>Oh noes. Page not found :(</NotFoundCopy>;
};

export default NotFound;

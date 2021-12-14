import React from 'react';
import styled from 'styled-components';

interface IProps {
    location: {
        pathname: string;
    };
    entry: any;
}

const NotFoundCopy = styled.h2`
    margin-left: 8%;
    margin-top: 8em;
    font-size: 2rem;
`;

const NotFound: React.FunctionComponent<IProps> = (props: IProps) => {
    return <NotFoundCopy>Oh noes. Page not found :(</NotFoundCopy>;
};

export default NotFound;

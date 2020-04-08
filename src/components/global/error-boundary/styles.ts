import styled from 'styled-components';
import { superCenter } from '../../../styles/utils/global';

export const ErrorBoundaryWrapper = styled.div`
    ${superCenter()}
`;

export const ErrorIcon = styled.i`
    display: inline-block;
    margin-right: 0.5em;
    color: ${props => props.theme.palette.error};
    font-size: 20px;
    transform: translateY(-2px);
`;

export const ErrorText = styled.h2`
    display: inline-block;
    color: ${props => props.theme.palette.error};
    font-weight: 500;
    font-size: 1.2rem;
`;

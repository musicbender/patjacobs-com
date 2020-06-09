import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    pointer-events: none;
    z-index: 80;
`;

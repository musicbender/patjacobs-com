import React from 'react';
import { ModalWrapper } from './styles';

type Props = {
  children: React.ReactChild
}

const Modal = ({ children }: Props) => <ModalWrapper>{children}</ModalWrapper>

export default Modal;

import React from 'react';
import { ModalWrapper } from './styles';

interface Props {
  children: React.ReactChild;
}

const Modal = ({ children }: Props) => <ModalWrapper>{children}</ModalWrapper>;

export default Modal;

import { FC } from 'react';
import { ModalWrapper } from './styles';

type Props = {
  children?: React.ReactChild;
};

const Modal: FC<Props> = ({ children }) => <ModalWrapper>{children}</ModalWrapper>;

export default Modal;

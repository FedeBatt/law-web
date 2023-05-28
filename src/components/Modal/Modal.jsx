import React, { useState } from 'react';
import {ModalWrapper, ModalContent} from './Modal.styles'

const Modal = ({ isOpen, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
import React from "react";
import { ModalWrapper, ModalWrapperProps } from "./styles";

export interface ModalProps extends ModalWrapperProps {
  children?: React.ReactNode;
  onRequestClose?: () => void;
}

export default function Modal({
  children,
  isOpen,
  onRequestClose,
}: ModalProps) {
  /**
   * Helper function to prevent the click from propagating down the DOM tree
   * @param event
   */
  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  return (
    <ModalWrapper isOpen={isOpen} onClick={onRequestClose}>
      <div className="modal-content-wrapper" onClick={stopPropagation}>
        {children}
      </div>
    </ModalWrapper>
  );
}

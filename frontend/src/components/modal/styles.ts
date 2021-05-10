import styled from "styled-components";

export interface ModalWrapperProps {
  isOpen: boolean;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 10;

  .modal-content-wrapper {
    background: var(--white);
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

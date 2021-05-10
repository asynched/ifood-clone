import React from "react";
import Modal, { ModalProps } from "../modal";
import Spinner from "../spinner";

export default function SpinnerModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Spinner />
    </Modal>
  );
}

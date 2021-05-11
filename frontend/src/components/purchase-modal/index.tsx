import React, { useEffect, useState } from "react";
import Modal, { ModalProps } from "../modal";
import { PurchaseModalWrapper } from "./styles";
import { iProduct } from "../../helpers/interfaces";
import { useHistory } from "react-router";

interface PurchaseModalProps extends ModalProps {
  product: iProduct;
}

export default function PurchaseModal({
  product,
  ...props
}: PurchaseModalProps) {
  const history = useHistory();
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);

  const validateValue = (previous: number, next: number): number =>
    next >= 10 || next < 1 ? previous : next;
  const removeFromAmount = () =>
    setAmount((previous) => validateValue(previous, previous - 1));
  const addToAmount = () =>
    setAmount((previous) => validateValue(previous, previous + 1));

  const handleSubmit = () => history.push("/checkout");

  useEffect(() => {
    setTotalPrice(amount * product.price);
  }, [amount]);

  return (
    <Modal {...props}>
      <PurchaseModalWrapper>
        <h1>{product.name}</h1>
        <div className="quantity-menu">
          <h2>Quantidade</h2>
          <div>
            <button onClick={removeFromAmount}>-</button>
            <input type="number" value={amount} readOnly />
            <button onClick={addToAmount}>+</button>
          </div>
        </div>
        <p>
          Valor total: <span>R${totalPrice.toFixed(2)}</span>
        </p>
        <button className="cancel" onClick={props.onRequestClose}>
          Cancelar
        </button>
        <button className="submit" type="submit" onClick={handleSubmit}>
          Encomendar
        </button>
      </PurchaseModalWrapper>
    </Modal>
  );
}

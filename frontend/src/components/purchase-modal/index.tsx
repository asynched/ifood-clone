import React, { useEffect, useState } from "react";
import Modal from "../modal";
import { PurchaseModalWrapper } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function PurchaseModal() {
  const price = 2.5;
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);

  const validateValue = (previous: number, next: number): number =>
    next >= 10 || next < 1 ? previous : next;
  const removeFromAmount = () =>
    setAmount((previous) => validateValue(previous, previous - 1));
  const addToAmount = () =>
    setAmount((previous) => validateValue(previous, previous + 1));

  useEffect(() => {
    setTotalPrice(amount * price);
  }, [amount]);

  return (
    <Modal isOpen={true} onRequestClose={() => void 0}>
      <PurchaseModalWrapper>
        <h1>$name</h1>
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
        <button className="submit-button">Cancelar</button>
        <button className="submit-button" type="submit">
          Encomendar
        </button>
      </PurchaseModalWrapper>
    </Modal>
  );
}

import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/main-layout/main-layout";

import deliveryImage from "../../assets/images/delivery.svg";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function PurchasePage() {
  const history = useHistory();
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (time === 0) {
      history.push("/");
    }

    const interval = setTimeout(
      () => setTime((previous) => previous - 1),
      1000
    );

    return () => clearInterval(interval);
  }, [time]);

  return (
    <MainLayout>
      <CheckoutContainer>
        <h1>Seu pedido já está sendo enviado!</h1>
        <img src={deliveryImage} alt="Delivery" />
        <p>Você será redirecionado(a) em {time} segundos</p>
      </CheckoutContainer>
    </MainLayout>
  );
}

const CheckoutContainer = styled.div`
  overflow: hidden;

  width: 100%;
  height: calc(100vh - 8rem);

  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    text-align: center;
  }

  img {
    margin: 1rem 0;
    width: 8rem;
    animation: animate-image 2s infinite;
  }

  @keyframes animate-image {
    from {
      transform: translate(-250%, 0);
    }
    to {
      transform: translate(250%, 0);
    }
  }
`;

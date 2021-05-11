import React, { useEffect, useState } from "react";
import Title from "../../components/title";
import MainLayout from "../../layouts/main-layout/main-layout";
import styled from "styled-components";
import SellerProfile from "../../components/seller-profile";
import { SiIfood } from "react-icons/si";
import { getSellers } from "../../helpers/sellers";
import { iSeller } from "../../helpers/interfaces";

export default function SellersPage() {
  const [sellers, setSellers] = useState<iSeller[]>();

  useEffect(() => {
    getSellers().then((sellers) => setSellers(sellers));
  }, []);

  return (
    <MainLayout active="product">
      <SellersPageJumbotron>
        <Title animate>
          Os melhores <br />
          do{" "}
          <b>
            iFood <SiIfood />
          </b>
        </Title>
      </SellersPageJumbotron>
      <SellersPageWrapper>
        {sellers?.map((seller) => (
          <SellerProfile key={seller.seller_id} profile={seller} />
        ))}
      </SellersPageWrapper>
    </MainLayout>
  );
}

const SellersPageWrapper = styled.div`
  padding: 1rem;
`;

const SellersPageJumbotron = styled.div`
  height: 14rem;
  background: #222;

  display: grid;
  place-items: center;

  h1 {
    color: var(--white);
  }
`;

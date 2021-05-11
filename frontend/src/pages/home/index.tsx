import React from "react";
import SellerProfile from "../../components/seller-profile";
import Title from "../../components/title";
import { sellers } from "../../helpers/fake-data";
import MainLayout from "../../layouts/main-layout/main-layout";
import { HomeContent, HomeJumbotron } from "./styles";

export default function HomePage() {
  return (
    <MainLayout active="home" title="iFood | Delivery">
      <HomeJumbotron backgroundImage="https://static-images.ifood.com.br/image/upload/t_high/webapp/landing/dish-right.png">
        <h1>
          Nunca foi tão fácil pedir
          <br />
          <b>comida brasileira!</b>
        </h1>
        <button>Pedir agora!</button>
      </HomeJumbotron>
      <HomeContent>
        <Title animate>
          Os melhores
          <br />
          restaurantes
          <br />
          do <b>iFood</b>
        </Title>
        {sellers.map((seller) => (
          <SellerProfile key={seller.seller_id} profile={seller} />
        ))}
      </HomeContent>
    </MainLayout>
  );
}

import React from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Title from "../../components/title";
import MainLayout from "../../layouts/main-layout/main-layout";
import { HomeContent, HomeJumbotron, SellerProfile } from "./styles";

export default function HomePage() {
  const profiles = [
    {
      name: "Edinho bolos",
      rating: 4.3,
      image_url:
        "https://img.freepik.com/free-vector/birthday-cake-icon-with-candles_204219-39.jpg?size=338&ext=jpg",
      category: "Bolos artesanais",
      distance: 20.4,
    },
    {
      name: "Nina docinhos",
      rating: 4.9,
      image_url: "https://image.flaticon.com/icons/png/128/1784/1784096.png",
      category: "Doces gourmet",
      distance: 10.4,
    },
    {
      name: "Indiano pizzas",
      rating: 4.7,
      image_url: "https://image.flaticon.com/icons/png/512/168/168307.png",
      category: "Pizzas",
      distance: 8.6,
    },
    {
      name: "Suzuya salgados",
      rating: 4.6,
      image_url: "https://image.flaticon.com/icons/png/512/859/859293.png",
      category: "Salgados",
      distance: 3.6,
    },
    {
      name: "Samurai bebidas",
      rating: 4.8,
      image_url:
        "https://img.flaticon.com/icons/png/512/1086/1086365.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
      category: "Bebidas",
      distance: 9.1,
    },
  ];

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
        {profiles.map((profile) => (
          <SellerProfile key={profile.name}>
            <img src={profile.image_url} alt={profile.name} />
            <div>
              <h2>{profile.name}</h2>
              <p>
                <span className="rating">★ {profile.rating}</span> •{" "}
                {profile.category} • {profile.distance}
                km
              </p>
            </div>
          </SellerProfile>
        ))}
      </HomeContent>
    </MainLayout>
  );
}

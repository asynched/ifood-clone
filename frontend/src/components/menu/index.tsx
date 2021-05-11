import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MenuContainer } from "./styles";

interface MenuProps {
  active?: "home" | "profile" | "product";
}

export default function Menu({ active }: MenuProps) {
  return (
    <MenuContainer>
      <Link to="/seller">
        <div className={active === "product" ? "active" : ""}>
          <IoFastFoodOutline fontSize={20} />
          <p>Vendedores</p>
        </div>
      </Link>
      <Link to="/">
        <div className={active === "home" ? "active" : ""}>
          <AiOutlineHome fontSize={20} />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/profile">
        <div className={active === "profile" ? "active" : ""}>
          <AiOutlineUser fontSize={20} />
          <p>Perfil</p>
        </div>
      </Link>
    </MenuContainer>
  );
}

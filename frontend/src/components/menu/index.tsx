import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MenuContainer } from "./styles";

interface MenuProps {
  active?: "home" | "profile";
}

export default function Menu({ active }: MenuProps) {
  return (
    <MenuContainer>
      <div className={active === "home" ? "active" : ""}>
        <AiOutlineHome fontSize={20} />
        <p>Home</p>
      </div>
      <div className={active === "profile" ? "active" : ""}>
        <AiOutlineUser fontSize={20} />
        <p>Perfil</p>
      </div>
    </MenuContainer>
  );
}

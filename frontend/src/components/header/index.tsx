import React from "react";
import { HeaderContainer } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const redirectTo = (url: string) => history.push(url);

  return (
    <HeaderContainer>
      <MdKeyboardArrowLeft fontSize={24} onClick={history.goBack} />
      <Link to="/">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-01.png"
          alt="iFood"
        />
      </Link>
      <Link to="/profile">
        <FaUserAlt fontSize={18} />
      </Link>
    </HeaderContainer>
  );
}

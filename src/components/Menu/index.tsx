import React from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import { ContainerMenu } from "../../pages/Home/styles";

import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <ContainerMenu>
        <img src={menu} alt="Menu" />
      </ContainerMenu>
      <Link to={'/'}></Link>
    </Container>
  );
}

export default Menu;

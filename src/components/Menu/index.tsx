import React from "react";
import close from "../../assets/close.svg";
import arrowRight from "../../assets/arrow-right.svg";

import {
  Container,
  ContainerMenu,
  ItemMenu,
  NameContainer,
  Title,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface IMenu {
  onClose: () => void;
}

const Menu: React.FC<IMenu> = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMenu>
        <img src={close} alt="Menu" onClick={onClose} />
      </ContainerMenu>
      <ItemMenu onClick={() => navigate("/")}>
        <img src={arrowRight} alt="" />
        <NameContainer>
          <Title>Home</Title>
        </NameContainer>
      </ItemMenu>
      <ItemMenu onClick={() => navigate("/sobre-nos")}>
        <img src={arrowRight} alt="" />
        <NameContainer>
          <Title>Sobre nós</Title>
        </NameContainer>
      </ItemMenu>
      <ItemMenu onClick={() => navigate("/")}>
        <img src={arrowRight} alt="" />
        <NameContainer>
          <Title>Departamentos</Title>
        </NameContainer>
      </ItemMenu>
    </Container>
  );
};

export default Menu;

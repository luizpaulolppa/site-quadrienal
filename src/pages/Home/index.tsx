import React from "react";
import Marquee from "react-fast-marquee";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import arrowRight from "../../assets/arrow-right.svg";
import setaParaBaixo from "../../assets/seta-para-baixo.png";

import {
  Container,
  ContainerMenu,
  ContentLogo,
  Title,
  ButtonContainer,
  ButtonHome,
  Corredor,
  Footer,
  Departments,
  DepartmentsTitle
} from "./styles";
import Department from "../../components/Department";

const Login: React.FC = () => {
  return (
    <Container>
      <ContainerMenu>
        <img src={menu} alt="Menu" />
      </ContainerMenu>
      <ContentLogo>
        <img src={logo} alt="logo" />
      </ContentLogo>
      <Title>
        Bem-vindo a<br /> V Assembleia Quadrienal
        <br /> da Associação Central
        <br /> Sul Rio-Grandense
        <br />
        <strong>2019-2022</strong>
      </Title>
      <ButtonContainer>
        <ButtonHome>
          Saiba mais
          <img src={arrowRight} alt="arrowRight" />
        </ButtonHome>
      </ButtonContainer>
      <Corredor>
        <Marquee gradient={false}>
          <p>+ de 16.000 membros</p>
          <p>+ de 16.000 membros</p>
        </Marquee>
      </Corredor>
      <Departments>
        <img src={setaParaBaixo} alt="setaParaBaixo" />
        <DepartmentsTitle>Departamentos</DepartmentsTitle>
        <Department />
        <Department />
        <Department />
        <Department />
        <Department />
      </Departments>
      <Footer>
        <p>Avenida João Wallig, 596 - Porto Alegre/RS</p>
        <p>CEP: 91340-000</p>
        <p>Tel.: (51) 3375-1600</p>
        <br />
        <p>Associação Central Sul Rio-Grandense</p>
      </Footer>
    </Container>
  );
};

export default Login;

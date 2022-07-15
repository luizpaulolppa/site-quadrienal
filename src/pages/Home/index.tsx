import React from "react";
import Marquee from "react-fast-marquee";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import setaParaBaixo from "../../assets/seta-para-baixo.png";
import marcos from "../../assets/marcos.png";
import rogerio from "../../assets/rogerio.png";
import everson from "../../assets/everson.png";
import fabiana from "../../assets/fabiana.png";
import douglas from "../../assets/douglas.png";
import samara from "../../assets/samara.png";
import jesse from "../../assets/jesse.png";
import joao from "../../assets/joao.png";
import rosinha from "../../assets/rosinha.png";
import paulo from "../../assets/paulo.png";
import marcelo from "../../assets/marcelo.png";
import juraci from "../../assets/juraci.png";

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
        <ButtonHome>Saiba mais</ButtonHome>
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
        <Department imageUrl={marcos} name="Pr. Marcos Júnior" role="Presidência" />
        <Department imageUrl={rogerio} name="Pr. Rogério Gurniak" role="Secretaria" />
        <Department imageUrl={everson} name="Everson Braga" role="Tesouraria" />
        <Department imageUrl={fabiana} name="Fabiana Nowack" role="Educação Adventista" />
        <Department imageUrl={douglas} name="Pr. Douglas Silva" role="Ministério Jovem" />
        <Department imageUrl={samara} name="Samara Zabel" role="Ministério da Criança" />
        <Department imageUrl={jesse} name="Pr. Jessé Santos" role="Desbravadores & Aventureiros" />
        <Department imageUrl={joao} name="Pr. João Lorini" role="Ministério Pessoal" />
        <Department imageUrl={rosinha} name="Rosinha Oliveira" role="Ministério da Mulher" />
        <Department imageUrl={paulo} name="Pr. Paulo Aguiar" role="Ministério da Família" />
        <Department imageUrl={marcelo} name="Pr. Marcelo Dadamo" role="Evangelismo" />
        <Department imageUrl={juraci} name="Pr. Juraci Hauser" role="Publicações" />
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

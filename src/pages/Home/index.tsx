import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import arrowRight from "../../assets/arrow-right.svg";
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
  DepartmentsTitle,
} from "./styles";
import Department from "../../components/Department";
import Menu from "../../components/Menu";

interface IDepartment {
  imageUrl: string;
  name: string;
  role: string;
  url?: string;
}

const departments: IDepartment[] = [
  {
    imageUrl: marcos,
    name: "Pr. Marcos Júnior",
    role: "Presidência",
    url: "/marcos-junior",
  },
  {
    imageUrl: rogerio,
    name: "Pr. Rogério Gurniak",
    role: "Secretaria",
    url: "/rogerio-gurniak",
  },
  {
    imageUrl: everson,
    name: "Everson Braga",
    role: "Tesouraria",
    url: "/everson-braga",
  },
  {
    imageUrl: fabiana,
    name: "Fabiana Nowack",
    role: "Educação Adventista",
  },
  {
    imageUrl: douglas,
    name: "Pr. Douglas Silva",
    role: "Ministério Jovem",
  },
  {
    imageUrl: samara,
    name: "Samara Zabel",
    role: "Ministério da Criança",
  },
  {
    imageUrl: jesse,
    name: "Pr. Jessé Santos",
    role: "Desbravadores & Aventureiros",
  },
  {
    imageUrl: joao,
    name: "Pr. João Lorini",
    role: "Ministério Pessoal",
  },
  {
    imageUrl: rosinha,
    name: "Rosinha Oliveira",
    role: "Ministério da Mulher",
  },
  {
    imageUrl: paulo,
    name: "Pr. Paulo Aguiar",
    role: "Ministério da Família",
  },
  {
    imageUrl: marcelo,
    name: "Pr. Marcelo Dadamo",
    role: "Evangelismo",
  },
  {
    imageUrl: juraci,
    name: "Pr. Juraci Hauser",
    role: "Publicações",
  },
];

const Login: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  if (openMenu) {
    return <Menu onClose={() => setOpenMenu(false)} isHome />;
  }

  return (
    <Container>
      <ContainerMenu>
        <img src={menu} alt="Menu" onClick={() => setOpenMenu(true)} />
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
        {departments.map((dep) => (
          <Department
            imageUrl={dep.imageUrl}
            name={dep.name}
            role={dep.role}
            url={dep.url}
          />
        ))}
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

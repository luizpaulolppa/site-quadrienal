import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import arrowRight from "../../assets/arrow-right.svg";
import setaParaBaixo from "../../assets/seta-para-baixo.png";
import marcos from "../../assets/marcos-junior/marcos.png";
import rogerio from "../../assets/rogerio-gurniak/rogerio.png";
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
  const [goToDepartaments, setGoToDepartaments] = useState(false);

  useEffect(() => {
    if (goToDepartaments) {
      goToDepartamentsSection()
    }
  }, [goToDepartaments])


  function goToDepartamentsSection() {
    const id = '#departamentos';
    const to = document.querySelector(id) as HTMLElement | null;
    
    if (to != null) {
      window.scroll({
        top: to.offsetTop,
        behavior: "smooth"
      })
    }
    
    setGoToDepartaments(false);
  }

  function linkToDepartamentsSection() {
    setOpenMenu(false)
    setGoToDepartaments(true);
  }

  if (openMenu) {
    return <Menu link={linkToDepartamentsSection} onClose={() => setOpenMenu(false)} isHome />;
  }

  // window.addEventListener('scroll', handleScroll);

  // function isVisible(el: HTMLElement) {
  //   const posicoes = el.getBoundingClientRect();
  //   const inicio = posicoes.top;
  //   const fim = posicoes.bottom;
  //   let estaVisivel = false
    
  //   if((inicio >= 0) && (fim <= window.innerHeight)) {
  //           estaVisivel = true;
  //   }
    
  //   return estaVisivel;
  // }

  // function handleScroll() {
  //   console.log('passei aqui')
  //   const element = document.querySelector("#test") as HTMLElement | null;
  //   const element1 = document.querySelector("#departamentos") as HTMLElement | null;
  //   const element2 = document.querySelector("#footer") as HTMLElement | null;

  //   let backgroundcolor = ''

  //   console.log(element1 && isVisible(element1))
  //   if (element1 && isVisible(element1)) {
  //     const color = window.getComputedStyle(element1).getPropertyValue("background-color");
  //     backgroundcolor = color;
  //   } else if (element2 && isVisible(element2)) {
  //     const color = window.getComputedStyle(element2).getPropertyValue("background-color");
  //     backgroundcolor = color;
  //   } else if (element) {
  //     const color = window.getComputedStyle(element).getPropertyValue("background-color");
  //     backgroundcolor = 'white';
  //   }
  
  //   if (element) {
  //     element.style.backgroundColor = backgroundcolor;
  //   }
  //   window.removeEventListener("scroll", handleScroll);
  //   window.addEventListener('scroll', handleScroll);
  // }

  return (
    <Container id="test">
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
      <Corredor id="departamentos">
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
      <Footer id="footer">
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

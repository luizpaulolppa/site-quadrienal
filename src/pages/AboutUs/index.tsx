import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import setaParaBaixo from "../../assets/seta-para-baixo.png";
import time1 from "../../assets/about-us/time1.png";
import time2 from "../../assets/about-us/time2.png";
import pastores1 from "../../assets/about-us/pastores1.png";
import pastores2 from "../../assets/about-us/pastores2.png";
import pastores3 from "../../assets/about-us/pastores3.png";
import pastores4 from "../../assets/about-us/pastores4.png";
import pastores5 from "../../assets/about-us/pastores5.png";
import pastores6 from "../../assets/about-us/pastores6.png";
import pastores7 from "../../assets/about-us/pastores7.png";
import servidores1 from "../../assets/about-us/servidores1.png";
import servidores2 from "../../assets/about-us/servidores2.png";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import {
  Container,
  TitleContainer,
  Content,
  SummaryContainer,
  Name,
  AboutUsContainer,
  AboutUsTitle,
} from "./styles";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  function linkToDepartmentsSection() {
    navigate("/");
  }

  if (openMenu) {
    return (
      <Menu
        link={linkToDepartmentsSection}
        onClose={() => setOpenMenu(false)}
      />
    );
  }

  return (
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <Content>
        <br />
        <TitleContainer>Expediente</TitleContainer>
        <SummaryContainer>
          <ul>
            <li>
              <Name>Produção Executiva:</Name> Pr. Marcos Júnior, Presidente |
              Pr. Rogério Gurniak, Secretário | Everson Braga, Tesoureiro
            </li>
            <li>
              <Name>Conselho Consultivo | Departamentais:</Name> Douglas Silva |
              Fabiana Nowack | Jessé Santos | João Lorini | Juraci Hauser |
              Marcelo Dadamo | Paulo Aguiar | Rosinha Oliveira | Samara Zabel
            </li>
            <li>
              <Name>Jornalista Responsável:</Name> Bianca Lorini - Registro
              Profissional: 0017738 RS
            </li>
            <li>
              <Name>Projeto gráfico e Desenvolvimento:</Name> Broccoli
              Comunicação
            </li>
            <li>
              <Name>Imagens:</Name> Arquivo ACSR | Arquivo igrejas
            </li>
            <li>
              <Name>Revisão:</Name> Fabiana Lopes
            </li>
            <li>
              <Name>Site:</Name> acsr.adventistas.org.br
            </li>
            <li>
              <Name>Redes Sociais:</Name>
              <br />
              Facebook: @acsr.rs
              <br />
              Instagram: @adventistasacsr
              <br />
              YouTube: Adventistas Centro do Rio Grande do Sul
            </li>
          </ul>
        </SummaryContainer>
        <AboutUsContainer>
          <img src={setaParaBaixo} alt="" className="setaParaBaixo" />
          <AboutUsTitle>Quem somos</AboutUsTitle>
          <AboutUsTitle>Pastores</AboutUsTitle>
          <img src={time1} alt="" />
          <p className="subtitle">Distritais</p>
          <img src={pastores1} alt="" />
          <p className="subtitle">Escolares</p>
          <img src={pastores2} alt="" />
          <p className="subtitle">Centros de Influência</p>
          <img src={pastores3} alt="" />
          <p className="subtitle">Auxiliares</p>
          <img src={pastores4} alt="" />
          <p className="subtitle">Departamentais</p>
          <img src={pastores5} alt="" />
          <p className="subtitle">Escola Bíblica</p>
          <img src={pastores6} alt="" />
          <p className="subtitle">Um Ano em Missão (OYiM)</p>
          <img src={pastores7} alt="" />
          <AboutUsTitle>Servidores</AboutUsTitle>
          <img src={time2} alt="" />
          <p className="subtitle">Escritório</p>
          <img src={servidores1} alt="" />
          <p className="subtitle">Todos os servidores do campo</p>
          <img src={servidores2} alt="" />
        </AboutUsContainer>
      </Content>
    </Container>
  );
};

export default AboutUs;

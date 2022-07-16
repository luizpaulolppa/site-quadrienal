import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import setaParaBaixo from "../../assets/seta-para-baixo.png";
import time1 from "../../assets/time1.png";
import time2 from "../../assets/time2.png";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import {
  Container,
  TitleContainer,
  Content,
  SummaryContainer,
  Name,
  AboutUsContainer,
  AboutUsTitle
} from "./styles";

const AboutUs: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  if (openMenu) {
    return <Menu onClose={() => setOpenMenu(false)} />;
  }

  return (
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <Content>
        <TitleContainer>
          Discipulando <br />
          para a <br />
          Eternidade
        </TitleContainer>
        <SummaryContainer>
          <h2>Sumário</h2>
          <ul>
            <li>
              Presidência | <Name>Pr. Marcos Júnior</Name>
            </li>
            <li>
              Secretaria, Serviço Voluntário Adventista, Centro de Vida Saudável
              | <Name>Pr. Rogério Gurniak</Name>
            </li>
            <li>Tesouraria e Expansão Patrimonial | Everson Braga</li>
            <li>Educação Adventista | <Name>Fabiana Nowack</Name></li>
            <li>
              Ministério Jovem, Ministério da Música, Comunicação e
              Universitários | <Name>Pr. Douglas Silva</Name>
            </li>
            <li>
              Ministério da Criança e Ministério do Adolescente | <Name>Samara Zabel</Name>
            </li>
            <li>Desbravadores e Aventureiros | <Name>Pr. Jessé Santos</Name></li>
            <li>
              Associação Ministerial, Ministério Pessoal e Escola Sabatina | <Name>Pr. João Lorini</Name>
            </li>
            <li>
              Ministério da Mulher, Área Feminina da Associação Ministerial | <Name>Rosinha Oliveira</Name>
            </li>
            <li>
              Ministério da Família, Mordomia Cristã, Ação Solidária Adventista
              | <Name>Pr. Paulo Aguiar</Name>
            </li>
            <li>Evangelismo | Pr. <Name>Marcelo Dadamo</Name></li>
            <li>
              Publicações, Espírito de Profecia, Saúde | <Name>Pr. Juraci Hauser</Name>
            </li>
          </ul>
        </SummaryContainer>
        <AboutUsContainer>
          <img src={setaParaBaixo} alt="setaParaBaixo" />
          <AboutUsTitle>Quem somos</AboutUsTitle>
          <img src={time1} alt="Time" />
          <ul>
            <li>Presidência | Pr. Marcos Júnior</li>
            <li>Secretaria, Serviço Voluntário Adventista, Centro de Vida Saudável | Pr. Rogério Gurniak</li>
            <li>Tesouraria e Expansão Patrimonial | Erverson Braga</li>
            <li>Educação Adventista| Fabiana Nowack</li>
            <li>Ministério Jovem, Ministério da Música, Comunicação e Universitários | Pr. Douglas Silva</li>
            <li>Ministério da Criança e Ministério do Adolescente | Samara Zabel</li>
          </ul>
          <img src={time2} alt="Time" />
        </AboutUsContainer>
      </Content>
    </Container>
  );
};

export default AboutUs;

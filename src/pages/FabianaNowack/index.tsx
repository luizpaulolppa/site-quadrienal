import React, { useEffect, useState } from "react";

import fabiana from "../../assets/fabiana-nowack/fabiana-without-back.png";
import arrowDown from "../../assets/arrow-down-white.svg";
import arrowDownGreen from "../../assets/seta-para-baixo.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import { useNavigate } from "react-router-dom";

import {
  Container,
  TitleContainer,
  ImageContainer,
  Name,
  Role,
  TextContainer,
  TextCapitularContainer,
  FirstLetter,
  Text,
  GreenBox,
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
} from "./styles";


const FabianaNowack: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function linkToDepartamentsSection() {
    navigate("/?departamentos=true");
  }

  if (openMenu) {
    return <Menu link={linkToDepartamentsSection} onClose={() => setOpenMenu(false)} />;
  }

  return (
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <TitleContainer id="section1">
        <ImageContainer>
          <img src={fabiana} alt="Fabiana" />
        </ImageContainer>
        <Name>
          Fabiana
          <br /> Nowack
        </Name>
        <Role>
          Educação Adventista
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“A</FirstLetter>
            <Text>
              quele que coopera com o propósito divino, transmitindo aos jovens 
              o conhecimento de 
            </Text>
          </TextCapitularContainer>
          <Text>
            Deus, e moldando-lhes o caráter em harmonia com o Seu, realiza uma elevada 
            e nobre obra. Suscitando o desejo de atingir o ideal de Deus, 
            apresenta uma educação que é tão alta como o Céu e tão extensa como o Universo; 
            uma educação que não se poderá completar nesta vida, mas que se prolongará 
            na vindoura; educação que garante ao estudante eficiente sua promoção da escola 
            preparatória da Terra para o curso superior – a escola celestial” 
          <br />
          <br />
          (Ellen G. White, Educação, p. 9).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <GreenBox>
        <br />
          Estrutura educacional das nove escolas que compõem o Departamento 
          de Educação na ACRS:
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
      </GreenBox>
      <HighlightsContainer>
        <br />
        <br />
        <img src={arrowDownGreen} alt="Seta para baixo verde" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          O Departamento de Educação da ACSR foi muito abençoado neste último quadriênio, 
          pois mantivemos a missão e filosofia da Educação Adventista em todas as unidades 
          escolares. Acompanhe alguns índices de pessoal e dados administrativos:
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <ThanksContainer>
        <br />
        <br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Meus agradecimentos pelos quatro anos de trabalho no Departamento de Educação da ACSR são em primeiro lugar para Deus, pelas maravilhosas bênçãos recebidas, pela saúde e motivação renovada a cada dia para cumprir a missão. Pela honra de servi-Lo através da Educação Adventista.
          <br />
          <br />
          Agradeço ao meu esposo, Abraão Vicente pelo apoio constante, suas orações, as palavras de encorajamento, bem como à toda minha família!
          <br />
          <br />
          Também ressalto meu imenso sentimento de gratidão pelos companheiros que servem nas Escolas Adventistas da ACSR: diretores, pastores, tesoureiros, coordenadoras pedagógicas, orientadoras educacionais, secretários escolares, professores e demais funcionários, bem como aos colegas do Departamento de Educação! Que privilégio poder trabalharmos juntos para fortalecer a missão da Educação Adventista aqui em nosso território.
          <br />
          <br />
          Agradeço aos colegas departamentais da ACSR, aos administradores da ACSR pastor Marcos Júnior, pastor Rogério Gurniak e Everson Braga. Também ao pastor Elton Alves e Laudecir Mazzo que também administraram o campo em anos anteriores. Finalmente, minha gratidão à administração da USB com toda sua equipe do departamento de Educação, especialmente ao pastor Rubens Silva.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default FabianaNowack;

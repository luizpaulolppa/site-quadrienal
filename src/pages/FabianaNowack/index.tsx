import React, { useEffect, useState } from "react";

import fabiana from "../../assets/fabiana-nowack/fabiana-without-back.jpg";
import escolas1 from "../../assets/fabiana-nowack/escolas1.png";
import escolas2 from "../../assets/fabiana-nowack/escolas2.png";
import escolas3 from "../../assets/fabiana-nowack/escolas3.png";
import escolas4 from "../../assets/fabiana-nowack/escolas4.png";
import escolas5 from "../../assets/fabiana-nowack/escolas5.png";
import escolas6 from "../../assets/fabiana-nowack/escolas6.png";
import escolas7 from "../../assets/fabiana-nowack/escolas7.png";
import escolas8 from "../../assets/fabiana-nowack/escolas8.png";
import escolas9 from "../../assets/fabiana-nowack/escolas9.png";
import escolas10 from "../../assets/fabiana-nowack/escolas10.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import arrowDown from "../../assets/arrow-down-white.svg";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import FadeIn from "../../components/FadeIn";

const FabianaNowack: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade1") as Element;
    const elTrigger = document.querySelector("#start_fade1") as Element;
    elements.push(el);

    function isOnScreen(el: any) {
      let rect = el.getBoundingClientRect();
      return rect.top > 0 && rect.bottom < window.innerHeight;
    }

    function playAnimation(el: any, trigger: any) {
      if (isOnScreen(trigger)) el.style.animationPlayState = "running";
    }

    window.addEventListener("scroll", function () {
      elements.forEach((el) => playAnimation(el, elTrigger));
    });
  }, []);

  function linkToDepartmentsSection() {
    navigate("/?departamentos=true");
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
    <S.Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <S.TitleContainer id="section1">
        <S.ImageContainer>
          <img src={fabiana} alt="Fabiana" />
        </S.ImageContainer>
        <S.Name>
          Fabiana
          <br /> Nowack
        </S.Name>
        <S.Role>Educação Adventista</S.Role>
        <S.TextContainer>
          <S.TextCapitularContainer>
            <S.FirstLetter>“A</S.FirstLetter>
            <S.Text>
              quele que coopera com o propósito divino, transmitindo aos jovens
              o conhecimento de
            </S.Text>
          </S.TextCapitularContainer>
          <S.Text>
            Deus, e moldando-lhes o caráter em harmonia com o Seu, realiza uma
            elevada e nobre obra. Suscitando o desejo de atingir o ideal de
            Deus, apresenta uma educação que é tão alta como o Céu e tão extensa
            como o Universo; uma educação que não se poderá completar nesta
            vida, mas que se prolongará na vindoura; educação que garante ao
            estudante eficiente sua promoção da escola preparatória da Terra
            para o curso superior – a escola celestial”
            <br />
            <br />
            (Ellen G. White, Educação, p. 9).
          </S.Text>
          <br />
          <br />
        </S.TextContainer>
      </S.TitleContainer>
      <div id="start_fade1"></div>
      <S.GreenBox>
        <br />
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Conheça a estrutura educacional das 9 unidades escolares que compõe a
          Educação Adventista na ACSR:
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
        <br />
      </S.GreenBox>
      <S.ContainerData>
        <S.ThanksTitle>
          Escolas/
          <br />
          Colégios
        </S.ThanksTitle>
        <br />
        <br />
        <img src={escolas1} alt="" />
        <br />
        <br />
        <img src={escolas2} alt="" />
        <br />
        <br />
        <img src={escolas3} alt="" />
        <br />
        <br />
        <img src={escolas4} alt="" />
        <br />
        <br />
        <img src={escolas5} alt="" />
        <br />
        <br />
        <img src={escolas6} alt="" />
        <br />
        <br />
        <img src={escolas7} alt="" />
        <br />
        <br />
        <img src={escolas8} alt="" />
        <br />
        <br />
        <img src={escolas9} alt="" />
        <br />
        <br />
        <img src={escolas10} alt="" />
        <br />
        <br />
        <br />
        <S.ThanksText>
          O Departamento de Educação da ACSR foi muito abençoado neste último
          quadriênio, pois mantivemos a missão e filosofia da Educação
          Adventista em todas as unidades escolares. Acompanhe alguns índices de
          pessoal e dados administrativos:
          <br />
          <br />
        </S.ThanksText>
      </S.ContainerData>
      <S.ThanksContainer>
        <br />
        <br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <S.ThanksTitle>Agradecimentos</S.ThanksTitle>
        <br />
        <br />
        <S.ThanksText>
          Meus agradecimentos pelos quatro anos de trabalho no Departamento de
          Educação da ACSR são em primeiro lugar para Deus, pelas maravilhosas
          bênçãos recebidas, pela saúde e motivação renovada a cada dia para
          cumprir a missão. Pela honra de servi-Lo através da Educação
          Adventista.
          <br />
          <br />
          Agradeço ao meu esposo, Abraão Vicente pelo apoio constante, suas
          orações, as palavras de encorajamento, bem como à toda minha família!
          <br />
          <br />
          Também ressalto meu imenso sentimento de gratidão pelos companheiros
          que servem nas Escolas Adventistas da ACSR: diretores, pastores,
          tesoureiros, coordenadoras pedagógicas, orientadoras educacionais,
          secretários escolares, professores e demais funcionários, bem como aos
          colegas do Departamento de Educação! Que privilégio poder trabalharmos
          juntos para fortalecer a missão da Educação Adventista aqui em nosso
          território.
          <br />
          <br />
          Agradeço aos colegas departamentais da ACSR, aos administradores da
          ACSR pastor Marcos Júnior, pastor Rogério Gurniak e Everson Braga.
          Também ao pastor Elton Alves e Laudecir Mazzo que também administraram
          o campo em anos anteriores. Finalmente, minha gratidão à administração
          da USB com toda sua equipe do departamento de Educação, especialmente
          ao pastor Rubens Silva.
          <br />
          <br />
        </S.ThanksText>
      </S.ThanksContainer>
    </S.Container>
  );
};

export default FabianaNowack;

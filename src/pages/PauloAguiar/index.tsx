import React, { useEffect, useState } from "react";

import paulo from "../../assets/paulo-aguiar/paulo-without-back.jpg";

import arrowDown from "../../assets/arrow-down-white.svg";
import arrowDownRed from "../../assets/seta-para-baixo-red.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import image1 from "../../assets/paulo-aguiar/image1.png";
import image2 from "../../assets/paulo-aguiar/image2.png";
import image3 from "../../assets/paulo-aguiar/image3.png";
import image4 from "../../assets/paulo-aguiar/image4.png";
import image5 from "../../assets/paulo-aguiar/image5.png";
import image6 from "../../assets/paulo-aguiar/image6.png";
import image7 from "../../assets/paulo-aguiar/image7.png";
import image8 from "../../assets/paulo-aguiar/image8.png";
import image9 from "../../assets/paulo-aguiar/image9.png";
import image10 from "../../assets/paulo-aguiar/image10.png";
import image11 from "../../assets/paulo-aguiar/image11.png";
import image12 from "../../assets/paulo-aguiar/image12.png";
import image13 from "../../assets/paulo-aguiar/image13.png";
import image14 from "../../assets/paulo-aguiar/image14.png";
import image15 from "../../assets/paulo-aguiar/image15.png";
import image16 from "../../assets/paulo-aguiar/image16.png";
import image17 from "../../assets/paulo-aguiar/image17.png";
import image18 from "../../assets/paulo-aguiar/image18.png";
import image19 from "../../assets/paulo-aguiar/image19.png";
import image20 from "../../assets/paulo-aguiar/image20.png";
import image21 from "../../assets/paulo-aguiar/image21.png";
import image22 from "../../assets/paulo-aguiar/image22.png";
import image222 from "../../assets/paulo-aguiar/image222.png";
import image23 from "../../assets/paulo-aguiar/image23.png";
import image24 from "../../assets/paulo-aguiar/image24.png";
import image25 from "../../assets/paulo-aguiar/image25.png";
import image26 from "../../assets/paulo-aguiar/image26.png";

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
  RedBox,
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
  HighlightsSubTitle,
  YellowBox,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const PauloAguiar: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade2") as Element;
    const elTrigger = document.querySelector("#start_fade2") as Element;
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
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <TitleContainer id="section1">
        <ImageContainer>
          <img src={paulo} alt="Paulo" />
        </ImageContainer>
        <Name>
          Pr.
          <br />
          Paulo
          <br />
          Aguiar
        </Name>
        <Role>
          Mordomia Cristã, Ministério da Família, ASA - Ação Solidária
          Adventista
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“O</FirstLetter>
            <Text>tudo de mim em resposta ao Tudo de Deus".</Text>
          </TextCapitularContainer>
          <br />
        </TextContainer>
      </TitleContainer>

      <GreenBox>
        <br />
        <br />
        <span className="title">Mordomia Cristã</span>
        <br />
        <br />
        "Quando os seguidores de Cristo Lhe devolvem o que Lhe é devido, estão
        acumulando tesouro que lhes será entregue quando ouvirem as palavras:
        “Bem está, servo bom e fiel [...] entra no alegria do teu Senhor”.
        Mateus 25:23. “O qual pelo alegria que Lhe estava proposta suportou a
        cruz, desprezando a afronta, e assentou-Se à destra do trono de Deus”.
        Hebreus 12:2. A alegria de ver pessoas redimidas, eternamente salvas,
        eis a recompensa de todos os que assentam os pés nas pegadas dAquele que
        disse: 'Segue-Me'.”
        <br /> <br />
        (Ellen G. White, O Desejado de Todas as Nações, p.366)
        <br />
        <br />
        Ser um mordomo fiel de Deus, implica viver e administrar a nossa vida,
        reconhecendo por palavras e ações que Deus é o Nosso Senhor, que Ele é o
        Nosso Deus, e que Ele é o único dono de tudo que somos e de tudo o que
        temos.
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsSubTitle>
          Projeto "Primeiro Deus - 10 dias de oração”
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Realizado a cada ano em todas as igrejas da ACSR.
        </HighlightsText>
        <br />
        <br />
        <HighlightsSubTitle>
          Número de igrejas atendidas com o Seminário Teórico-Prático (Santa
          Convocação)
        </HighlightsSubTitle>
        <br />
        <img src={image1} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>
          Número de igrejas onde sermões de fidelidade foram pregados
          mensalmente
        </HighlightsSubTitle>
        <br />
        <img src={image2} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>
          Capacitações Regionais para líderes de Mordomia Cristã
        </HighlightsSubTitle>
        <br />
        <img src={image3} alt="" />
        <br />
        <img src={image4} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>
          Treinamentos para as professoras nas trimestrais
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Foi realizado em 2022 para fortalecer a mordomia cristã das novas
          gerações.
        </HighlightsText>
        <br />
        <img src={image5} alt="" />
        <br />
        <br />
        <img src={image6} alt="" />
        <br />
        <br />
        <img src={image7} alt="" />
        <br />
        <br />
        <img src={image8} alt="" />
        <br />
        <br />
        <img src={image9} alt="" />
        <br />
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <div id="start_fade2"></div>
      <RedBox>
        <br />
        <span className="title">
          <FadeIn id="fade1" duration="3s" delay="0.2s">
            Ministério da Família
          </FadeIn>
        </span>
        <br />
        <br />
        <span className="sub-title">Ellen White escreveu: </span>
        <br />
        <br />
        <FadeIn id="fade2" duration="3s" delay="0.2s">
          "Uma família bem ordenada, bem disciplinada, terá poderosa influência
          para o bem".
        </FadeIn>
        <br />
        <br />
        <span className="footer">
          (Ellen G. White, Beneficência Social, p.235)
        </span>
        <br />
        <br />
        <br />
      </RedBox>
      <HighlightsContainer>
        <img src={image10} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>Retiros e Encontros de Casais</HighlightsSubTitle>
        <br />
        <img src={image11} alt="" />
        <br />
        <br />
        <img src={image12} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>Projeto Conectando Corações</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Através do incentivo de um álbum de figurinhas colecionáveis dos
          personagens bíblicos e outras ações, as famílias foram incentivadas a
          crescer em 5 áreas seguindo o acróstico da palavra FÁCIL:
        </HighlightsText>
        <br />
        <img src={image13} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>
          Capacitações Regionais para líderes do Ministério da Família{" "}
        </HighlightsSubTitle>
        <br />
        <img src={image14} alt="" />
        <br />
        <br />
      </HighlightsContainer>
      <YellowBox>
        <br />
        <br />
        <span className="title">ASA - Ação Solidária Adventista</span>
        <br />
        <br />
        Ação Solidária Adventista (ASA) tem a missão de envolver cada membro da
        igreja no Relacionamento através do incentivo às ações solidárias
        semanais. Nosso objetivo é ter a maioria dos membros vivendo o amor ao
        próximo como seu estilo de vida.
        <br />
        <br />
        <br />
      </YellowBox>
      <HighlightsContainer>
        <img src={image15} alt="" />
        <br />
        <br />
        <img src={image16} alt="" />
        <br />
        <br />
        <img src={image17} alt="" />
        <br />
        <br />
        <img src={image18} alt="" />
        <br />
        <br />
        <img src={image19} alt="" />
        <br />
        <br />
        <img src={image20} alt="" />
        <br />
        <br />
        <img src={image21} alt="" />
        <br />
        <br />
        <img src={image222} alt="" />
        <br />
        <br />
        <img src={image22} alt="" />
        <br />
        <br />
        <img src={image23} alt="" />
        <br />
        <br />
        <img src={image24} alt="" />
        <br />
        <br />
        <img src={image25} alt="" />
        <br />
        <br />
        <img src={image26} alt="" />
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
          Agradeço a Deus o doador de toda a vida pelo chamado a missão e
          privilégio de servir na Obra do Senhor. Agradeço a minha amada esposa
          Karina Aguiar pela parceria, apoio, dedicação e amor, sem ela nada
          disso seria possível. Aos meus filhos Lukas e Júlia pelo carinho, amor
          e por sempre me colocarem “pra cima”, vocês são meu orgulho, meu
          presente e minha alegria. E não posso esquecer dos meus pais Deniclei
          (Dino) e Maria de Lurdes (Lú) por terem colocado no meu coração o amor
          a Cristo, a Igreja e a Missão.
          <br />
          <br />
          Obrigado a administração do campo da ACSR por nos dar toda a estrutura
          para realizar nosso trabalho a cada dia. Grato aos meus colegas
          distritais e departamentais, sobretudo ao Pr. Rogério Gurniak, Pr.
          Elton Jr. e Pr. João Lorini que respectivamente lideraram as áreas de
          Mordomia Cristã, Ministério da Família e ASA de 2019 a 2021 e fizeram
          um excelente trabalho.
          <br />
          <br />
          Sou grato aos nossos líderes da USB, Pr. Harry e Pr. Geisler que
          lideraram a Mordomia Cristã durante este período, e ao Pr. Vargas
          nosso líder do Ministério da Família, pelos preciosos conselhos e
          orientacões.
          <br />
          <br />
          Louvo e agradeço a Deus pela vida, dedicação e excelente trabalho de
          nossas secretárias de departamento, Naylane e Marissol, que são uma
          bençao para nós.
          <br />
          <br />E por fim, muito obrigado a igreja de Cristo, aos nossos líderes
          e membros que tornam todos os sonhos, trabalhos e realizações
          possíveis através da dedicação pessoal e da presença do Espírito Santo
          em suas vidas.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default PauloAguiar;

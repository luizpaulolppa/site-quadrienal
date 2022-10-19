import React, { useEffect, useState } from "react";

import everson from "../../assets/everson/everson-without-back.jpg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import balance from "../../assets/everson/balance.png";
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
  Highlights,
  HighlightsText,
  HighlightsTitle,
  HighlightsDataText,
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  BalanceContainer,
  BalanceTitle,
  BalanceSubTitle,
  BalanceBadge,
  BalanceText,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const EversonBraga: React.FC = () => {
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
      <TitleContainer>
        <ImageContainer>
          <img src={everson} alt="Everson" />
        </ImageContainer>
        <Name>
          Everson
          <br /> Braga
        </Name>
        <Role>Tesouraria e Expansão Patrimonial</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“A</FirstLetter>
            <Text>
              tua fidelidade se estende de geração em geração; fundaste a terra,
              e ela permanece”
              <br />
              <br />
              (Sl 119:90).
            </Text>
          </TextCapitularContainer>
        </TextContainer>
        <br />
        <br />
      </TitleContainer>
      <Highlights>
        <br />
        <br />
        <img src={redArrowDown} alt="seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Louvamos a Deus por termos uma
          <span className="red"> igreja comprometida </span>
          com o serviço do Senhor.
        </HighlightsText>

        <br />
        <br />

        <HighlightsText>
          <span className="red">Muitas bênçãos</span> foram derramadas neste
          campo, resultado da prosperidade e fidelidade de nossos irmãos.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />

        <HighlightsDataText>
          Podemos confirmá-la através do crescimento de{" "}
          <span className="green">24,58% </span>
          nos dízimos e <span className="blue">15,86%</span> nas ofertas
        </HighlightsDataText>

        <br />
        <br />

        <HighlightsText>
          Nesse mesmo período, tivemos um crescimento de inflação de{" "}
          <span className="red">23,59%</span>
          <br />
          <br />
          (janeiro de 2019 – julho de 2022).
        </HighlightsText>
        <br />
        <br />
      </Highlights>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          “O que semeia em abundância, em abundância também ceifará. Deus não é
          injusto para que Se esqueça do vosso labor, do vosso trabalho de amor”
        </FadeIn>
        <br />
        <span>
          (Ellen G. White, <br /> Conselhos sobre Mordomia, p. 58).
        </span>
        <br />
        <br />
      </GreenBox>
      <BalanceContainer>
        <br />
        <BalanceTitle>Área Religiosa</BalanceTitle>
        <br />
        <br />
        <br />
        <img src={balance} alt="Balanço" />
      </BalanceContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Agradecemos a Deus primeiramente, pela oportunidade que nos dá de
          pertencermos à sua igreja, bem como aos membros do campo da Associação
          Central Sul Rio-Grandense da IASD pela sua fidelidade nos dízimos e
          ofertas.
          <br />
          <br />
          Aos tesoureiros de nossas igrejas pelo comprometimento, zelo e
          integridade que desempenham sua missão nos controles e processos dos
          recursos que pertencem a Deus. À administração da USB, em especial ao
          pastor Volnei Porto, pelo apoio e orientações.
          <br />
          <br />
          Aos colegas da administração, departamentais, servidores do
          escritório, pastores, colportores e funcionários das escolas nossa
          gratidão pela amizade, unidade e lealdade com a missão da Igreja.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default EversonBraga;

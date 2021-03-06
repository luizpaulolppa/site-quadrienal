import React, { useEffect, useState } from "react";

import everson from "../../assets/everson/everson-without-back.png";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
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
        <Role>Tesouraria e Expans??o Patrimonial</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???A</FirstLetter>
            <Text>
              tua fidelidade se estende de gera????o em gera????o; fundaste a terra,
              e ela permanece???
              <br />
              <br />
              (Sl 119:90).
            </Text>
          </TextCapitularContainer>
        </TextContainer>
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
          com o servi??o do Senhor.
        </HighlightsText>

        <br />
        <br />

        <HighlightsText>
          <span className="red">Muitas b??n????os</span> foram derramadas neste
          campo, resultado da prosperidade e fidelidade de nossos irm??os.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />

        <HighlightsDataText>
          Podemos confirm??-la atrav??s do crescimento de{" "}
          <span className="green">18,01% </span>
          nos d??zimos e <span className="blue">9,43%</span> nas ofertas
        </HighlightsDataText>

        <br />
        <br />

        <HighlightsText>
          Nesse mesmo per??odo, tivemos um crescimento de infla????o de{" "}
          <span className="red">27,95%</span>
          <br />
          <br />
          (janeiro de 2019 ??? julho de 2022).
        </HighlightsText>
        <br />
        <br />
      </Highlights>
      <div id="start_fade1"></div>
      <GreenBox>
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          ???O que semeia em abund??ncia, em abund??ncia tamb??m ceifar??. Deus n??o ??
          injusto para que Se esque??a do vosso labor, do vosso trabalho de amor???
        </FadeIn>
        <br />
        <br />
        <span>
          (Ellen G. White, <br /> Conselhos sobre Mordomia, p. 58).
        </span>
      </GreenBox>
      <BalanceContainer>
        <br />
        <BalanceTitle>Balan??os Patrimoniais</BalanceTitle>
        <br />
        <br />
        <br />
        <BalanceSubTitle>Terrenos adquiridos</BalanceSubTitle>
        <br />
        <BalanceBadge color="#F1403F">
          <span>2019</span>
        </BalanceBadge>
        <br />
        <BalanceText>
          Presidente Vargas | Bairro Cruzeiro | 315.000,00
        </BalanceText>
        <br />
        <BalanceBadge color="#19CD77">
          <span>2020</span>
        </BalanceBadge>
        <br />
        <BalanceText>Boa Vista do Incra | Cruz Alta | 11.162,52</BalanceText>
        <br />
        <BalanceBadge color="#E8D71E">
          <span>2021</span>
        </BalanceBadge>
        <br />
        <BalanceText>Nova Bras??lia | Alegrete | 65.000,00</BalanceText>
        <BalanceText>
          Bairro Aparecida | Bento Gon??alves | 150.000,00
        </BalanceText>
        <br />
        <BalanceBadge color="#63B4EF">
          <span>2022</span>
        </BalanceBadge>
        <br />
        <BalanceText>Bairro Pinheiros | Lajeado | 125.000,00</BalanceText>
        <BalanceText>Rio Branco | Caxias do Sul | 700.000,00</BalanceText>
        <BalanceText>Bela Uni??o | Santa Maria | 100.000,00</BalanceText>
        <BalanceText>Olarias | Canoas | 180.000,00</BalanceText>
        <br />
        <br />
        <BalanceText>
          <strong>TOTAL TERRENOS: 1.646.162,52</strong>
        </BalanceText>
      </BalanceContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Agradecemos a Deus primeiramente, pela oportunidade que nos d?? de
          pertencermos ?? sua igreja, bem como aos membros do campo da Associa????o
          Central Sul Rio-Grandense da IASD pela sua fidelidade nos d??zimos e
          ofertas.
          <br />
          <br />
          Aos tesoureiros de nossas igrejas pelo comprometimento, zelo e
          integridade que desempenham sua miss??o nos controles e processos dos
          recursos que pertencem a Deus. ?? administra????o da USB, em especial ao
          pastor Volnei Porto, pelo apoio e orienta????es.
          <br />
          <br />
          Aos colegas da administra????o, departamentais, servidores do
          escrit??rio, pastores, colportores e funcion??rios das escolas nossa
          gratid??o pela amizade, unidade e lealdade com a miss??o da Igreja.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default EversonBraga;

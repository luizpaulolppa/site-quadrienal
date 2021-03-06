import React, { useEffect, useState } from "react";

import samaraZabel from "../../assets/samara-zabel/samara-without-back.png";
import bases from "../../assets/samara-zabel/bases.png";
import arrowDownRed from "../../assets/seta-para-baixo-red.png";
import setaParaBaixoRedonda from "../../assets/seta-para-baixo-redonda.png";
import greenArrowDown from "../../assets/seta-para-baixo.png";

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
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
  BackgroundImage,
  GreenBox,
  DestaquesLayout,
  BoxDescription,
  BoxTitle,
  GreenNumbersText,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const SamaraZabel: React.FC = () => {
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
      <TitleContainer id="section1">
        <ImageContainer>
          <img src={samaraZabel} alt="Douglas Silva" />
        </ImageContainer>
        <Name>
          Samara
          <br /> Zabel
        </Name>
        <Role>Minist??rio da Crian??a e Minist??rio do Adolescente</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???N</FirstLetter>
            <Text>
              os meninos que foram postos em contato com Ele, viu Jesus os
              homens e mulheres
            </Text>
          </TextCapitularContainer>
          <Text>
            que haviam de ser herdeiros de Sua gra??a e s??ditos do Seu reino, e
            alguns dos quais se tornariam m??rtires por amor dEle???
            <br />
            <br />
            (Ellen G. White, O Desejado de Todas as Na????es, p. 515, 516).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsText className="italic-block">
          Trabalhar com crian??as requer a plena consci??ncia de que estamos n??o
          s?? influenciando vidas, mas ajudando a form??-las.
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Pensando nisso, a ACSR n??o mediu esfor??os para que parte de seus
          recursos fossem destinados a esse departamento neste quadri??nio.
        </FadeIn>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          Com a pandemia que atingiu todo o mundo em 2019 e 2020, nossas
          crian??as ficaram longe dos amigos, da escola, da igreja, das classes
          infantis e das demais atividades ao ar livre.
          <br />
          <br />
          Por isso, nossos departamentos que envolvem crian??as e adolescentes
          receberam grande apoio da ACRS para alimentar pequenos e grandes
          dentro de suas casas, por treinamentos para professores ou classes
          para nossos alunos.
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <img src={arrowDownRed} alt="Seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <DestaquesLayout>
          <BoxTitle>Escola de Pais</BoxTitle>
          <BoxDescription>???Tudo come??a em casa???</BoxDescription>
          <BoxTitle>
            Participa????o dos <br />
            adolescentes
          </BoxTitle>
          <BoxDescription>
            ???BEP Teen - Bom de
            <br /> Esp??rito de Profecia???
          </BoxDescription>
          <BoxTitle>
            Crian??as envolvidas na
            <br /> prega????o do Evangelho
          </BoxTitle>
          <BoxDescription>???Grande como Davi???</BoxDescription>
          <BoxTitle>
            Realiza????o de oito
            <br /> Escolas de Pais.
          </BoxTitle>
          <BoxDescription>
            ???Escola Crist?? de F??rias
            <br /> em parceria com os
            <br /> calebes???
          </BoxDescription>
        </DestaquesLayout>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Relat??rio</HighlightsTitle>
        <HighlightsText>
          Em 2019, foram realizadas quinze trimestrais regionais com
        </HighlightsText>
        <br />
        <GreenNumbersText>
          <span>427</span> professores
        </GreenNumbersText>
        <br />
        <HighlightsText>
          capacitados por trimestre, al??m de duas trimestrais com l??deres
          distritais.
        </HighlightsText>
        <br />
        <img src={setaParaBaixoRedonda} alt="Seta Para Baixo Redonda" />
        <br />
        <HighlightsText>
          Durante o ano de 2020, quatro trimestrais foram on-line com
          capacita????o para
        </HighlightsText>
        <br />
        <GreenNumbersText>
          <span>118</span> professores
        </GreenNumbersText>
        <br />
        <HighlightsText>
          No mesmo ano, tanto a Escola Sabatina quanto a Semana Santa on-line
          foram executadas pelo Departamento MC e MA da ACRS para todo o campo.
        </HighlightsText>
        <br />
        <img src={setaParaBaixoRedonda} alt="Seta Para Baixo Redonda" />
        <br />
        <HighlightsText>
          No decorrer de 2021, dez trimestrais regionais foram preparadas para{" "}
        </HighlightsText>
        <br />
        <GreenNumbersText>
          <span>456</span> professores
        </GreenNumbersText>
        <br />
        <HighlightsText>
          e duas trimestrais para l??deres distritais. Numa das trimestrais,
          voltada para a lideran??a distrital do MC e MA, cada l??der levou um
          discipulado. J?? a lideran??a do MA levou um adolescente para o encontro
          que durou um final de semana.
          <br />
          <br />
          Neste ano, inclusive, tr??s grandes movimentos aconteceram para
          crian??as e adolescentes:
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          Adoletch?? ???Ref??ns ??? O Resgate Final???
        </HighlightsTitle>
        <HighlightsText>
          com mais de 800 adolescentes durante um final de semana no IACS, em
          parceria com a ACRS;
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          Concurso de Orat??ria do Soul+ e Adolescentes
        </HighlightsTitle>
        <HighlightsText>
          com final no Encontro de Anci??os em outubro;
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          In??cio da Adora????o Infantil
        </HighlightsTitle>
        <HighlightsText>
          nos cultos de quarta e domingo.
          <br />
          <br />
          At?? este momento de 2022, quinze trimestrais regionais foram
          elaboradas para 534 professores.
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Bases de Gera????o 148 Teen no campo:</HighlightsTitle>
        <HighlightsText>
          <br />
          <img src={bases} alt="Bases" />
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <img src={greenArrowDown} alt="Seta para baixo verde" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Agrade??o a Deus primeiramente, que olha com amor eterno e acredita que
          crianc??as, juvenis e adolescentes t??m muito a fazer e contribuir para a
          finaliza????o de Sua Obra.
          <br />
          <br />
          ?? minha fam??lia, que sempre me apoiou e esteve ao meu lado em todos os
          momentos.
          <br />
          <br />
          ?? Administra????o da ACSR, que na??o mede esfor??os para que os objetivos
          desse departamento sejam alcan??ados.
          <br />
          <br />
          ?? Uni??o Sul Brasileira (USB), em especial ?? professora J??lia Cardoso
          pelo apoio incondicional e orienta????es inspiradoras.
          <br />
          <br />
          Ao casal Marcus e Daiana Azevedo, por viverem intensamente o
          Minist??rio do Adolescente junto ?? ACSR.
          <br />
          <br />
          Aos coordenadores e professores que sa??o fi??is, incansa??veis, pacientes
          e perseverantes no servic??o de levar crianc??as, juvenis e adolescentes
          rumo ?? Canaa?? Celestial.
          <br />
          <br />
          Aos pastores e suas respectivas esposas que incentivaram, participaram
          e apoiaram os li??deres no compromisso do crescimento do MC e MA em seu
          distrito.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default SamaraZabel;

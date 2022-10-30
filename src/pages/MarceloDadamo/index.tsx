import React, { useEffect, useState } from "react";

import marcelo from "../../assets/marcelo-dadamo/marcelo-without-back.jpg";
import composition from "../../assets/marcelo-dadamo/composition.png";
import evangelismo1 from "../../assets/marcelo-dadamo/evangelismo1.png";
import evangelismo2 from "../../assets/marcelo-dadamo/evangelismo2.png";
import evangelismo3 from "../../assets/marcelo-dadamo/evangelismo3.png";
import domingos1 from "../../assets/marcelo-dadamo/domingos1.png";
import colheitas1 from "../../assets/marcelo-dadamo/colheitas1.png";
import colheitas2 from "../../assets/marcelo-dadamo/colheitas2.png";
import colheitas3 from "../../assets/marcelo-dadamo/colheitas3.png";
import colheitas4 from "../../assets/marcelo-dadamo/colheitas4.png";
import impacto1 from "../../assets/marcelo-dadamo/impacto1.png";
import impacto2 from "../../assets/marcelo-dadamo/impacto2.png";
import impacto3 from "../../assets/marcelo-dadamo/impacto3.png";
import impacto4 from "../../assets/marcelo-dadamo/impacto4.png";
import impacto5 from "../../assets/marcelo-dadamo/impacto5.png";
import impacto6 from "../../assets/marcelo-dadamo/impacto6.png";
import impacto7 from "../../assets/marcelo-dadamo/impacto7.png";
import impacto8 from "../../assets/marcelo-dadamo/impacto8.png";
import impacto9 from "../../assets/marcelo-dadamo/impacto9.png";
import impacto10 from "../../assets/marcelo-dadamo/impacto10.png";
import missao1 from "../../assets/marcelo-dadamo/missao1.png";
import missao2 from "../../assets/marcelo-dadamo/missao2.png";
import missao3 from "../../assets/marcelo-dadamo/missao3.png";
import missao4 from "../../assets/marcelo-dadamo/missao4.png";
import missao5 from "../../assets/marcelo-dadamo/missao5.png";
import missao6 from "../../assets/marcelo-dadamo/missao6.png";
import missao7 from "../../assets/marcelo-dadamo/missao7.png";
import missao8 from "../../assets/marcelo-dadamo/missao8.png";
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
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
  EntriesAndMoveOutContainer,
  EntriesAndMoveOutTitle,
  EntriesAndMoveOutSubtitle,
  EntriesAndMoveText,
  HighlightsSubTitle,
} from "./styles";

const MarceloDadamo: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade1") as Element;
    const el1 = document.querySelector("#fade2") as Element;
    const el2 = document.querySelector("#fade3") as Element;
    const el3 = document.querySelector("#fade4") as Element;

    const elTrigger = document.querySelector("#start_fade1") as Element;
    elements.push(el);
    elements.push(el1);
    elements.push(el2);
    elements.push(el3);

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
          <img src={marcelo} alt="Marcelo" />
        </ImageContainer>
        <Name>
          Pr.
          <br />
          Marcelo
          <br />
          Dadamo
        </Name>
        <Role>Evangelismo e Missão Global</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“D</FirstLetter>
            <Text>
              êem graças ao Senhor, invoquem o seu nome; tornem conhecidos entre
              os
            </Text>
          </TextCapitularContainer>
          <Text>
            povos os seus feitos.”
            <br />
            <br />
            (Sl 105:1).
            <br />
            <br />
            “Avante! Obedeçamos à ordem, […] Deus pede um contínuo progresso na
            difusão de luz […] Avançai”
            <br />
            <br />
            (Ellen G. White, Serviço Cristão, p. 103).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br />
        <HighlightsText>
          Os dados a seguir demonstram o resultado do esforço conjunto de nossos
          líderes, bem como de nossos irmãos que se comprometeram com a causa do
          Mestre.
        </HighlightsText>
        <br />
        <HighlightsText>
          É também uma oportunidade para oferecermos a nossa gratidão a Deus por
          tão grandes bênçãos concedidas à Sua igreja no território da
          Associação Central Sul Rio-Grandense.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Evangelismo – Equipe</HighlightsTitle>
        <br />
        <br />
        <img src={composition} alt="" />
        <br />
        <br />
      </HighlightsContainer>
      <EntriesAndMoveOutContainer>
        <br />
        <br />
        <EntriesAndMoveOutTitle>Evangelismos Batismos</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveText>
          Veja os batismos deste quadriênio comparado aos batismos que tivemos
          no ano de 2018.
        </EntriesAndMoveText>
        <br />
        <br />
        <img src={evangelismo1} alt="" />
        <EntriesAndMoveOutTitle>Escola de Missões</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveOutSubtitle>
          Capacitações Regionais Realizadas
        </EntriesAndMoveOutSubtitle>
        <img src={evangelismo2} alt="" />
        <EntriesAndMoveOutSubtitle>
          Missionários Cadastrados
        </EntriesAndMoveOutSubtitle>
        <img src={evangelismo3} alt="" />
        <br />
      </EntriesAndMoveOutContainer>
      <HighlightsContainer>
        <br />
        <br />
        <HighlightsTitle>Domingos Especiais</HighlightsTitle>
        <br />
        <strong>Igrejas que realizaram o Projeto</strong>
        <br />
        <p>(2019-2022)</p>
        <br />
        <img src={domingos1} alt="" />
        <br />
        <br />
        <br />
        <HighlightsTitle>Evangelismo de Colheita</HighlightsTitle>
        <br />
        <strong>Resultados</strong>
        <p>Evangelismo com pastor distrital</p>
        <br />
        <img src={colheitas1} alt="" />
        <br />
        <br />
        <HighlightsText>
          Evangelismo de Colheita (Dep. Evangelismo)
        </HighlightsText>
        <br />
        <img src={colheitas2} alt="" />
        <br />
        <br />
        <HighlightsText>
          Evangelismo com evangelistas voluntários
        </HighlightsText>
        <br />
        <img src={colheitas3} alt="" />
        <br />
        <br />
        <HighlightsSubTitle>Evangelismo de Primavera</HighlightsSubTitle>
        <br />
        <img src={colheitas4} alt="" />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Impacto ACSR</HighlightsTitle>
        <p>(evangelismo 10 dias de oração)</p>
        <br />
        <strong>Resultados</strong>
        <br />
        <HighlightsText>Pontos</HighlightsText>
        <br />
        <img src={impacto1} alt="" />
        <br />
        <HighlightsText>Público</HighlightsText>
        <br />
        <img src={impacto2} alt="" />
        <br />
        <HighlightsText>Distritos alcançados</HighlightsText>
        <br />
        <img src={impacto3} alt="" />
        <br />
        <HighlightsText>Pedidos Estudos Bíblicos</HighlightsText>
        <br />
        <img src={impacto4} alt="" />
        <br />
        <HighlightsText>Interessados</HighlightsText>
        <br />
        <img src={impacto5} alt="" />
        <br />
        <HighlightsText>Pedidos para batismo</HighlightsText>
        <br />
        <img src={impacto6} alt="" />
        <br />
        <HighlightsText>Atenderam ao apelo</HighlightsText>
        <br />
        <img src={impacto7} alt="" />
        <br />
        <HighlightsText>Batismos realizados</HighlightsText>
        <br />
        <img src={impacto8} alt="" />
        <br />
        <img src={impacto9} alt="" />
        <br />
        <img src={impacto10} alt="" />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Missão Global</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Em vez de buscar fazer crescer as congregações existentes ao atrair
          novos membros (o que, naturalmente, é importante), o objetivo da
          Missão Global é ir à comunidade para iniciar novas congregações e
          revitalizar igrejas que estão fracas.
        </HighlightsText>
        <br />
        <img src={missao1} alt="" />
        <br />
        <br />
        <HighlightsText>Municípios da ACSR</HighlightsText>
        <br />
        <img src={missao2} alt="" />
        <br />
        <HighlightsText>Com presença adventista</HighlightsText>
        <br />
        <img src={missao3} alt="" />
        <br />
        <HighlightsText>Sem presença adventista</HighlightsText>
        <br />
        <img src={missao4} alt="" />
        <br />
        <HighlightsText>Famílias isoladas</HighlightsText>
        <br />
        <img src={missao5} alt="" />
        <br />
        <HighlightsText>Distritos envolvidos em plantio</HighlightsText>
        <br />
        <img src={missao6} alt="" />
        <br />
        <HighlightsText>Número de Igrejas plantadas</HighlightsText>
        <br />
        <img src={missao7} alt="" />
        <br />
        <HighlightsText>Número de Igrejas revitalizadas</HighlightsText>
        <br />
        <img src={missao8} alt="" />
      </HighlightsContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Damos louvor e gratidão a Deus pela vida e salvação em Cristo Jesus.
          <br />
          <br />
          Aos administradores e departamentais da União Sul Brasileira e de
          nossa Associação, pelo apoio e companheirismo.
          <br />
          <br />
          Aos pastores distritais pelo carinho e pela amizade, aos dedicados
          obreiros bíblicos, evangelistas regionais, distritais, elite e líderes
          de igrejas pelo envolvimento, e às minhas secretárias que me
          acompanharam durante este quadriênio.
          <br />
          <br />
          Reconhecimento e gratidão à minha amada esposa, Nilcelaine Ribeiro, e
          aos meus filhos, Pâmela e Marcelo.
          <br />
          <br />
          Ao relatar o que o Senhor tem feito por Sua igreja no território da
          ACSR, podemos afirmar: “Graças te rendemos, ó Deus, graças te
          rendemos! Invocamos o teu Nome, e declaramos as Tuas maravilhas.” Sal
          75:1
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default MarceloDadamo;

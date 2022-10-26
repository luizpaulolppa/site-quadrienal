import React, { useEffect, useState } from "react";

import samaraZabel from "../../assets/samara-zabel/samara-without-back.jpg";
import batismo1 from "../../assets/samara-zabel/batismo-1.svg";
import batismo2 from "../../assets/samara-zabel/batismo-2.svg";
import batismo3 from "../../assets/samara-zabel/batismo-3.svg";
import batismo4 from "../../assets/samara-zabel/batismo-4.svg";
import batismo5 from "../../assets/samara-zabel/batismo-5.svg";
import batismo6 from "../../assets/samara-zabel/batismo-6.svg";

import image1 from "../../assets/samara-zabel/image1.png";
import image2 from "../../assets/samara-zabel/image2.png";
import image3 from "../../assets/samara-zabel/image3.png";
import image4 from "../../assets/samara-zabel/image4.png";
import image5 from "../../assets/samara-zabel/image5.png";
import image6 from "../../assets/samara-zabel/image6.png";
import image7 from "../../assets/samara-zabel/image7.png";
import image8 from "../../assets/samara-zabel/image8.png";
import image99 from "../../assets/samara-zabel/image99.svg";
import image100 from "../../assets/samara-zabel/image100.svg";
import image101 from "../../assets/samara-zabel/image101.svg";
import image102 from "../../assets/samara-zabel/image102.png";

import arrowDownRed from "../../assets/seta-para-baixo-red.png";
import arrowDownYellow from "../../assets/seta-para-baixo-yellow.png";

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
  GreenBox,
  HighlightListContainer,
  HighlightContainer,
  HighlightHead,
  HighlightBody,
  ReportContainer,
  ReportTitle,
  ReportYearRedAdoletche,
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
        <Role>Ministério da Criança e Ministério do Adolescente</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“N</FirstLetter>
            <Text>
              os meninos que foram postos em contato com Ele, viu Jesus os
              homens e mulheres
            </Text>
          </TextCapitularContainer>
          <Text>
            que haviam de ser herdeiros de Sua graça e súditos do Seu reino, e
            alguns dos quais se tornariam mártires por amor dEle”
            <br />
            <br />
            (Ellen G. White, O Desejado de Todas as Nações, p. 515, 516).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsText className="italic-block">
          Trabalhar com crianças requer a plena consciência de que estamos não
          só influenciando vidas, mas ajudando a formá-las.
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Pensando nisso, a ACSR não mediu esforços para que parte de seus
          recursos fossem destinados a esse departamento neste quadriênio.
        </FadeIn>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <img src={arrowDownRed} alt="Seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightListContainer>
          <HighlightContainer>
            <HighlightHead>
              4 Escolas de Pais "Tudo Começa em Casa"
            </HighlightHead>
            <HighlightBody className="small">Adolescentes Participando do Concurso</HighlightBody> 
            <HighlightBody>
              “BEP Teen - Bom de
              Espírito de Profecia”
            </HighlightBody>
          </HighlightContainer>
          <HighlightContainer>
            <HighlightHead>
              82 Escolas Cristã de Férias em Parceria com os Calebs
            </HighlightHead>
            <HighlightBody className="small">Adolescentes e Juvenis Participando do</HighlightBody> 
            <HighlightBody>
              "Concurso de Oratória"
            </HighlightBody>
          </HighlightContainer>
          <HighlightContainer>
            <HighlightHead>Lançamento do Evangelismo Kids</HighlightHead>
            <HighlightBody>
              Escola Sabatina na Pandemia Online para Todas as Crianças
            </HighlightBody>
          </HighlightContainer>
          <HighlightContainer>
            <HighlightHead>
              Escola Sabatina na Pandemia Online para Todas as Crianças
            </HighlightHead>
            <HighlightBody>
              Vídeos para Adoração Infantil nos Cultos de Quarta e Domingo
            </HighlightBody>
          </HighlightContainer>
        </HighlightListContainer>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Relatório</HighlightsTitle>
        <ReportContainer>
          <ReportTitle>
            <span>CRM</span> com crianças
          </ReportTitle>
          <br />
          <img src={image1} alt="" />
          <br /><br />
          <img src={image2} alt="" />
          <br /><br />
          <img src={image3} alt="" />
          <br /><br />
          <img src={image4} alt="" />
          <br />
        </ReportContainer>
        <ReportContainer>
          <ReportTitle>
            <span>CRM</span> com adolescentes
          </ReportTitle>
          <br />
          <img src={image5} alt="" />
          <br /><br />
          <img src={image6} alt="" />
          <br /><br />
          <img src={image7} alt="" />
          <br /><br />
          <img src={image8} alt="" />
          <br />
        </ReportContainer>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Batismos de Crianças</HighlightsTitle>
        <HighlightsText>
          <strong>Idade de 8 a 12 anos</strong>
          <br />
          <br />
          <img src={image99} alt="Batismos de Crianças" />
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Batismos de Adolescentes</HighlightsTitle>
        <HighlightsText>
          <strong>Idade de 13 a 16 anos</strong>
          <br />
          <br />
          <img src={image100} alt="Batismos de Adolescentes" />
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Bases G148TEEN</HighlightsTitle>
        <HighlightsText>
          <br />
          <br />
          <img src={batismo3} alt="Bases G148TEEN" />
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Adoletchê</HighlightsTitle>
        <HighlightsText>
          <ReportYearRedAdoletche>1 no quadriênio</ReportYearRedAdoletche>
          <ReportYearRedAdoletche>+ de 1.000 adolescentes</ReportYearRedAdoletche>
          <ReportYearRedAdoletche>6 batismos</ReportYearRedAdoletche>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Trimestrais</HighlightsTitle>
        <HighlightsText>
          <br />
          <br />
          <img src={batismo4} alt="Trimestrais" />
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Professores Capacitados</HighlightsTitle>
        <HighlightsText>
          <br />
          <br />
          <img src={batismo5} alt="Professores Capacitados" />
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>
          Curso de Liderança para Líderes do MC e MA
        </HighlightsTitle>
        <HighlightsText>
          <br />
          <br />
          <img src={image101} alt="Curso de Liderança para Líderes do MC e MA" />
        </HighlightsText>
        <br /><br />
        <ReportContainer>
          <img src={image102} alt="" />
          <br /><br />
        </ReportContainer>
      </HighlightsContainer>
      <ThanksContainer>
        <img src={arrowDownYellow} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          A Deus primeiramente que olha com amor eterno e acredita que crianças,
          juvenis e adolescentes têm muito a fazer e contribuir para a
          finalização de Sua Obra.
          <br />
          <br />
          A minha família, em especial meu marido Gerson Zabel que sempre me
          apoiou e esteve ao meu lado em todos os momentos.
          <br />
          <br />
          A Administração da ACSR que não mede esforços para que os objetivos
          desse departamento sejam alcançados.
          <br />
          <br />
          A USB na pessoa da Prof. Júlia pelo apoio incondicional e orientações
          inspiradoras.
          <br />
          <br />
          Ao Marcus e Daiana Azevedo por viver intensamente o Ministério do
          Adolescente junto a ACSR.
          <br />
          <br />
          Aos coordenadores e professores que são fieis, incansáveis, pacientes
          e perseverantes no serviço de levar crianças, juvenis e adolescentes
          rumo a Canaã Celestial.
          <br />
          <br />
          A minha secretária Vitória por seu compromisso e dedicação nestes ministérios, 
          juntamente com as secretárias anteriores Jéssica Contri e Rosângela Alves.
          <br />
          <br />
          Aos pastores e suas respectivas esposas que incentivaram, participaram
          e apoiaram os líderes no compromisso do crescimento do MC e MA em seu
          distrito.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default SamaraZabel;

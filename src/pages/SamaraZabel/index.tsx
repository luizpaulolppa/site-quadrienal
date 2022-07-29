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

const SamaraZabel: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function linkToDepartamentsSection() {
    navigate("/?departamentos=true");
  }

  if (openMenu) {
    return (
      <Menu
        link={linkToDepartamentsSection}
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
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsText className="italic-block">
          Trabalhar com crianças requer a plena consciência de que estamos não
          só influenciando vidas, mas ajudando a formá-las.
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <GreenBox>
        <br />
        <br />
        Pensando nisso, a ACSR não mediu esforços para que parte de seus
        recursos fossem destinados a esse departamento neste quadriênio.
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          Com a pandemia que atingiu todo o mundo em 2019 e 2020, nossas
          crianças ficaram longe dos amigos, da escola, da igreja, das classes
          infantis e das demais atividades ao ar livre.
          <br />
          <br />
          Por isso, nossos departamentos que envolvem crianças e adolescentes
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
          <BoxDescription>‘Tudo começa em casa’</BoxDescription>
          <BoxTitle>
            Participação dos <br />
            adolescentes
          </BoxTitle>
          <BoxDescription>
            ‘BEP Teen - Bom de
            <br /> Espírito de Profecia’
          </BoxDescription>
          <BoxTitle>
            Crianças envolvidas na
            <br /> pregação do Evangelho
          </BoxTitle>
          <BoxDescription>‘Grande como Davi’</BoxDescription>
          <BoxTitle>
            Realização de oito
            <br /> Escolas de Pais.
          </BoxTitle>
          <BoxDescription>
            ‘Escola Cristã de Férias
            <br /> em parceria com os
            <br /> calebes’
          </BoxDescription>
        </DestaquesLayout>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Relatório</HighlightsTitle>
        <HighlightsText>
          Em 2019, foram realizadas quinze trimestrais regionais com
        </HighlightsText>
        <br />
        <GreenNumbersText>
          <span>427</span> professores
        </GreenNumbersText>
        <br />
        <HighlightsText>
          capacitados por trimestre, além de duas trimestrais com líderes
          distritais.
        </HighlightsText>
        <br />
        <img src={setaParaBaixoRedonda} alt="Seta Para Baixo Redonda" />
        <br />
        <HighlightsText>
          Durante o ano de 2020, quatro trimestrais foram on-line com
          capacitação para
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
          e duas trimestrais para líderes distritais. Numa das trimestrais,
          voltada para a liderança distrital do MC e MA, cada líder levou um
          discipulado. Já a liderança do MA levou um adolescente para o encontro
          que durou um final de semana.
          <br />
          <br />
          Neste ano, inclusive, três grandes movimentos aconteceram para
          crianças e adolescentes:
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          Adoletchê ‘Reféns – O Resgate Final’
        </HighlightsTitle>
        <HighlightsText>
          com mais de 800 adolescentes durante um final de semana no IACS, em
          parceria com a ACRS;
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          Concurso de Oratória do Soul+ e Adolescentes
        </HighlightsTitle>
        <HighlightsText>
          com final no Encontro de Anciãos em outubro;
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle className="red fs32">
          Início da Adoração Infantil
        </HighlightsTitle>
        <HighlightsText>
          nos cultos de quarta e domingo.
          <br />
          <br />
          Até este momento de 2022, quinze trimestrais regionais foram
          elaboradas para 534 professores.
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Bases de Geração 148 Teen no campo:</HighlightsTitle>
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
          Agradeço a Deus primeiramente, que olha com amor eterno e acredita que
          crianças, juvenis e adolescentes têm muito a fazer e contribuir para a
          finalização de Sua Obra.
          <br />
          <br />
          À minha família, que sempre me apoiou e esteve ao meu lado em todos os
          momentos.
          <br />
          <br />
          À Administração da ACSR, que não mede esforços para que os objetivos
          desse departamento sejam alcançados.
          <br />
          <br />
          À União Sul Brasileira (USB), em especial à professora Júlia Cardoso
          pelo apoio incondicional e orientações inspiradoras.
          <br />
          <br />
          Ao casal Marcus e Daiana Azevedo, por viverem intensamente o
          Ministério do Adolescente junto à ACSR.
          <br />
          <br />
          Aos coordenadores e professores que são fiéis, incansáveis, pacientes
          e perseverantes no serviço de levar crianças, juvenis e adolescentes
          rumo à Canaã Celestial.
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

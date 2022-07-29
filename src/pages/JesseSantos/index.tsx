import React, { useEffect, useState } from "react";

import jesse from "../../assets/jesse-santos/jesse-without-back.png";

import arrowDownGreen from "../../assets/seta-para-baixo.png";
import arrowDownRed from "../../assets/seta-para-baixo-light-red.png";

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
  HighlightsSubTitle,
  RedCard,
} from "./styles";


const JesseSantos: React.FC = () => {
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
          <img src={jesse} alt="Jesse" />
        </ImageContainer>
        <Name>
          Pr.
          <br /> Jessé
          <br /> Santos
        </Name>
        <Role>
          Desbravadores e Aventureiros
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“M</FirstLetter>
            <Text>
              as se nos entregarmos completamente a Deus, e seguirmos
            </Text>
          </TextCapitularContainer>
          <Text>
            Sua direção em nosso trabalho, Ele mesmo Se responsabilizará pelo cumprimento. 
            Não quer que nos entreguemos a conjeturas sobre o êxito de nossos esforços 
            honestos. Nem uma vez devemos pensar em fracasso. Devemos cooperar com Aquele 
            que não conhece fracasso” 
            <br /><br />
            (Ellen G. White, Parábolas de Jesus, p. 363).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /><br />
        <HighlightsText>
          Legado! Quando se trata do Ministério de Desbravadores e Aventureiros é 
          isso que nos impulsiona a prosseguir: 
          deixar um legado de fé, amor e serviço no coração de nossas crianças e 
          adolescentes. Deus, em Sua onisciência, capacitou homens e mulheres que, 
          por gerações, construíram um ministério sólido, relevante e fundamental 
          para nossa igreja. Sem sombra de dúvidas, estes ministérios são a maior 
          escola de formação de líderes no mundo há mais de 70 anos!
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Neste mundo tão polarizado e pungente, o Ministério dos Desbravadores e 
          Aventureiros se levanta como uma solução eficiente na transformação de vidas, 
          famílias, igreja e sociedade. Com base na Palavra de Deus, inspira o 
          crescimento físico, mental e espiritual de cada um numa experiência real 
          de amor e serviço a Deus e ao próximo.
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Os dados aqui apresentados são os resultados da entrega de muitas pessoas. 
          Desde a equipe do Ministério (líder geral, coordenadores, regionais e distritais) 
          até nossos clubes espalhados pelo território de nosso campo da ACSR. Essas pessoas 
          são apaixonadas pelo que realizam, vibram com as conquistas e apontam para o 
          Mestre e Líder Jesus. Semanalmente, dedicam tempo de suas vidas para o avanço dos 
          trabalhos destes ministérios. Todo o mérito dedicamos a Deus e às pessoas que são 
          a realidade, razão e motivação de nossa jornada.
        </HighlightsText>
        <br />
        <HighlightsText>
          Acreditamos em legado! 
        </HighlightsText>
        <br />
        <HighlightsText>
          Acreditamos na formação de líderes! Acreditamos na construção de uma 
          geração apaixonada por Deus, pela Igreja e por amar e servir ao próximo. 
          “Por amor a Jesus farei sempre o meu melhor” e “ir aonde Deus mandar” não 
          são somente parte dos ideais que consolidam a nossa identidade, são um estilo 
          de vida que, de dentro para fora, apontam para Cristo e o que Ele é e oferece: 
          salvação!
        </HighlightsText>
        <br /><br /><br /><br />
        <img src={arrowDownRed} style={{ height: '48px', width: '48px' }}alt="Seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsSubTitle>2022</HighlightsSubTitle>
        <br />
        <RedCard style={{ marginBottom: '10px' }}>
          <HighlightsText>
            Capacitação de liderança por região no início do ano
          </HighlightsText>
        </RedCard>
        <RedCard>
          <HighlightsText>
            Participação dos nossos desbravadores no projeto Calebe de lenço
          </HighlightsText>
        </RedCard>
        <HighlightsText>
          Projeto ‘Revitalize’ em todas as regiões
          <br /><br />
          Pastori — Orientações Gerais MDA
          <br /><br />
          Curso regional para capitães, secretários e conselheiros em maio
          <br /><br />
          Top Líder MDA — Programa de Formação de Liderança (29/04 a 01/05)
          <br /><br />
          Concílio de Regionais MDA (18 a 20/06)
          <br /><br />
          VII Aventuri — DinoAventura (14 a 16/10)
          <br /><br />
          V Campori de Desbravadores ‘Imensurável’ (03 a 06/11).
        </HighlightsText>

        <br />
        <HighlightsSubTitle>2021</HighlightsSubTitle>
        <br />

        <HighlightsText>
          Curso de treinamento básico para diretores de Aventureiros e Desbravadores
          <br /><br />
          Projeto Calebe de lenço — Desbravadores participando ativamente
          <br /><br />
          Treinamento de líderes ‘Resgate’, líder, líder master e líder master avançado (13 a 15/11)
          <br /><br />
          II Olimpori on-line (31/10)
          <br /><br />
          Culto de Gratidão MDA em todas as regiões.
          <br /><br />
        </HighlightsText>

        <br />
        <HighlightsSubTitle>2020</HighlightsSubTitle>
        <br />

        <HighlightsText>
          •	I Olimpori on-line (8/11);
          <br />
          •	Treinamentos on-line para todas as regiões.
          <br />
        </HighlightsText>

        <br />
        <HighlightsSubTitle>2019</HighlightsSubTitle>
        <br />

        <HighlightsText>
          •	Líder ao extremo (15 a 17/03);
          <br />
          •	Mega líder, master e avançado (26 a 28/04);
          <br />
          •	Encontro de diretores de Desbravadores e Aventureiros (12 a 14/06);
          <br />
          •	Pastori (2 e 3/10);
          <br />
          •	Aventuri (11 a 13/10);
          <br />
          •	Campori (14 a 17/11);
          <br />
          •	Culto de Gratidão e entrega do ranking em todas as regiões.
        </HighlightsText>

        <br />
        <HighlightsSubTitle>2019, 2020, 2021 e 2022</HighlightsSubTitle>
        <br />

        <HighlightsText>
        •	4 Cursos de líder, líder master e master avançado;
        <br />
        •	5 Treinamentos para capitães, secretários e conselheiros em todas as regiões;
        <br />
        •	5 Treinamentos para capelães Desbravadores e Aventureiros;
        <br />
        •	2 Pastoris;
        <br />
        •	2 Camporis para clubes de Desbravadores;
        <br />
        •	2 Aventuris para clubes de Aventureiros;
        <br />
        •	1 Campori da DSA;
        <br />
        •	3 Olimporis.
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <br /><br />
        <img src={arrowDownGreen} alt="Seta para baixo verde" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
          Imensa gratidão a Deus pela jornada até aqui. Sem Ele, Seu favor, graça e amor 
          nada seria possível.
          <br /><br />
          À minha esposa Jaqueline Almeida e meus filhos Matheus e Filipe, 
          por serem pilares na minha caminhada e por me amarem e apoiarem 
          incondicionalmente. 
          <br /><br />
          Gratidão também a todos que fazem do MDA da ACSR uma realidade crescente 
          e transformadora e à Administração da ACSR pelo apoio, confiança e oportunidade.
          <br /><br />
          Agradeço ao pastor Fray Calderon que esteve à frente do Ministério de 
          Desbravadores e Aventureiros e fez parte das conquistas e aprendizados nos 
          anos de 2018 a 2021.
          <br /><br />
          Seguimos confiantes na boa mão do nosso líder e Mestre Jesus Cristo!
          <br /><br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JesseSantos;

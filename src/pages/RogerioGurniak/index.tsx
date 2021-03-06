import React, { useEffect, useState } from "react";

import rogerio from "../../assets/rogerio-gurniak/rogerio-without-back.png";
import informar from "../../assets/informar.png";
import discipular from "../../assets/discipular.png";
import resgatar from "../../assets/resgatar.png";
import informarBlack from "../../assets/informar-black.png";
import discipularBlack from "../../assets/discipular-black.png";
import resgatarBlack from "../../assets/resgatar-black.png";
import arrowDown from "../../assets/arrow-down-white.svg";
import arrowDownGreen from "../../assets/seta-para-baixo.png";
import diagonalArrowRed from "../../assets/diagonal-arrow-red.png";
import diagonalArrowYellow from "../../assets/diagonal-arrow-yellow.png";
import diagonalArrowGreen from "../../assets/diagonal-arrow-green.png";
import diagonalArrowBlue from "../../assets/diagonal-arrow-blue.png";
import membersChart from "../../assets/rogerio-gurniak/members-per-gender-chart.png";
import entriesChart from "../../assets/rogerio-gurniak/entries-chart.png";
import moveOutChart from "../../assets/rogerio-gurniak/move-out-chart.png";
import cvsPortoAlegre from "../../assets/rogerio-gurniak/cvs-porto-alegre.png";
import cvsCaixiasDoSul from "../../assets/rogerio-gurniak/cvs-caixias-do-sul.png";
import conversionModelChart from "../../assets/rogerio-gurniak/conversion-model-chart.png";
import returningChart from "../../assets/rogerio-gurniak/returning-chart.png";
import andventistAndCatholic from "../../assets/rogerio-gurniak/adventist-and-catholic.png";
import evangelicals from "../../assets/rogerio-gurniak/evangelicals.png";
import others from "../../assets/rogerio-gurniak/others.png";
import totalMembers from "../../assets/rogerio-gurniak/total-members.png";
import congregations from "../../assets/rogerio-gurniak/congregations.png";
import note1000Secretaries from "../../assets/rogerio-gurniak/note-1000-secretaries.png";
import arrowTopSVG from "../../assets/chevron-down.svg";
import arrowUpSVG from "../../assets/chevron-up-white.svg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
import ageGroup from "../../assets/rogerio-gurniak/age-group.png";
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
  MembersContainer,
  ObjetivosContainer,
  AccordionBody,
  AccordionHeader,
  AccordionContainer,
  AgeGroupContainer,
  EntriesAndMoveOutContainer,
  EntriesAndMoveOutSubtitle,
  EntriesAndMoveOutTitle,
  FormerReligionContainer,
  FormerReligionTitle,
  Badge,
  LabelContainer,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
} from "./styles";
import Tabs from "../../components/Tabs";
import FadeIn from "../../components/FadeIn";

interface IObjetivo {
  title: string;
  description: string;
  isOpen: boolean;
  iconOpened: string;
  iconClosed: string;
  arrowOpened: string;
  arrowClosed: string;
}

const RogerioGurniak: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [objetivos, setObjetivos] = useState<IObjetivo[]>([
    {
      title: "Informar",
      description:
        "A informa????o ?? realizada por dados reunidos com registros f??sicos ou digitais que adv??m de relat??rios das igrejas. Tais informa????es s??o usadas para o bom andamento dos demais minist??rios da igreja.",
      isOpen: true,
      iconOpened: informar,
      iconClosed: informarBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
    {
      title: "Resgatar",
      description:
        "O resgate ?? um processo natural do Minist??rio da Secretaria, pois com a precis??o e celeridade de dados que o departamento det??m, a miss??o de buscar os afastados, desaparecidos e os que abandonaram a igreja se torna seu foco.",
      isOpen: false,
      iconOpened: resgatar,
      iconClosed: resgatarBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
    {
      title: "Dicipular",
      description:
        "O discipulado ?? a raz??o de qualquer ??rea da igreja, e neste departamento n??o ?? diferente. Por isso, realiza um trabalho que envolve mais pessoas no minist??rio, por metas tra??adas dentro de uma lideran??a em rede. Desta forma, um distrital de Secretaria tem uma lideran??a discipuladora sobre os secret??rios de cada congrega????o do distrito pastoral.",
      isOpen: false,
      iconOpened: discipular,
      iconClosed: discipularBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
  ]);

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

  function changeAcc(index: number) {
    const objs = objetivos.map((obj, indexObj) => {
      return {
        ...obj,
        isOpen: indexObj === index,
      };
    });
    setObjetivos(objs);
  }

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
          <img src={rogerio} alt="Rogerio" />
        </ImageContainer>
        <Name>
          Pr.
          <br /> Rog??rio
          <br /> Gurniak
        </Name>
        <Role>
          Secretaria, Servi??o Volunt??rio Adventista, Centro de Vida Saud??vel
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???O</FirstLetter>
            <Text>
              O cora????o de Deus anseia por Seus filhos terrestres com amor mais
              forte que a morte.
            </Text>
          </TextCapitularContainer>
          <Text>
            Entregando Seu Filho, nesse ??nico Dom derramou sobre n??s todo o C??u.
            A vida, morte e intercess??o do Salvador, o minist??rio dos anjos, o
            pleitear do Esp??rito, o Pai operando acima de tudo e por tudo, o
            interesse incessante dos seres celestiais ??? tudo se empenha em favor
            da reden????o do homem??? (Ellen G. White, Caminho a Cristo, p. 21).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <div id="start_fade1"></div>
      <GreenBox id="section2">
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          O Minist??rio da Secretaria tem objetivos claros:
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
      </GreenBox>
      <ObjetivosContainer id="section3">
        <br />
        <br />
        <img src={redArrowDown} alt="Seta para baixo amarela" />
        <br />
        <span>Objetivos</span>
        {objetivos.map((obj, index) => (
          <AccordionContainer
            key={index + obj.title}
            onClick={() => changeAcc(index)}
          >
            <AccordionHeader isOpen={obj.isOpen}>
              {obj.isOpen ? (
                <img src={obj.iconOpened} alt="informar" />
              ) : (
                <img src={obj.iconClosed} alt="informar" />
              )}
              <p>{obj.title}</p>
              {obj.isOpen ? (
                <img src={obj.arrowOpened} alt="" className="arrow" />
              ) : (
                <img src={obj.arrowClosed} alt="" className="arrow" />
              )}
            </AccordionHeader>
            <AccordionBody isOpen={obj.isOpen}>
              <p>{obj.description}</p>
            </AccordionBody>
          </AccordionContainer>
        ))}
      </ObjetivosContainer>
      <MembersContainer>
        Total de membros <span>16.842</span>
        <img src={membersChart} alt="Members per gender" />
      </MembersContainer>
      <AgeGroupContainer>
        <p>Faixa et??ria</p>
        <Tabs
          tabs={["Mulheres", "Homens"]}
          value={tabIndex}
          onChange={setTabIndex}
        />
        <img src={ageGroup} alt="numero de membros" />
        <br />
        <br />
      </AgeGroupContainer>
      <EntriesAndMoveOutContainer>
        <br />
        <EntriesAndMoveOutTitle>Entradas</EntriesAndMoveOutTitle>
        <EntriesAndMoveOutSubtitle>Batismo</EntriesAndMoveOutSubtitle>
        <img src={entriesChart} alt="numero de pessoas batizadas" />
        <EntriesAndMoveOutTitle>Sa??das</EntriesAndMoveOutTitle>
        <EntriesAndMoveOutSubtitle>Apostasia</EntriesAndMoveOutSubtitle>
        <img src={moveOutChart} alt="numero de pessoas apostatadas" />
        <EntriesAndMoveOutTitle>Admiss??es</EntriesAndMoveOutTitle>
        <EntriesAndMoveOutSubtitle>
          Batismo | Rebatismo | Profiss??o de F??
        </EntriesAndMoveOutSubtitle>
        <img
          src={returningChart}
          alt="numero de pessoas que retornaram para igreja"
        />
      </EntriesAndMoveOutContainer>
      <FormerReligionContainer>
        <br />
        <FormerReligionTitle>Religi??o Anterior</FormerReligionTitle>
        <br />
        <img
          src={andventistAndCatholic}
          alt="Grafico com religi??es antigas dos novos membros"
        />
        <br />
        <img
          src={evangelicals}
          alt="Grafico com religi??es antigas dos novos membros"
        />
        <br />
        <img
          src={others}
          alt="Grafico com religi??es antigas dos novos membros"
        />
        <br />
        <img
          src={totalMembers}
          alt="Grafico com religi??es antigas dos novos membros"
        />
        <br />
        <FormerReligionTitle>Modo de Convers??o</FormerReligionTitle>
        <br />
        <img
          src={conversionModelChart}
          alt="Grafico com dados do modo de convers??o do membros"
        />
        <br />
        <br />
        <FormerReligionTitle>Congrega????es</FormerReligionTitle>
        <br />
        <br />
        <img src={congregations} alt="Congrega????es" />
        <br />
        <br />
        <FormerReligionTitle>Secret??rias Nota 1000</FormerReligionTitle>
        <br />
        <br />
        <img
          src={note1000Secretaries}
          style={{ width: "214px", height: "337px" }}
          alt="Secret??rias nota 1000 "
        />
        <br />
        <br />
        <FormerReligionTitle>Igrejas Organizadas</FormerReligionTitle>
        <br />
        <br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Bairro Serrano</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>M??rio Quintana</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nova Esperan??a</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Taquari</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Ven??ncio Aires</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Moinhos de Vento</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CAMAR</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Aparecida</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Nova Prata</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>S??o Crist??v??o</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Rio Branco-Caxias</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Dr. Rom??rio</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>*Aguardando dados*</span>
          </div>
        </LabelContainer>
        <br />
        <br />
        <br />
        <FormerReligionTitle>Grupos Abertos</FormerReligionTitle>
        <br />
        <br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Higien??polis</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nancy</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Paquet??</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Tiro</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CAMAR</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CVS Caxias</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Giru?? - Centro</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Altos dos Gal??polis</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>CASM</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Menino Jesus</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Rio Branco - Caxias</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Igreja Haitiana - Bento Gon??alves</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Patronato</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferrovi??rio</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferrovi??rio</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Igreja Haitiana - Caxias do Sul</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>*Aguardando dados*</span>
          </div>
        </LabelContainer>
        <br />
        <br />
      </FormerReligionContainer>
      <HighlightsContainer>
        <br />
        <br />
        <img src={arrowDownGreen} alt="Seta para baixo verde" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText className="green">
          Servi??o Volunt??rio Adventista (SVA)
        </HighlightsText>
        <br />
        <HighlightsText>
          O Servi??o Volunt??rio Adventista e?? um programa oficial da Igreja
          Adventista do S??timo Dia com o prop??sito de disponibilizar,
          organizadamente, oportunidades de a????es volunt??rias para adventistas
          jovens e adultos, estudantes e profissionais, em regi??es necessitadas
          da Divis??o Sul-Americana e do mundo, auxiliando a igreja na
          proclama????o do evangelho.
          <br />
          <br />
          <br />
          No ??ltimo quadri??nio, mais de 60 membros leigos das igrejas da ACSR
          participaram de miss??es para a Amaz??nia, para levar a esperan??a de
          Jesus a pessoas e lugares onde o Evangelho ainda na??o chegou e auxiliar
          nas construc??o??es e restaurac??o??es de instituic??o??es escolares e igrejas
          adventistas.
          <br />
          <br />
          <br />
          O projeto Um Ano em Missa??o (OYiM) abrange jovens de v??rias localidades
          do Brasil que investem um ano de suas vidas para levar Jesus a??s
          pessoas. Nos u??ltimos quatro anos, mais de 40 jovens participaram do
          projeto neste campo. Em 2022, 14 jovens esta??o concentrados em plantar
          e revitalizar igrejas em v??rios bairros de Porto Alegre. Este projeto
          e?? coordenado pelo Ministe??rio Jovem.
          <br />
          <br />
          <br />
          Na ACSR existem dois Centros de Influe??ncia: Porto Alegre e Caxias do
          Sul. Cada um deles abrange tre??s grandes objetivos: envolver mais
          volunta??rios adventistas com seus dons para abenc??oar as pessoas;
          aumentar o nu??mero de pessoas que migram dos cursos para as classes
          bi??blicas que ali ocorrem; e servir de modelo para que igrejas e
          escolas do campo se tornem centros de influe??ncia em suas comunidades.
          <br />
          <br />
          <br />
          <HighlightsText className="green">
            Centro de Vida Saud??vel (CVS)
          </HighlightsText>
          <br />
          <br />
          Os centros contam com 75 volunta??rios adventistas que atenderam nos
          ??ltimos quatro anos, cerca de 1.600 pessoas com os cursos oferecidos.
          Doze pessoas ja?? foram batizadas pela influe??ncia direta desses centros
          e, atualmente, 50 est??o estudando a Bi??blia.
          <br />
          <br />
          <br />
          Os pastores David Barcelos e Diego Zanotto sa??o os responsa??veis por
          liderar as ac??o??es e os projetos desses centros, respectivamente, em
          Porto Alegre e Caxias do Sul. Nesses locais, sa??o oferecidos os
          seguintes cursos:
          <br />
          <br />
          <HighlightsText className="green">
            ??? Gina??stica funcional;
            <br />
            ??? Pilates;
            <br />
            ??? Culina??ria sauda??vel;
            <br />
            ??? Atendimento juri??dico;
            <br />
            ??? Aconselhamento familiar;
            <br />
            ??? Psicoterapia em grupo;
            <br />
            ??? Massoterapia;
            <br />
            ??? ???Sem Tabus??? (intelig??ncia emocional);
            <br />
            ??? Teen coach;
            <br />
            ??? Papo de homem (grupo terap??utico);
            <br />
            ??? Consultoria jur??dica; <br />
            ??? Terapia familiar; <br />
            ??? Viol??o;
            <br />
            ??? Teologia (estudo b??blico);
            <br />
            ??? Atendimento psicol??gico (seis psic??logos);
            <br />
            ??? Aromatouch (aromaterapia);
            <br />
            ??? Intelig??ncia emocional;
            <br />
            ??? Artesanato;
            <br />
            ??? Ingl??s; <br />
            ??? Portugu??s para estrangeiros;
            <br />
            ??? Palestras mensais sobre qualidade de vida com profissionais de
            sa??de
            <br />
          </HighlightsText>
          <br />
          <br />
          Atualmente, existe no CVS de Caxias do Sul um grupo organizado, que j??
          levou ao batismo cerca de 55 pessoas:
          <br />
          <br />
          <br />
          <img src={cvsCaixiasDoSul} alt="CVS Caixias do Sul" />
          <br />
          <br />
          <br />
          O CVS de Porto Alegre participou no plantio de duas novas
          congrega????es, Higien??polis e Jardim Lindoia. Neste momento, h?? uma
          congrega????o no pr??prio CVS, que levou ao batismo 58 pessoas:
          <br />
          <br />
          <br />
          <img src={cvsPortoAlegre} alt="CVS Porto Alegre" />
        </HighlightsText>
        <br />
        <br />
        <br />
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
          Primeiramente, toda gratid??o a Deus por todas as b??n????os derramadas
          sobre cada membro da Igreja Adventista do S??timo Dia da Associa????o
          Central Sul Rio-Grandense e os cuidados que Ele tem com Seu povo ao
          longo dos ??ltimos quatro anos.
          <br />
          <br />
          Agrade??o tamb??m ?? minha esposa, Ana Claudia Gurniak, que est?? sempre
          ao meu lado, me inspirando a fazer o melhor na obra de Deus. Aos meus
          filhos, Leandro e Erick por serem uma realiza????o em minha vida. ??
          minha m??e, Maria Clara Gurniak, por ter me dedicado ao Senhor, mesmo
          sem saber que um dia eu estaria servindo ao nosso Deus.
          <br />
          <br />
          Grato tamb??m sou ao ex??rcito de volunt??rios que s??o a for??a do
          secretariado nas igrejas do nosso campo. Aos secret??rios distritais
          que s??o um time discipulador formando e capacitando l??deres neste
          departamento. Finalmente, grato ?? Ros??ngela Barragan e ?? Marissol
          Pasqualetto pela dedica????o e profissionalismo na Secretaria da ACRS.
          <br />
          <br />
          Nossa gratid??o e reconhecimento pelo trabalho do pastor Elton J??nior,
          que dirigiu estes departamentos com compet??ncia e dedica????o por tr??s
          anos (novembro de 2018???novembro de 2021). Tamb??m agrade??o ao pastor
          Harry Streithorst pela lideran??a e amizade neste minist??rio, assim
          como ao pastor Charles Rampanelli que conduziu a Secretaria da USB at??
          o ano de 2021, por todo apoio e incentivo a este departamento da ACSR.
          <br />
          <br />
          Deixo aqui igualmente meu apre??o e gratid??o aos colegas de
          Administra????o pastor Marcos J??nior e Everson Braga pelo apoio e
          amizade.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default RogerioGurniak;

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
        "A informação é realizada por dados reunidos com registros físicos ou digitais que advêm de relatórios das igrejas. Tais informações são usadas para o bom andamento dos demais ministérios da igreja.",
      isOpen: true,
      iconOpened: informar,
      iconClosed: informarBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
    {
      title: "Resgatar",
      description:
        "O resgate é um processo natural do Ministério da Secretaria, pois com a precisão e celeridade de dados que o departamento detém, a missão de buscar os afastados, desaparecidos e os que abandonaram a igreja se torna seu foco.",
      isOpen: false,
      iconOpened: resgatar,
      iconClosed: resgatarBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
    {
      title: "Dicipular",
      description:
        "O discipulado é a razão de qualquer área da igreja, e neste departamento não é diferente. Por isso, realiza um trabalho que envolve mais pessoas no ministério, por metas traçadas dentro de uma liderança em rede. Desta forma, um distrital de Secretaria tem uma liderança discipuladora sobre os secretários de cada congregação do distrito pastoral.",
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
          <br /> Rogério
          <br /> Gurniak
        </Name>
        <Role>
          Secretaria, Serviço Voluntário Adventista, Centro de Vida Saudável
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“O</FirstLetter>
            <Text>
              O coração de Deus anseia por Seus filhos terrestres com amor mais
              forte que a morte.
            </Text>
          </TextCapitularContainer>
          <Text>
            Entregando Seu Filho, nesse único Dom derramou sobre nós todo o Céu.
            A vida, morte e intercessão do Salvador, o ministério dos anjos, o
            pleitear do Espírito, o Pai operando acima de tudo e por tudo, o
            interesse incessante dos seres celestiais — tudo se empenha em favor
            da redenção do homem” (Ellen G. White, Caminho a Cristo, p. 21).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <div id="start_fade1"></div>
      <GreenBox id="section2">
        <br />
        <FadeIn className="fade" id="fade1" duration="3s" delay="0.2s">
          O Ministério <br /> da <br />Secretaria <br />tem <br />objetivos <br />claros:
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
        <p>Faixa etária</p>
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
        <EntriesAndMoveOutTitle>Saídas</EntriesAndMoveOutTitle>
        <EntriesAndMoveOutSubtitle>Apostasia</EntriesAndMoveOutSubtitle>
        <img src={moveOutChart} alt="numero de pessoas apostatadas" />
        <EntriesAndMoveOutTitle>Admissões</EntriesAndMoveOutTitle>
        <EntriesAndMoveOutSubtitle>
          Batismo | Rebatismo | Profissão de Fé
        </EntriesAndMoveOutSubtitle>
        <img
          src={returningChart}
          alt="numero de pessoas que retornaram para igreja"
        />
      </EntriesAndMoveOutContainer>
      <FormerReligionContainer>
        <br />
        <FormerReligionTitle>Religião Anterior</FormerReligionTitle>
        <br />
        <img
          src={andventistAndCatholic}
          alt="Grafico com religiões antigas dos novos membros"
        />
        <br />
        <img
          src={evangelicals}
          alt="Grafico com religiões antigas dos novos membros"
        />
        <br />
        <img
          src={others}
          alt="Grafico com religiões antigas dos novos membros"
        />
        <br />
        <img
          src={totalMembers}
          alt="Grafico com religiões antigas dos novos membros"
        />
        <br />
        <FormerReligionTitle>Modo de Conversão</FormerReligionTitle>
        <br />
        <img
          src={conversionModelChart}
          alt="Grafico com dados do modo de conversão do membros"
        />
        <br />
        <br />
        <FormerReligionTitle>Congregações</FormerReligionTitle>
        <br />
        <br />
        <img src={congregations} alt="Congregações" />
        <br />
        <br />
        <FormerReligionTitle>Secretárias Nota 1000</FormerReligionTitle>
        <br />
        <br />
        <img
          src={note1000Secretaries}
          style={{ width: "214px", height: "337px" }}
          alt="Secretárias nota 1000 "
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
            <span>Mário Quintana</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nova Esperança</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Taquari</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Venâncio Aires</span>
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
            <span>São Cristóvão</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Rio Branco-Caxias</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Dr. Romário</span>
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
            <span>Higienópolis</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nancy</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Paquetá</span>
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
            <span>Giruá - Centro</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Altos dos Galópolis</span>
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
            <span>Igreja Haitiana - Bento Gonçalves</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Patronato</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferroviário</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferroviário</span>
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
          Serviço Voluntário Adventista (SVA)
        </HighlightsText>
        <br />
        <HighlightsText>
          O Serviço Voluntário Adventista é um programa oficial da Igreja
          Adventista do Sétimo Dia com o propósito de disponibilizar,
          organizadamente, oportunidades de ações voluntárias para adventistas
          jovens e adultos, estudantes e profissionais, em regiões necessitadas
          da Divisão Sul-Americana e do mundo, auxiliando a igreja na
          proclamação do evangelho.
          <br />
          <br />
          <br />
          No último quadriênio, mais de 60 membros leigos das igrejas da ACSR
          participaram de missões para a Amazônia, para levar a esperança de
          Jesus a pessoas e lugares onde o Evangelho ainda não chegou e auxiliar
          nas construções e restaurações de instituições escolares e igrejas
          adventistas.
          <br />
          <br />
          <br />
          O projeto Um Ano em Missão (OYiM) abrange jovens de várias localidades
          do Brasil que investem um ano de suas vidas para levar Jesus às
          pessoas. Nos últimos quatro anos, mais de 40 jovens participaram do
          projeto neste campo. Em 2022, 14 jovens estão concentrados em plantar
          e revitalizar igrejas em vários bairros de Porto Alegre. Este projeto
          é coordenado pelo Ministério Jovem.
          <br />
          <br />
          <br />
          Na ACSR existem dois Centros de Influência: Porto Alegre e Caxias do
          Sul. Cada um deles abrange três grandes objetivos: envolver mais
          voluntários adventistas com seus dons para abençoar as pessoas;
          aumentar o número de pessoas que migram dos cursos para as classes
          bíblicas que ali ocorrem; e servir de modelo para que igrejas e
          escolas do campo se tornem centros de influência em suas comunidades.
          <br />
          <br />
          <br />
          <HighlightsText className="green">
            Centro de Vida Saudável (CVS)
          </HighlightsText>
          <br />
          <br />
          Os centros contam com 75 voluntários adventistas que atenderam nos
          últimos quatro anos, cerca de 1.600 pessoas com os cursos oferecidos.
          Doze pessoas já foram batizadas pela influência direta desses centros
          e, atualmente, 50 estão estudando a Bíblia.
          <br />
          <br />
          <br />
          Os pastores David Barcelos e Diego Zanotto são os responsáveis por
          liderar as ações e os projetos desses centros, respectivamente, em
          Porto Alegre e Caxias do Sul. Nesses locais, são oferecidos os
          seguintes cursos:
          <br />
          <br />
          <HighlightsText className="green">
            • Ginástica funcional;
            <br />
            • Pilates;
            <br />
            • Culinária saudável;
            <br />
            • Atendimento jurídico;
            <br />
            • Aconselhamento familiar;
            <br />
            • Psicoterapia em grupo;
            <br />
            • Massoterapia;
            <br />
            • ‘Sem Tabus’ (inteligência emocional);
            <br />
            • Teen coach;
            <br />
            • Papo de homem (grupo terapêutico);
            <br />
            • Consultoria jurídica; <br />
            • Terapia familiar; <br />
            • Violão;
            <br />
            • Teologia (estudo bíblico);
            <br />
            • Atendimento psicológico (seis psicólogos);
            <br />
            • Aromatouch (aromaterapia);
            <br />
            • Inteligência emocional;
            <br />
            • Artesanato;
            <br />
            • Inglês; <br />
            • Português para estrangeiros;
            <br />
            • Palestras mensais sobre qualidade de vida com profissionais de
            saúde
            <br />
          </HighlightsText>
          <br />
          <br />
          Atualmente, existe no CVS de Caxias do Sul um grupo organizado, que já
          levou ao batismo cerca de 55 pessoas:
          <br />
          <br />
          <br />
          <img src={cvsCaixiasDoSul} alt="CVS Caixias do Sul" />
          <br />
          <br />
          <br />
          O CVS de Porto Alegre participou no plantio de duas novas
          congregações, Higienópolis e Jardim Lindoia. Neste momento, há uma
          congregação no próprio CVS, que levou ao batismo 58 pessoas:
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
          Primeiramente, toda gratidão a Deus por todas as bênçãos derramadas
          sobre cada membro da Igreja Adventista do Sétimo Dia da Associação
          Central Sul Rio-Grandense e os cuidados que Ele tem com Seu povo ao
          longo dos últimos quatro anos.
          <br />
          <br />
          Agradeço também à minha esposa, Ana Claudia Gurniak, que está sempre
          ao meu lado, me inspirando a fazer o melhor na obra de Deus. Aos meus
          filhos, Leandro e Erick por serem uma realização em minha vida. À
          minha mãe, Maria Clara Gurniak, por ter me dedicado ao Senhor, mesmo
          sem saber que um dia eu estaria servindo ao nosso Deus.
          <br />
          <br />
          Grato também sou ao exército de voluntários que são a força do
          secretariado nas igrejas do nosso campo. Aos secretários distritais
          que são um time discipulador formando e capacitando líderes neste
          departamento. Finalmente, grato à Rosângela Barragan e à Marissol
          Pasqualetto pela dedicação e profissionalismo na Secretaria da ACRS.
          <br />
          <br />
          Nossa gratidão e reconhecimento pelo trabalho do pastor Elton Júnior,
          que dirigiu estes departamentos com competência e dedicação por três
          anos (novembro de 2018–novembro de 2021). Também agradeço ao pastor
          Harry Streithorst pela liderança e amizade neste ministério, assim
          como ao pastor Charles Rampanelli que conduziu a Secretaria da USB até
          o ano de 2021, por todo apoio e incentivo a este departamento da ACSR.
          <br />
          <br />
          Deixo aqui igualmente meu apreço e gratidão aos colegas de
          Administração pastor Marcos Júnior e Everson Braga pelo apoio e
          amizade.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default RogerioGurniak;

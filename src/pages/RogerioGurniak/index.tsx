import React, { useEffect, useState } from "react";

import rogerio from "../../assets/rogerio-gurniak/rogerio-without-back.jpg";
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
import membersChart2 from "../../assets/rogerio-gurniak/members-per-gender-chart2.png";
import membersChart3 from "../../assets/rogerio-gurniak/members-per-gender-chart3.png";
import membersChart4 from "../../assets/rogerio-gurniak/members-per-gender-chart4.png";
import cvsPortoAlegre from "../../assets/rogerio-gurniak/cvs-porto-alegre.png";
import cvsCaixiasDoSul from "../../assets/rogerio-gurniak/cvs-caixias-do-sul.png";
import conversao1 from "../../assets/rogerio-gurniak/conversao1.png";
import conversao2 from "../../assets/rogerio-gurniak/conversao2.png";
import gruposAbertos from "../../assets/rogerio-gurniak/grupos-abertos.png";
import congregations from "../../assets/rogerio-gurniak/congregacoes.png";
import note1000Secretaries from "../../assets/rogerio-gurniak/secretarios-nota-1000.png";
import igrejasOrganizadas from "../../assets/rogerio-gurniak/igrejas-organizadas.png";
import arrowTopSVG from "../../assets/chevron-down.svg";
import arrowUpSVG from "../../assets/chevron-up-white.svg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
import batismos001 from "../../assets/rogerio-gurniak/batismos001.png";
import batismos002 from "../../assets/rogerio-gurniak/batismos002.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import mulheres1 from "../../assets/rogerio-gurniak/mulheres1.png";
import homens1 from "../../assets/rogerio-gurniak/homens1.png";
import total1 from "../../assets/rogerio-gurniak/total1.png";
import mulheres2 from "../../assets/rogerio-gurniak/mulheres2.png";
import homens2 from "../../assets/rogerio-gurniak/homens2.png";
import total2 from "../../assets/rogerio-gurniak/total2.png";
import foto1 from "../../assets/rogerio-gurniak/foto1.png";
import foto2 from "../../assets/rogerio-gurniak/foto2.png";
import foto3 from "../../assets/rogerio-gurniak/foto3.png";
import foto4 from "../../assets/rogerio-gurniak/foto4.png";
import foto5 from "../../assets/rogerio-gurniak/foto5.png";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
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
  const [tabIndex2, setTabIndex2] = useState(0);
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
      isOpen: true,
      iconOpened: resgatar,
      iconClosed: resgatarBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
    {
      title: "Dicipular",
      description:
        "O discipulado é a razão de qualquer área da igreja, e neste departamento não é diferente. Por isso, realiza um trabalho que envolve mais pessoas no ministério, por metas traçadas dentro de uma liderança em rede. Desta forma, um distrital de Secretaria tem uma liderança discipuladora sobre os secretários de cada congregação do distrito pastoral.",
      isOpen: true,
      iconOpened: discipular,
      iconClosed: discipularBlack,
      arrowOpened: arrowUpSVG,
      arrowClosed: arrowTopSVG,
    },
  ]);

  useEffect(() => {
    // window.scrollTo(0, 0);
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
    // const objs = objetivos.map((obj, indexObj) => {
    //   return {
    //     ...obj,
    //     isOpen: indexObj === index,
    //   };
    // });
    // setObjetivos(objs);
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
    <S.Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <S.TitleContainer id="section1">
        <S.ImageContainer>
          <img src={rogerio} alt="Rogerio" />
        </S.ImageContainer>
        <S.Name>
          Pr.
          <br /> Rogério
          <br /> Gurniak
        </S.Name>
        <S.Role>
          Secretaria, Serviço Voluntário Adventista, Centro de Vida Saudável
        </S.Role>
        <S.TextContainer>
          <S.TextCapitularContainer>
            <S.FirstLetter>“O</S.FirstLetter>
            <S.Text>
              O coração de Deus anseia por Seus filhos terrestres com amor mais
              forte que a morte.
            </S.Text>
          </S.TextCapitularContainer>
          <S.Text>
            Entregando Seu Filho, nesse único Dom derramou sobre nós todo o Céu.
            A vida, morte e intercessão do Salvador, o ministério dos anjos, o
            pleitear do Espírito, o Pai operando acima de tudo e por tudo, o
            interesse incessante dos seres celestiais — tudo se empenha em favor
            da redenção do homem” (Ellen G. White, Caminho a Cristo, p. 21).
          </S.Text>
          <br />
          <br />
          <br />
        </S.TextContainer>
      </S.TitleContainer>
      <div id="start_fade1"></div>
      <S.GreenBox id="section2">
        <br />
        <br />
        <br />
        <FadeIn className="fade" id="fade1" duration="3s" delay="0.2s">
          O Ministério <br /> da <br />
          Secretaria <br />
          tem <br />
          objetivos <br />
          claros:
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
        <br />
      </S.GreenBox>
      <S.ObjetivosContainer id="section3">
        <br />
        <br />
        <img src={redArrowDown} alt="" />
        <br />
        {objetivos.map((obj, index) => (
          <S.AccordionContainer
            key={index + obj.title}
            onClick={() => changeAcc(index)}
          >
            <S.AccordionHeader isOpen={obj.isOpen}>
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
            </S.AccordionHeader>
            <S.AccordionBody isOpen={obj.isOpen}>
              <p>{obj.description}</p>
            </S.AccordionBody>
          </S.AccordionContainer>
        ))}
      </S.ObjetivosContainer>
      <S.MembersContainer>
        <p>Total de membros</p>
        <p className="month">setembro | 2022</p>
        <span>16.735</span>
        <img src={membersChart} alt="" />
        <img src={membersChart2} alt="" />
        <br />
        <br />
        <p className="month">setembro | 2022</p>
        <span>17.475</span>
        <img src={membersChart3} alt="" />
        <img src={membersChart4} alt="" />
      </S.MembersContainer>
      <S.AgeGroupContainer>
        <p>Faixa etária</p>
        <p className="year">(2019-2022)</p>
        <Tabs
          tabs={["Mulheres", "Homens", "Total"]}
          value={tabIndex}
          onChange={setTabIndex}
        />
        {tabIndex === 0 && <img src={mulheres1} alt="" />}
        {tabIndex === 1 && <img src={homens1} alt="" />}
        {tabIndex === 2 && <img src={total1} alt="" />}
        <br />
        <br />
        <p className="year">(2015-2018)</p>
        <Tabs
          tabs={["Mulheres", "Homens", "Total"]}
          value={tabIndex2}
          onChange={setTabIndex2}
        />
        {tabIndex2 === 0 && <img src={mulheres2} alt="" />}
        {tabIndex2 === 1 && <img src={homens2} alt="" />}
        {tabIndex2 === 2 && <img src={total2} alt="" />}
        <br />
        <br />
      </S.AgeGroupContainer>
      <S.EntriesAndMoveOutContainer>
        <br />
        <br />
        <br />
        <S.EntriesAndMoveOutTitle>Entradas</S.EntriesAndMoveOutTitle>
        <S.EntriesAndMoveOutSubtitle>
          Batismo | Rebatismo | Profissão de Fé
        </S.EntriesAndMoveOutSubtitle>
        <p className="year">(2015-2018)</p>
        <div className="container">
          <div className="linha-rosa"></div>
          <p className="number">6.953</p>
        </div>
        <p className="year">(2019-2022)</p>
        <div className="container">
          <div className="linha-vermelha"></div>
          <p className="number">4.407</p>
        </div>
        <br />
        <p className="year">2019</p>
        <div className="container">
          <div className="linha-vermelha"></div>
          <p className="number">1.439</p>
        </div>
        <p className="year">2020</p>
        <div className="container">
          <div className="linha-verde"></div>
          <p className="number">849</p>
        </div>
        <p className="year">2021</p>
        <div className="container">
          <div className="linha-amarela"></div>
          <p className="number">1.215</p>
        </div>
        <p className="year">2022</p>
        <div className="container">
          <div className="linha-azul"></div>
          <p className="number">904</p>
        </div>
        <p className="desc">*Dados até set. 2022</p>

        <br />
        <br />

        <S.EntriesAndMoveOutTitle>Saídas</S.EntriesAndMoveOutTitle>
        <S.EntriesAndMoveOutSubtitle>
          Remoção por disciplina
        </S.EntriesAndMoveOutSubtitle>
        <p className="year">(2015-2018)</p>
        <div className="container">
          <div className="linha-rosa"></div>
          <p className="number">5.341</p>
        </div>
        <p className="year">(2019-2022)</p>
        <div className="container">
          <div className="linha-vermelha"></div>
          <p className="number">3.288</p>
        </div>
        <br />
        <p className="year">2019</p>
        <div className="container">
          <div className="linha-vermelha"></div>
          <p className="number">1.012</p>
        </div>
        <p className="year">2020</p>
        <div className="container">
          <div className="linha-verde"></div>
          <p className="number">550</p>
        </div>
        <p className="year">2021</p>
        <div className="container">
          <div className="linha-amarela"></div>
          <p className="number">953</p>
        </div>
        <p className="year">2022</p>
        <div className="container">
          <div className="linha-azul"></div>
          <p className="number">773</p>
        </div>
        <p className="desc">*Dados até set. 2022</p>
        <br />
        <br />
      </S.EntriesAndMoveOutContainer>
      <S.FormerReligionContainer>
        <br />
        <S.FormerReligionTitle>
          Religião Anterior{" "}
          <span className="sub">
            (<span className="green">2015-2018</span>)
          </span>
        </S.FormerReligionTitle>
        <br />
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Adventista do Sétimo Dia</p>
            <div className="green-box">26%</div>
          </div>
          <div className="boxes">
            <p className="desc">Católica</p>
            <div className="green-box">36%</div>
          </div>
        </S.ContainerRegiao>
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Assembleia de Deus</p>
            <div className="green-box">12%</div>
          </div>
          <div className="boxes">
            <p className="desc">Evangélica</p>
            <div className="green-box">14%</div>
          </div>
        </S.ContainerRegiao>
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Luterana</p>
            <div className="green-box">12%</div>
          </div>
        </S.ContainerRegiao>
        <S.TotalRegiao>
          <div className="box">
            <p>
              Total: <span>17.475</span>
            </p>
          </div>
          <div className="box-value">
            <div className="green-value">100,0%</div>
          </div>
        </S.TotalRegiao>
        <br />
        <S.FormerReligionTitle>
          Religião Anterior{" "}
          <span className="sub">
            (<span className="green">2019-2022</span>)
          </span>
        </S.FormerReligionTitle>
        <br />
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Adventista do Sétimo Dia</p>
            <div className="green-box">28%</div>
          </div>
          <div className="boxes">
            <p className="desc">Católica</p>
            <div className="green-box">26%</div>
          </div>
        </S.ContainerRegiao>
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Assembleia de Deus</p>
            <div className="green-box">14%</div>
          </div>
          <div className="boxes">
            <p className="desc">Evangélica</p>
            <div className="green-box">18%</div>
          </div>
        </S.ContainerRegiao>
        <S.ContainerRegiao>
          <div className="boxes">
            <p className="desc">Luterana</p>
            <div className="green-box">14%</div>
          </div>
        </S.ContainerRegiao>
        <S.TotalRegiao>
          <div className="box">
            <p>
              Total: <span>16.735</span>
            </p>
          </div>
          <div className="box-value">
            <div className="green-value">100,0%</div>
          </div>
        </S.TotalRegiao>
        <br />
        <S.FormerReligionTitle>Modo de Conversão</S.FormerReligionTitle>
        <S.FormerReligionSubTitle>(2015-2018)</S.FormerReligionSubTitle>
        <br />
        <img src={conversao1} alt="" />
        <br />
        <br />
        <br />
        <S.FormerReligionSubTitle>(2019-2022)</S.FormerReligionSubTitle>
        <br />
        <img src={conversao2} alt="" />
        <br />
        <br />
        <br />
        <S.FormerReligionTitle>Congregações</S.FormerReligionTitle>
        <br />
        <br />
        <img src={congregations} alt="Congregações" />
        <br />
        <br />
        <S.FormerReligionTitle>Secretárias Nota 1000</S.FormerReligionTitle>
        <br />
        <br />
        <img
          src={note1000Secretaries}
          style={{ width: "214px", height: "337px" }}
          alt="Secretárias nota 1000 "
        />
        <br />
        <br />
        <S.FormerReligionTitle>Igrejas Organizadas</S.FormerReligionTitle>
        <br />
        <br />
        <img src={igrejasOrganizadas} alt="" />
        <br />
        <br />
        <S.Badge color="#F1403F">
          <span>2019</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
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
        </S.LabelContainer>
        <br />
        <S.Badge color="#19CD77">
          <span>2020</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Moinhos de Vento</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CAMAR</span>
          </div>
        </S.LabelContainer>
        <br />
        <S.Badge color="#E8D71E">
          <span>2021</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
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
        </S.LabelContainer>
        <br />
        <S.Badge color="#63B4EF">
          <span>2022</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Dr. Romário</span>
          </div>
        </S.LabelContainer>
        <br />
        <br />
        <br />
        <S.FormerReligionTitle>Grupos Abertos</S.FormerReligionTitle>
        <br />
        <br />
        <img src={gruposAbertos} alt="" />
        <br />
        <br />
        <S.Badge color="#F1403F">
          <span>2019</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
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
        </S.LabelContainer>
        <br />
        <S.Badge color="#19CD77">
          <span>2020</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
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
        </S.LabelContainer>
        <br />
        <S.Badge color="#E8D71E">
          <span>2021</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
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
        </S.LabelContainer>
        <br />
        <S.Badge color="#63B4EF">
          <span>2022</span>
        </S.Badge>
        <br />
        <S.LabelContainer>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro São Ciro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Arroio Grande</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Jardim do Cedro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Paverama</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Westfália</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Camobi II</span>
          </div>
        </S.LabelContainer>
        <br />
        <br />
      </S.FormerReligionContainer>
      <S.HighlightsContainer>
        <br />
        <br />
        <img
          src={arrowDownGreen}
          className="arrowDownGreen"
          alt="Seta para baixo verde"
        />
        <br />
        <S.HighlightsTitle>Destaques</S.HighlightsTitle>
        <br />
        <br />
        <br />
        <S.HighlightsText className="green">
          Serviço Voluntário Adventista (SVA)
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          O Serviço Voluntário Adventista é um programa oficial da Igreja
          Adventista do Sétimo Dia com o propósito de disponibilizar,
          organizadamente, oportunidades de ações voluntárias para adventistas
          jovens e adultos, estudantes e profissionais, em regiões necessitadas
          da Divisão Sul-Americana e do mundo, auxiliando a igreja na
          proclamação do evangelho.
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          No último quadriênio, mais de <span className="green">60</span>{" "}
          membros leigos das igrejas da ACSR participaram de missões para a
          Amazônia, para levar a esperança de Jesus a pessoas e lugares onde o
          Evangelho ainda não chegou e auxiliar nas construções e restaurações
          de instituições escolares e igrejas adventistas.
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          O projeto Um Ano em Missão (OYiM) abrange jovens de várias localidades
          do Brasil que investem um ano de suas vidas para levar Jesus às
          pessoas. Nos últimos quatro anos, mais de 40 jovens participaram do
          projeto neste campo. Em 2022, 14 jovens estão concentrados em plantar
          e revitalizar igrejas em vários bairros de Porto Alegre. Este projeto
          é coordenado pelo Ministério Jovem.
        </S.HighlightsText>
        <br />
        <br />
        <S.HighlightsText className="green">
          Centro de Vida Saudável (CVS)
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          Na ACSR existem dois Centros de Influência: Porto Alegre e Caxias do
          Sul. Cada um deles abrange três grandes objetivos:{" "}
          <span className="green">
            envolver mais voluntários adventistas com seus dons para abençoar as
            pessoas; aumentar o número de pessoas que migram dos cursos para as
            classes bíblicas que ali ocorrem; e servir de modelo para que
            igrejas e escolas do campo se tornem centros de influência em suas
            comunidades.
          </span>
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          Os centros contam com <span className="green">75 voluntários</span>{" "}
          adventistas que atenderam nos últimos quatro anos, cerca de{" "}
          <span className="green">1.600 pessoas</span> com os cursos oferecidos.
          Doze pessoas já foram batizadas pela influência direta desses centros
          e, atualmente, 50 estão estudando a Bíblia.
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          Os pastores David Barcelos e Diego Zanotto são os responsáveis por
          liderar as ações e os projetos desses centros, respectivamente, em
          Porto Alegre e Caxias do Sul. Nesses locais, são oferecidos os
          seguintes cursos:
        </S.HighlightsText>
        <br />
        <S.HighlightsText className="green">
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
          • Consultoria jurídica;
          <br />
          • Terapia familiar;
          <br />
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
          • Inglês;
          <br />
          • Português para estrangeiros;
          <br />
          • Palestras mensais sobre qualidade de vida com profissionais de
          saúde;
          <br />
          • Treino funcional.
          <br />
        </S.HighlightsText>
        <br />
        <S.HighlightsText>
          Atualmente, existe no CVS de Caxias do Sul um grupo organizado, que já
          levou ao batismo cerca de 55 pessoas:
        </S.HighlightsText>
        <br />
        <img src={batismos001} alt="" />
        <br />
        <S.HighlightsText>
          O CVS de Porto Alegre participou no plantio de duas novas
          congregações, Higienópolis e Jardim Lindoia. Neste momento, há uma
          congregação no próprio CVS, que levou ao batismo 58 pessoas:
        </S.HighlightsText>
        <br />
        <img src={batismos002} alt="" />
        <br />
        <br />
        <br />
        <br />
      </S.HighlightsContainer>
      <S.ThanksContainer>
        <S.ThanksTitle>Fotos</S.ThanksTitle>
        <br />
        <br />
        <img src={foto1} alt="" />
        <br />
        <img src={foto2} alt="" />
        <br />
        <img src={foto3} alt="" />
        <br />
        <img src={foto4} alt="" />
        <br />
        <img src={foto5} alt="" />
        <br />
      </S.ThanksContainer>
      <S.ThanksContainer>
        <img src={yellowArrowDown} className="arrowDown" alt="Seta para baixo amarela" />
        <br />
        <S.ThanksTitle>Agradecimentos</S.ThanksTitle>
        <br />
        <br />
        <S.ThanksText>
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
        </S.ThanksText>
      </S.ThanksContainer>
    </S.Container>
  );
};

export default RogerioGurniak;

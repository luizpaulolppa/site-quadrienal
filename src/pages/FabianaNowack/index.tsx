import React, { useEffect, useState } from "react";

import fabiana from "../../assets/fabiana-nowack/fabiana-without-back.jpg";
import escolas1 from "../../assets/fabiana-nowack/escolas1.png";
import escolas2 from "../../assets/fabiana-nowack/escolas2.png";
import escolas3 from "../../assets/fabiana-nowack/escolas3.png";
import escolas4 from "../../assets/fabiana-nowack/escolas4.png";
import escolas5 from "../../assets/fabiana-nowack/escolas5.png";
import escolas6 from "../../assets/fabiana-nowack/escolas6.png";
import escolas7 from "../../assets/fabiana-nowack/escolas7.png";
import escolas8 from "../../assets/fabiana-nowack/escolas8.png";
import escolas9 from "../../assets/fabiana-nowack/escolas9.png";
import escolas10 from "../../assets/fabiana-nowack/escolas10.png";
import etapas1 from "../../assets/fabiana-nowack/etapas1.png";
import etapas2 from "../../assets/fabiana-nowack/etapas2.png";
import etapas3 from "../../assets/fabiana-nowack/etapas3.png";
import etapas4 from "../../assets/fabiana-nowack/etapas4.png";
import etapas5 from "../../assets/fabiana-nowack/etapas5.png";
import etapas6 from "../../assets/fabiana-nowack/etapas6.png";
import etapas7 from "../../assets/fabiana-nowack/etapas7.png";
import etapas8 from "../../assets/fabiana-nowack/etapas8.png";
import etapas9 from "../../assets/fabiana-nowack/etapas9.png";
import etapas10 from "../../assets/fabiana-nowack/etapas10.png";
import alunos1 from "../../assets/fabiana-nowack/alunos1.png";
import alunos2 from "../../assets/fabiana-nowack/alunos2.png";
import alunos3 from "../../assets/fabiana-nowack/alunos3.png";
import alunos4 from "../../assets/fabiana-nowack/alunos4.png";
import alunos5 from "../../assets/fabiana-nowack/alunos5.png";
import gratuidade1 from "../../assets/fabiana-nowack/gratuidade1.png";
import gratuidade2 from "../../assets/fabiana-nowack/gratuidade2.png";
import gratuidade3 from "../../assets/fabiana-nowack/gratuidade3.png";
import em1 from "../../assets/fabiana-nowack/em1.png";
import em2 from "../../assets/fabiana-nowack/em2.png";
import em3 from "../../assets/fabiana-nowack/em3.png";
import em4 from "../../assets/fabiana-nowack/em4.png";
import inadimplencia from "../../assets/fabiana-nowack/inadimplencia.png";
import year2020 from "../../assets/fabiana-nowack/year2020.png";
import year2021 from "../../assets/fabiana-nowack/year2021.png";
import year2022 from "../../assets/fabiana-nowack/year2022.png";
import img13 from "../../assets/fabiana-nowack/image13.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import arrowDown from "../../assets/arrow-down-white.svg";
import igreja1 from "../../assets/fabiana-nowack/igreja1.png";
import igreja2 from "../../assets/fabiana-nowack/igreja2.png";
import classe1 from "../../assets/fabiana-nowack/classe1.png";
import classe2 from "../../assets/fabiana-nowack/classe2.png";
import classe3 from "../../assets/fabiana-nowack/classe3.png";
import batismos1 from "../../assets/fabiana-nowack/batismos1.png";
import batismos2 from "../../assets/fabiana-nowack/batismos2.png";
import batismos3 from "../../assets/fabiana-nowack/batismos3.png";
import jornada1 from "../../assets/fabiana-nowack/jornada1.png";
import jornada2 from "../../assets/fabiana-nowack/jornada2.png";
import encontro1 from "../../assets/fabiana-nowack/encontro1.png";
import missao1 from "../../assets/fabiana-nowack/missao1.png";
import missao2 from "../../assets/fabiana-nowack/missao2.png";
import missao3 from "../../assets/fabiana-nowack/missao3.png";
import missao4 from "../../assets/fabiana-nowack/missao4.png";
import missao5 from "../../assets/fabiana-nowack/missao5.png";
import missao6 from "../../assets/fabiana-nowack/missao6.png";
import prof1 from "../../assets/fabiana-nowack/prof1.png";
import prof2 from "../../assets/fabiana-nowack/prof2.png";

import Menu from "../../components/Menu";
import MenuBlack from "../../components/MenuBlack";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import FadeIn from "../../components/FadeIn";

const FabianaNowack: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

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
          <img src={fabiana} alt="Fabiana" />
        </S.ImageContainer>
        <S.Name>
          Fabiana
          <br /> Nowack
        </S.Name>
        <S.Role>Educação Adventista</S.Role>
        <S.TextContainer>
          <S.TextCapitularContainer>
            <S.FirstLetter>“A</S.FirstLetter>
            <S.Text>
              quele que coopera com o propósito divino, transmitindo aos jovens
              o conhecimento de
            </S.Text>
          </S.TextCapitularContainer>
          <S.Text>
            Deus, e moldando-lhes o caráter em harmonia com o Seu, realiza uma
            elevada e nobre obra. Suscitando o desejo de atingir o ideal de
            Deus, apresenta uma educação que é tão alta como o Céu e tão extensa
            como o Universo; uma educação que não se poderá completar nesta
            vida, mas que se prolongará na vindoura; educação que garante ao
            estudante eficiente sua promoção da escola preparatória da Terra
            para o curso superior – a escola celestial”
            <br />
            <br />
            (Ellen G. White, Educação, p. 9).
          </S.Text>
          <br />
          <br />
        </S.TextContainer>
      </S.TitleContainer>
      <div id="start_fade1"></div>
      <S.GreenBox>
        <br />
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Conheça a estrutura educacional das 9 unidades escolares que compõe a
          Educação Adventista na ACSR:
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
        <br />
      </S.GreenBox>
      <S.ContainerData>
        <div>
          <S.ThanksTitle>
            Escolas/
            <br />
            Colégios
          </S.ThanksTitle>
          <br />
          <br />
          <img src={escolas1} alt="" />
          <br />
          <br />
          <img src={escolas2} alt="" />
          <br />
          <br />
          <img src={escolas3} alt="" />
          <br />
          <br />
          <img src={escolas4} alt="" />
          <br />
          <br />
          <img src={escolas5} alt="" />
          <br />
          <br />
          <img src={escolas6} alt="" />
          <br />
          <br />
          <img src={escolas7} alt="" />
          <br />
          <br />
          <img src={escolas8} alt="" />
          <br />
          <br />
          <img src={escolas9} alt="" />
          <br />
          <br />
          <img src={escolas10} alt="" />
          <br />
          <br />
          <br />
          <S.ThanksText>
            O Departamento de Educação da ACSR foi muito abençoado neste último
            quadriênio, pois mantivemos a missão e filosofia da Educação
            Adventista em todas as unidades escolares. Acompanhe alguns índices
            de pessoal e dados administrativos:
            <br />
            <br />
          </S.ThanksText>
          <S.HighlightsSubTitle>Total de alunos</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={alunos1} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Alunos novos</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={alunos2} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Alunos adventistas</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={alunos3} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Fidelização (%)</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={alunos4} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Total de professores</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={alunos5} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Resultado Financeiro</S.HighlightsSubTitle>
          <br />
          <br />
          <br />
          <strong>2018</strong>
          <S.BoxFinancialPink>R$3.207.969,44</S.BoxFinancialPink>
          <br />
          <strong>2019</strong>
          <S.BoxFinancialRed>R$9.061.367,22</S.BoxFinancialRed>
          <br />
          <strong>2020</strong>
          <S.BoxFinancialGreen>R$3.530.028,06</S.BoxFinancialGreen>
          <br />
          <strong>2021</strong>
          <S.BoxFinancialYellow>R$ 9.090.123,76</S.BoxFinancialYellow>
          <br />
          <strong>2022</strong>
          <S.BoxFinancialBlue>R$ 5.382.722,00*</S.BoxFinancialBlue>
          <br />
          <br />
          <S.HighlightsSubTitle>Resultado Financeiro</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={inadimplencia} alt="" />
          <span>*Dados de setembro/22</span>
          <br />
          <br />
          <strong>2018</strong>
          <S.BoxFinancialPink>R$ 3.883.069,73</S.BoxFinancialPink>
          <br />
          <strong>2019</strong>
          <S.BoxFinancialRed>R$ 16.185.460,75*</S.BoxFinancialRed>
          <span className="small-text">
            *Houve subvenção da USB para a ACSR
          </span>
          <br />
          <strong>2020</strong>
          <S.BoxFinancialGreen>R$ 5.503.554,50</S.BoxFinancialGreen>
          <br />
          <strong>2021</strong>
          <S.BoxFinancialYellow>R$ 9.288.868,44</S.BoxFinancialYellow>
          <br />
          <strong>2021</strong>
          <S.BoxFinancialBlue>R$ 15.442.245,42*</S.BoxFinancialBlue>
          <span className="small-text">*Valor agosto/22</span>
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>Filantropia</S.ThanksTitle>
          <br />
          <S.ThanksText>
            É uma concessão governamental à Instituição Adventista de Educação.
            A filantropia é regida por legislação nacional própria que visa a
            concessão de bolsas de estudos para famílias que se enquadram no
            perfil sócio-econômico de acordo com os critérios são apresentados
            no Edital de Filantropia, divulgado em cada escola, no período de
            matrículas escolares. Atendemos o seguinte, nos últimos anos:
          </S.ThanksText>
          <br />
          <br />
          <br />
          <S.HighlightsSubTitle>Gratuidade de 50%</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={gratuidade1} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Gratuidade de 100%</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={gratuidade2} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Total ACSR</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={gratuidade3} alt="" />
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>
            Implantação do Ensino Médio em Cachoeirinha
          </S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>
            Em 2019, houve a autorização do Conselho Estadual de Educação para
            que ofertássemos o Ensino Médio em Cachoeirinha. Abaixo temos os
            dados:
          </S.ThanksText>
          <br />
          <br />
          <S.HighlightsSubTitle>Alunos 1º ano EM</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={em1} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Alunos 2º ano EM</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={em2} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Alunos 3º ano EM</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={em3} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>Total de Alunos no EM</S.HighlightsSubTitle>
          <br />
          <br />
          <img src={em4} alt="" />
          <br />
          <br />
          <S.ThanksText>
            Em 2021, houve a formatura a 1º turma do Ensino Médio do Colégio
            Adventista de Cachoeirinha.
          </S.ThanksText>
          <br />
          <br />
          <img src={img13} alt="" />
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>Nova Escola Adventista em Canoas</S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>O cronograma histórico foi assim:</S.ThanksText>
          <br />
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>Dezembro de 2018 -</strong> Alvará de Construção da Escola
              Adventista de Canoas concedido pela prefeitura.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>Janeiro de 2019 -</strong> Início das obras da futura
              Escola Adventista de Canoas.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>11 de dezembro de 2019 -</strong> Autorização de
              funcionamento da Escola Adventista de Canoas para Educação
              Infantil e Ensino Fundamental pelo Conselho Estadual de Educação.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>13 de dezembro de 2019 -</strong> Primeira matrícula
              realizada na Escola Adventista de Canoas.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>28 de janeiro de 2020 -</strong> Inauguração da Escola,
              numa cerimônia com autoridades denominacionais, municipais e
              estaduais presentes, além dos funcionários, novos professores,
              pais e alunos.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              Neste dia, também comemoramos o alcance de meta de alunos para
              2020.
            </p>
          </S.Bullet>
          <br />
          <S.Bullet>
            <S.YellowTopic />
            <p>
              <strong>10 de fevereiro de 2020 -</strong> Primeiro dia letivo, do
              primeiro ano letivo da Escola Adventista de Canoas
            </p>
          </S.Bullet>
          <br />
          <S.ThanksText>Acompanhe o desenvolvimento da escola:</S.ThanksText>
          <br />
          <br />
          <div>
            <S.YearTitleGreen>2020</S.YearTitleGreen>
            <br />
            <strong>Etapas Oferecidas:</strong>
            <br />
            <S.ThanksText>
              Educação Infantil, 1º ao 5º ano do Ensino Fundamental e
              Contraturno
            </S.ThanksText>
            <br />
            <br />
            <img src={year2020} alt="" />
            <br />
            <br />
          </div>
          <div>
            <S.YearTitleYellow>2021</S.YearTitleYellow>
            <br />
            <strong>Etapas Oferecidas:</strong>
            <br />
            <S.ThanksText>
              Educação Infantil, 1º ao 8º ano do Ensino Fundamental e
              Contraturno
            </S.ThanksText>
            <br />
            <br />
            <img src={year2021} alt="" />
            <br />
            <br />
          </div>
          <div>
            <S.YearTitleBlue>2022</S.YearTitleBlue>
            <br />
            <strong>Etapas Oferecidas:</strong>
            <br />
            <S.ThanksText>
              Educação Infantil, Ensino Fundamental completo e Contraturno
            </S.ThanksText>
            <br />
            <br />
            <img src={year2022} alt="" />
            <br />
            <span className="small-text">*Dados até setembro/22</span>
            <br />
            <br />
          </div>
          <img src={etapas1} alt="" />
          <img src={etapas2} alt="" />
          <br />
          <br />
          <S.ThanksTitle>
            Novo terreno para a Escola de Caxias do Sul
          </S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>
            Em 2021, houve a aquisição do terreno da esquina ao lado da Escola
            Adventista de Caxias do Sul, com 4 lotes. A nova área conta com
            1.953,85 metros quadrados. Estamos em fase de elaboração do projeto
            arquitetônico dos novos prédios para a ampliação da escola.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas3} alt="" />
          <br />
          <br />
        </div>
        <div>
          <S.ThanksTitle>
            Ampliações de estruturas físicas das unidades escolares da ACSR:
          </S.ThanksTitle>
          <br />
          <br />
          <S.HighlightsSubTitle>
            Na Escola Adventista de Cachoeira do Sul
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            Construção de 2 novas salas de aula, 170,60 m² de construção, para
            abrigar novas turmas.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas4} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>
            No Colégio Adventista de Cachoeirinha
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            Em 2019, com área de 566,58 m², compreendendo 06 salas de aulas,
            laboratório de Química, Física e Biologia, parque indoor e novas
            salas de atendimento. Reforma para nova Biblioteca e nova sala de
            professores com área de 265,62 m². Em 2021/2022, mais um prédio de 4
            andares, para aumento de pátio de alunos, 04 salas de aulas, salas
            de recursos, sala de reforço, ginásio coberto, quadras esportivas
            descobertas, sala maker, depósitos banheiros e afins num total de
            1871,82 m² de área construída.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas5} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>
            No Colégio Adventista de Santa Maria
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            Edificou-se o prédio principal da escola, com 3 andares, que conta
            com: 08 salas administrativas, 9 salas de aula, biblioteca, sala dos
            professores, laboratório de Química, Física e Biologia compreendendo
            uma área ampliada de 2665,61 m².
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas6} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>
            Na Escola Adventista de Canoas
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            Houve a ampliação de salas de aula (6 novas salas de aula), da área
            administrativa, sala de professores, biblioteca escolar, em um total
            de área construída de 1000,15 m².
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas7} alt="" />
          <br />
          <br />
          <S.HighlightsSubTitle>
            No Colégio Adventista Marechal Rondon
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            Fachada e nova entrada de alunos pela Rua Emetério, sala dos
            professores, sala pastoral, sala de recursos, sala maker, sala de
            aula, sala de TI, num total de 301,88 m² de reforma e construção.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas8} alt="" />
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>Certificação Escola Saudável 2021</S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>
            Avaliação institucional educacional da União Sul Brasileira, para as
            escolas adventistas e departamentos de educação e seus índices nas
            diversas áreas (espiritual, pedagógico, administrativo). Na ocasião
            recebemos 2 (dois) troféus. A ACSR obteve o 2º lugar na USB – em
            pontuação geral (campo mais saudável) e nas áreas de destaque:
            crescimento em matrículas, crescimento real da receita, captação de
            alunos, batismos e crescimento em alunos adventistas.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas9} alt="" />
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>Certificação Escola Saudável 2022</S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>
            A mesma avaliação educacional da União Sul Brasileira rendeu muitos
            troféus de crescimento para cada escola da ACSR, com destaques na
            área pedagógica, financeira, espiritual e de gestão escolar.
          </S.ThanksText>
          <br />
          <br />
          <img src={etapas10} alt="" />
        </div>
        <div>
          <br />
          <br />
          <S.ThanksTitle>Área Espiritual</S.ThanksTitle>
          <br />
          <br />
          <S.ThanksText>
            A missão de Educar Salvando é nossa razão de existir. Abaixo, vamos
            ressaltar algumas iniciativas que foram destaque deste quadriênio:
          </S.ThanksText>
          <br />
          <br />
          <S.HighlightsSubTitle>
            Minha Escola, Minha Igreja (MEMI)
          </S.HighlightsSubTitle>
          <br />
          <br />
          <S.ThanksText>
            São igrejas e grupos que estão sendo plantados nas escolas, para
            atender alunos e pais de alunos! Hoje, temos em pleno funcionamento:
          </S.ThanksText>
          <br />
          <br />
          <div>
            <S.YearTitleRed>Igreja do CAMAR</S.YearTitleRed>
            <br />
            <ul className="itens-igreja">
              <li>Desde agosto 2020</li>
              <li>42 membros</li>
              <li>Culto dos alunos nas sextas de noite</li>
              <li>10 batismos em 2021</li>
            </ul>
            <br />
            <img src={igreja1} alt="" />
          </div>
          <br />
          <br />
          <div>
            <S.YearTitleRed>Igreja do CASM</S.YearTitleRed>
            <br />
            <ul className="itens-igreja">
              <li>Desde abril 2021</li>
              <li>28 membros e 8 interessados</li>
              <li>4 batismos desde que iniciou</li>
            </ul>
            <br />
            <img src={igreja2} alt="" />
          </div>
          <div>
            <br />
            <br />
            <S.HighlightsSubTitle>Classes Bíblicas</S.HighlightsSubTitle>
            <br />
            <br />
            <S.ThanksText>
              Nas unidades escolares mantemos várias classes bíblicas com
              alunos, pais, servidores durante o ano letivo. Confira abaixo
              quanto trabalhamos, além das aulas de Ensino Religioso, ensinando
              a Bíblia...
            </S.ThanksText>
            <br />
            <br />
            <img src={classe1} alt="" />
            <img src={classe2} alt="" />
            <img src={classe3} alt="" />
          </div>
          <div>
            <br />
            <br />
            <S.HighlightsSubTitle>Batismos</S.HighlightsSubTitle>
            <br />
            <br />
            <S.ThanksText>
              Que momento de festa! Nas escolas, eles se repetem sempre com
              alunos, pais, servidores e amigos que decidem amar e servir ao
              Senhor para sempre. Tivemos a oportunidade de celebrar os batismos
              que estão na planilha abaixo...
            </S.ThanksText>
            <br />
            <br />
            <img src={batismos1} alt="" />
            <span className="small-text">*Dados até setembro/22</span>
            <br />
            <br />
            <img src={batismos2} alt="" />
            <img src={batismos3} alt="" />
          </div>
          <div>
            <br />
            <br />
            <S.HighlightsSubTitle>
              Jornada Espiritual de Fidelidade – Contagem Regressiva
            </S.HighlightsSubTitle>
            <br />
            <br />
            <S.ThanksText>
              É realizada a cada ano, com todos os servidores das unidades
              escolares com o objetivo de resguardar a comunhão e relacionamento
              de todos os funcionários e professores.
            </S.ThanksText>
            <br />
            <br />
            <img src={jornada1} alt="" />
            <img src={jornada2} alt="" />
          </div>
          <div>
            <br />
            <br />
            <S.HighlightsSubTitle>
              Together - Encontro de Alunos Adventistas
            </S.HighlightsSubTitle>
            <br />
            <br />
            <S.ThanksText>
              Para fortalecer a identidade adventista de nossos alunos,
              realizamos em 2022, no IACS, com presença de 90 alunos
              adventistas! Os temas abordados foram: família, história de vida,
              comunhão, sexualidade, relacionamento, missão.
            </S.ThanksText>
            <br />
            <br />
            <img src={encontro1} alt="" />
          </div>
          <div>
            <br />
            <br />
            <S.HighlightsSubTitle>Missão Calebe School</S.HighlightsSubTitle>
            <br />
            <br />
            <S.ThanksText>
              As escolas da ACSR estão sempre engajadas nas ações missionárias
              da IASD... Por isso, planejamos e realizamos o Calebe School a
              cada ano. Acompanhe os locais que atuamos e fotos...
            </S.ThanksText>
            <br />
            <br />
            <strong>Jóia, RS - 2019</strong>
            <img src={missao1} alt="" />
            <br />
            <br />
            <strong>Salvador do Sul, RS - 2020</strong>
            <img src={missao2} alt="" />
            <br />
            <br />
            <strong>Santo Augusto, RS - 2022</strong>
            <img src={missao3} alt="" />
            <br />
            <br />
            <img src={missao4} alt="" />
            <br />
            <br />
            <img src={missao5} alt="" />
            <br />
            <br />
            <img src={missao6} alt="" />
          </div>
          <div>
            <div>
              <br />
              <br />
              <S.HighlightsSubTitle>Visitas de Professores a alunos e pais</S.HighlightsSubTitle>
              <br />
              <br />
              <S.ThanksText>
                É uma forma de acolhimento e testemunho que os professores da
                ACSR realizam ao visitar seus alunos em casa. É com alegria que
                mantemos uma média de 1500 visitas a alunos, por ano, mesmo
                durante os anos da Pandemia (visitas de portão ou por zoom).
              </S.ThanksText>
              <br />
              <br />
              <img src={prof1} alt="" />
              <img src={prof2} alt="" />
            </div>
          </div>
        </div>
      </S.ContainerData>
      <S.ThanksContainer>
        <br />
        <br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <S.ThanksTitle>Agradecimentos</S.ThanksTitle>
        <br />
        <br />
        <S.ThanksText>
          Meus agradecimentos pelos quatro anos de trabalho no Departamento de
          Educação da ACSR são em primeiro lugar para Deus, pelas maravilhosas
          bênçãos recebidas, pela saúde e motivação renovada a cada dia para
          cumprir a missão. Pela honra de servi-Lo através da Educação
          Adventista.
          <br />
          <br />
          Agradeço ao meu esposo, Abraão Vicente pelo apoio constante, suas
          orações, as palavras de encorajamento, bem como à toda minha família!
          <br />
          <br />
          Também ressalto meu imenso sentimento de gratidão pelos companheiros
          que servem nas Escolas Adventistas da ACSR: diretores, pastores,
          tesoureiros, coordenadoras pedagógicas, orientadoras educacionais,
          secretários escolares, professores e demais funcionários, bem como aos
          colegas do Departamento de Educação! Que privilégio poder trabalharmos
          juntos para fortalecer a missão da Educação Adventista aqui em nosso
          território.
          <br />
          <br />
          Agradeço aos colegas departamentais da ACSR, aos administradores da
          ACSR pastor Marcos Júnior, pastor Rogério Gurniak e Everson Braga.
          Também ao pastor Elton Alves e Laudecir Mazzo que também administraram
          o campo em anos anteriores. Finalmente, minha gratidão à administração
          da USB com toda sua equipe do departamento de Educação, especialmente
          ao pastor Rubens Silva.
          <br />
          <br />
        </S.ThanksText>
      </S.ThanksContainer>
    </S.Container>
  );
};

export default FabianaNowack;

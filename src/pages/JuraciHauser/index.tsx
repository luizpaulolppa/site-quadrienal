import React, { useEffect, useState } from "react";

import juraci from "../../assets/juraci-hauser/juraci-without-back.jpg";

import arrowDownGreen from "../../assets/seta-para-baixo.png";
import books from "../../assets/juraci-hauser/books.png";
import books2 from "../../assets/juraci-hauser/books2.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import vendas1 from "../../assets/juraci-hauser/vendas1.png";
import vendas2 from "../../assets/juraci-hauser/vendas2.png";
import vendas3 from "../../assets/juraci-hauser/vendas3.png";
import vendas4 from "../../assets/juraci-hauser/vendas4.png";
import vendas5 from "../../assets/juraci-hauser/vendas5.png";
import alem1 from "../../assets/juraci-hauser/alem1.png";
import alem2 from "../../assets/juraci-hauser/alem2.png";
import saude1 from "../../assets/juraci-hauser/saude1.png";
import saude2 from "../../assets/juraci-hauser/saude2.png";

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
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
  HighlightsSubTitle,
  RedBox,
  HighlightsSubTitle2,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const JuraciHauser: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function addFideIn(element: string, startFade: string) {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#" + element) as Element;
    const elTrigger = document.querySelector("#" + startFade) as Element;
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
  }

  useEffect(() => {
    addFideIn("fade1", "start_fade1");
    addFideIn("fade2", "start_fade2");
    addFideIn("fade3", "start_fade3");
    addFideIn("fade4", "start_fade4");
    addFideIn("fade5", "start_fade5");
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
          <img src={juraci} alt="Juraci" />
        </ImageContainer>
        <Name>
          Pr.
          <br />
          Juraci
          <br />
          Hauser
        </Name>
        <Role>Publicações, Espírito de Profecia, Saúde</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“D</FirstLetter>
            <Text>
              eus fará em breve grandes coisas por nós, se nos achegarmos
              humildes
            </Text>
          </TextCapitularContainer>
          <Text>
            e crentes a Seus pés. Mais de mil serão convertidos em um dia, a
            maioria dos quais atribuirá suas primeiras convicções à leitura de
            nossas publicações”.
            <br />
            <br />
            (Ellen G. White, The Review and Herald, 10/11/1885)
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsText>
          Mesmo diante de um desafio nunca ocorrido na história da IASD, os
          colportores não pararam, mas continuaram avançando. Alguns chegaram a
          afirmar que, com a pandemia, a colportagem chegaria ao fim. Ao
          contrário disso, ela avançou, inovou, superou obstáculos e oposições,
          e em muitos momentos, diante da forte resistência pela própria igreja,
          a colportagem serviu de exemplo e motivação para que obreiros e
          líderes continuassem avançando.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Colportores</HighlightsTitle>
        <br />
        <HighlightsText>
          A Associação Central Sul Rio-Grandense conta com 265 colportores que
          se encontram entre os grupos de Permanentes e Estudantes, Ocasionais e
          Jubilados.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle className="bold">
          Colportores Permanentes:
        </HighlightsTitle>
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <div id="start_fade2"></div>
      <div id="start_fade3"></div>
      <GreenBox>
        <br />
        <br />
        <span className="sub-title">
          Núcleo de Formação de Colportores (NFC)
        </span>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          O NFC é onde começa a preparação para candidatos iniciantes que querem
          seguir a vocação e carreira como colportores evangelistas.
        </FadeIn>
        <br />
        <br />
        <span className="sub-title">
          Núcleo de Excelência em Colportagem (NEC)
        </span>
        <br />
        <br />
        <FadeIn id="fade2" duration="3s" delay="0.2s">
          Após formados no NFC, os colportores permanentes passam para o NEC,
          onde seguem a carreira como Aspirantes, Licenciados e Credenciados.
        </FadeIn>
        <br />
        <br />
        <span className="sub-title">Missionário de Publicações</span>
        <br />
        <br />
        <FadeIn id="fade3" duration="3s" delay="0.2s">
          São colportores ocasionais, que vendem ou distribuem literaturas, mas
          não seguem carreira efetiva.
        </FadeIn>
        <br />
        <br />
        <span className="special-text">
          Total de Colportores Permanentes e Missionários de Publicações:
        </span>
        <br />
        <br />
        <span className="number">30</span>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <br />
        <br />
        <HighlightsTitle>Colportores Estudantes:</HighlightsTitle>
        <br />
        <HighlightsSubTitle className="bold">
          Projeto Sonhando Alto
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Campanha de Colportagem no período letivo para estudantes que terminam o 
          Ensino Médio e querem ir para uma Instituição de Ensino Adventista
          fazer uma graduação, ou outro curso.
        </HighlightsText>
        <br />
        <HighlightsSubTitle className="bold">
          Equipe de Férias
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Nas férias de inverno e verão, os estudantes de Instituições de Ensino
          Adventista e não Adventistas vêm de vários lugares do Rio Grande do
          Sul, Brasil e mundo para colportar na equipe FURAKÃO da ACSR. Equipe
          com 28 anos de existência e formadora de muitos obreiros para IASD.
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          Total de estudantes Sonhando Alto e Estudantes de Férias:
        </HighlightsText>
        <span className="number">235</span>
        <br />
        <br />
        <HighlightsSubTitle2>
          Vendas ao público, de livros e revistas da colportagem:
        </HighlightsSubTitle2>
        <br />
        <br />
        <img src={vendas1} alt="" />
        <br />
        <br />
        <HighlightsSubTitle2>
          Campanha de Sonhando Alto - Vendas ao público
        </HighlightsSubTitle2>
        <br />
        <br />
        <img src={vendas2} alt="" />
        <br />
        <br />
        <HighlightsSubTitle2>
          Campanha de Férias de Estudantes - Vendas ao público
        </HighlightsSubTitle2>
        <br />
        <br />
        <img src={vendas3} alt="" />
        <br />
        <br />
        <HighlightsSubTitle2>
          Colportores Permanentes (efetivos) - Vendas ao público
        </HighlightsSubTitle2>
        <br />
        <br />
        <img src={vendas4} alt="" />
        <br />
        <br />
        <HighlightsSubTitle2>
          Nº de assinantes das revistas:
        </HighlightsSubTitle2>
        <HighlightsText>
          Vida e Saúde, Nosso <br /> Amiguinho, Nosso <br /> Amiguinho Júnior
        </HighlightsText>
        <br />
        <p className="small-text">
          *95% desses assinantes não são Adventistas do Sétimo Dia
        </p>
        <br />
        <img src={vendas5} alt="" />
        <br />
        <br />
        <HighlightsTitle>
          Além das literaturas espalhadas, principal obra do Colportor
          Evangelista, os colportores da ACSR foram além:
        </HighlightsTitle>
        <br />
        <HighlightsText>
          • Apoio no plantio de duas igrejas;
          <br />
          • 44 batismos;
          <br />
          • Distribuição de 50 mil folhetos sobre a volta de Jesus;
          <br />
          • Mais de 600 mil pessoas visitadas;
          <br />
          • Mais de 500 estudos bíblicos levantados.
          <br />
        </HighlightsText>
        <br />
        <img src={alem1} alt="" />
        <br />
        <img src={alem2} alt="" />
        <br />
        <br />
        <HighlightsTitle>Livros Missionários</HighlightsTitle>
        <br />
        <HighlightsText>
          O campo da ACSR distribuiu quase um milhão de livros missionários:
        </HighlightsText>
        <br />
        <img src={books} alt="Total de livros missionários" />
        <br />
        <br />
        <HighlightsText>
          O escritório da ACSR participou ativamente na distribuição dos livros
          missionários nos Impactos que aconteceram no quadriênio:
        </HighlightsText>
        <br />
        <img src={books2} alt="Total de livros" />
        <br />
        <br />
      </HighlightsContainer>
      <div id="start_fade4"></div>
      <div id="start_fade5"></div>
      <RedBox>
        <br />
        <br />
        <span className="title">
          <FadeIn id="fade4" duration="3s" delay="0.2s">
            Ministério da Saúde
          </FadeIn>
        </span>
        <br />
        <br />
        <FadeIn id="fade5" duration="3s" delay="0.2s">
          “A reforma de saúde está tão intimamente relacionada com a terceira
          mensagem angélica, como o braço ao corpo; mas o braço não pode tomar o
          lugar do corpo. A proclamação da mensagem do terceiro anjo, dos
          mandamentos de Deus e do testemunho de Jesus, é o tema principal de
          nossa obra”.
        </FadeIn>
        <br />
        <br />
        <span className="footer">
          (Ellen G. White, O Colportor Evangelista, p. 138).
        </span>
        <br />
        <br />
        <br />
        <br />
      </RedBox>
      <HighlightsContainer>
        <br />
        <br />
        <img
          src={arrowDownGreen}
          style={{ height: "48px", width: "48px" }}
          alt="Seta para baixo verde"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>Escolas de Culinária</HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Atualmente, dez escolas de culinária funcionam de maneira contínua,
          durante o ano.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>Curso Ceifo Saúde</HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Mais de 180 líderes de saúde já participaram do Curso Ceifo Saúde, que
          a partir da pandemia foi transmitido virtualmente a baixo custo para
          toda igreja, alcançando centenas de pessoas.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>
            Capacitações e Clubes de Saúde
          </HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Foram realizados treinamentos e capacitações focados nos líderes de
          saúde com propósito do plantio de Clubes de Saúde em todo território
          da ACSR, nove ao todo. Os Clubes oferecem cursos de culinária,
          atividades físicas, palestras, ações sociais, centenas de Feiras de
          Saúde, entre muitas outras atividades baseadas nos oito remédios
          naturais de Deus.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>
            Grupo Mais Vida e Saúde e lives da IASD Jardim Lindóia
          </HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          O grupo Mais Vida e Saúde, antigo Medida Certa, foi o pioneiro em
          formar um Clube de Saúde. Participaram ativamente no plantio da IASD
          Jardim Lindóia, sendo responsáveis por 33 pessoas levadas ao batismo.
          Com a pandemia, o grupo se superou e realizou de forma híbrida
          (virtual e presencialmente) todas as atividades da igreja e do Clube.
          Através de uma programação semanal, milhares de pessoas são alcançadas
          pela transmissão.
        </HighlightsText>
        <br />
        <img src={saude1} alt="" />
        <br />
        <img src={saude2} alt="" />
      </HighlightsContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Registro nossa gratidão a Deus em primeiro lugar. A Ele toda honra e
          toda glória por todas as vitórias alcançadas.
          <br />
          <br />
          Gratidão também à família que sempre me apoia. À minha esposa Marlene
          M. dos Reis Hauser, que a cada momento esteve disposta avançar junto,
          que em muitas situações determinantes deu suporte para família e foi
          uma coluna de sustentação para o avanço dos Ministérios de Publicações
          e Saúde.
          <br />
          <br />
          Aos meus filhos, Sofia M. Hauser e Felipe M. Hauser que a todo momento
          demonstraram muito amor, mesmo com a distância causada pelas
          responsabilidades para o desenvolvimento da missão.
          <br />
          <br />
          À Administração da ACSR pela coragem e determinação em avançar diante
          de grandes desafios e oposições, e auxiliar sem temor os Ministérios
          de Publicações e Saúde num momento tão crítico da história da igreja e
          da humanidade. Também nossa gratidão ao trabalho da doutora Estela
          Maris Silveira Gomes e sua equipe, o Grupo Mais Vida e Saúde, por
          tamanha dedicação e empenho na coordenação do Ministério da Saúde.
          <br />
          <br />
          Por último, nossa gratidão e respeito aos valentes colportores da
          ACSR, que não recuaram diante dos desafios impostos pela pandemia.
          Esses homens e mulheres, moças e rapazes literalmente foram a campo, e
          nosso Senhor honrou o ministério desses Mensageiros da Esperança. A
          Deus todo louvor e gratidão!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JuraciHauser;

import React, { useEffect, useState } from "react";

import juraci from "../../assets/juraci-hauser/juraci-without-back.png";

import arrowDownGreen from "../../assets/seta-para-baixo.png";
import books from "../../assets/juraci-hauser/books.png";
import books2 from "../../assets/juraci-hauser/books2.png";
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
        <Role>Publica????es, Esp??rito de Profecia, Sa??de</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???D</FirstLetter>
            <Text>
              eus far?? em breve grandes coisas por n??s, se nos achegarmos
              humildes
            </Text>
          </TextCapitularContainer>
          <Text>
            e crentes a Seus p??s. Mais de mil ser??o convertidos em um dia, a
            maioria dos quais atribuir?? suas primeiras convic????es ?? leitura de
            nossas publica????es???
            <br />
            <br />
            (Ellen G. White, The Review and Herald, 10/11/1885).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsText>
          Mesmo diante de um desafio nunca ocorrido na hist??ria da IASD, os
          colportores n??o pararam, mas continuaram avan??ando. Alguns chegaram a
          afirmar que, com a pandemia, a colportagem chegaria ao fim. Ao
          contr??rio disso, ela avan??ou, inovou, superou obst??culos e oposi????es,
          e em muitos momentos, diante da forte resist??ncia pela pr??pria igreja,
          a colportagem serviu de exemplo e motiva????o para que obreiros e
          l??deres continuassem avan??ando.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Colportores</HighlightsTitle>
        <br />
        <HighlightsText>
          A Associa????o Central Sul Rio-Grandense conta com 265 colportores que
          se encontram entre os grupos de Permanentes e Estudantes, Ocasionais e
          Jubilados.
        </HighlightsText>
        <br />
        <br />
        <HighlightsSubTitle className="bold">
          Colportores Permanentes:
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          A Associa????o Central Sul Rio-Grandense conta com 265 colportores que
          se encontram entre os grupos de Permanentes e Estudantes, Ocasionais e
          Jubilados.
        </HighlightsText>
        <br />
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <div id="start_fade2"></div>
      <div id="start_fade3"></div>
      <GreenBox>
        <br />
        <br />
        <span className="sub-title">
          N??cleo de Forma????o de Colportores (NFC)
        </span>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          O NFC ?? onde come??a a prepara????o para candidatos iniciantes que querem
          seguir a voca????o e carreira como colportores evangelistas.
        </FadeIn>
        <br />
        <br />
        <span className="sub-title">
          N??cleo de Excel??ncia em Colportagem (NEC)
        </span>
        <br />
        <br />
        <FadeIn id="fade2" duration="3s" delay="0.2s">
          Ap??s formados no NFC, os colportores permanentes passam para o NEC,
          onde seguem a carreira como Aspirantes, Licenciados e Credenciados.
        </FadeIn>
        <br />
        <br />
        <span className="sub-title">Mission??rio de Publica????es</span>
        <br />
        <br />
        <FadeIn id="fade3" duration="3s" delay="0.2s">
          S??o colportores ocasionais, que vendem ou distribuem literaturas, mas
          n??o seguem carreira efetiva.
        </FadeIn>
        <br />
        <br />
        <span className="special-text">
          Total de Colportores Permanentes e Mission??rios de Publica????es:
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
          Campanha de Colportagem no per??odo letivo para estudantes que terminam
          Ensino M??dio e querem ir para uma Institui????o de Ensino Adventista
          fazer uma gradua????o, ou outro curso.
        </HighlightsText>
        <br />
        <HighlightsSubTitle className="bold">
          Equipe de F??rias
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Nas f??rias de inverno e ver??o, os estudantes de Institui????es de Ensino
          Adventista e n??o Adventistas v??m de v??rios lugares do Rio Grande do
          Sul, Brasil e mundo para colportar na equipe FURAK??O da ACSR. Equipe
          com 28 anos de exist??ncia e formadora de muitos obreiros para IASD.
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          Total de estudantes Sonhando Alto e Estudantes de F??rias:
        </HighlightsText>
        <span className="number">235</span>
        <br />
        <br />
        <HighlightsSubTitle2>
          Gr??fico de vendas gerais de colportores permanentes e colportores
          estudantes:
        </HighlightsSubTitle2>
        <br />
        <br />
        <HighlightsTitle>
          Al??m das literaturas espalhadas, principal obra do Colportor
          Evangelista, os colportores da ACSR foram al??m:
        </HighlightsTitle>
        <br />
        <HighlightsText>
          ??? Apoio no plantio de duas igrejas;
          <br />
          ??? 44 batismos;
          <br />
          ??? Distribui????o de 50 mil folhetos sobre a volta de Jesus;
          <br />
          ??? Mais de 600 mil pessoas visitadas;
          <br />
          ??? Mais de 500 estudos b??blicos levantados.
          <br />
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Livros Mission??rios</HighlightsTitle>
        <br />
        <HighlightsText>
          O campo da ACSR distribuiu quase um milh??o de livros mission??rios:
        </HighlightsText>
        <br />
        <img src={books} alt="Total de livros mission??rios" />
        <br />
        <br />
        <HighlightsText>
          O escrit??rio da ACSR participou ativamente na distribui????o dos livros
          mission??rios nos Impactos que aconteceram no quadri??nio:
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
            Minist??rio da Sa??de
          </FadeIn>
        </span>
        <br />
        <br />
        <FadeIn id="fade5" duration="3s" delay="0.2s">
          ???A reforma de sa??de est?? t??o intimamente relacionada com a terceira
          mensagem ang??lica, como o bra??o ao corpo; mas o bra??o n??o pode tomar o
          lugar do corpo. A proclama????o da mensagem do terceiro anjo, dos
          mandamentos de Deus e do testemunho de Jesus, ?? o tema principal de
          nossa obra???
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
          <HighlightsSubTitle>Escolas de Culin??ria</HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Atualmente, dez escolas de culin??ria funcionam de maneira cont??nua,
          durante o ano.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>Curso Ceifo Sa??de</HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Mais de 180 l??deres de sa??de j?? participaram do Curso Ceifo Sa??de, que
          a partir da pandemia foi transmitido virtualmente a baixo custo para
          toda igreja, alcan??ando centenas de pessoas.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>
            Capacita????es e Clubes de Sa??de
          </HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          Foram realizados treinamentos e capacita????es focados nos l??deres de
          sa??de com prop??sito do plantio de Clubes de Sa??de em todo territ??rio
          da ACSR, nove ao todo. Os Clubes oferecem cursos de culin??ria,
          atividades f??sicas, palestras, a????es sociais, centenas de Feiras de
          Sa??de, entre muitas outras atividades baseadas nos oito rem??dios
          naturais de Deus.
        </HighlightsText>
        <br />
        <br />
        <div className="label-green">
          <HighlightsSubTitle>
            Grupo Mais Vida e Sa??de e lives da IASD Jardim Lind??ia
          </HighlightsSubTitle>
        </div>
        <br />
        <HighlightsText>
          O grupo Mais Vida e Sa??de, antigo Medida Certa, foi o pioneiro em
          formar um Clube de Sa??de. Participaram ativamente no plantio da IASD
          Jardim Lind??ia, sendo respons??veis por 33 pessoas levadas ao batismo.
          Com a pandemia, o grupo se superou e realizou de forma h??brida
          (virtual e presencialmente) todas as atividades da igreja e do Clube.
          Atrav??s de uma programa????o semanal, milhares de pessoas s??o alcan??adas
          pela transmiss??o.
        </HighlightsText>
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
          Registro nossa gratid??o a Deus em primeiro lugar. A Ele toda honra e
          toda gl??ria por todas as vit??rias alcan??adas.
          <br />
          <br />
          Gratid??o tamb??m ?? fam??lia que sempre me apoia. ?? minha esposa Marlene
          M. dos Reis Hauser, que a cada momento esteve disposta avan??ar junto,
          que em muitas situa????es determinantes deu suporte para fam??lia e foi
          uma coluna de sustenta????o para o avan??o dos Minist??rios de Publica????es
          e Sa??de.
          <br />
          <br />
          Aos meus filhos, Sofia M. Hauser e Felipe M. Hauser que a todo momento
          demonstraram muito amor, mesmo com a dist??ncia causada pelas
          responsabilidades para o desenvolvimento da miss??o.
          <br />
          <br />
          ?? Administra????o da ACSR pela coragem e determina????o em avan??ar diante
          de grandes desafios e oposi????es, e auxiliar sem temor os Minist??rios
          de Publica????es e Sa??de num momento t??o cr??tico da hist??ria da igreja e
          da humanidade. Tamb??m nossa gratid??o ao trabalho da doutora Estela
          Maris Silveira Gomes e sua equipe, o Grupo Mais Vida e Sa??de, por
          tamanha dedica????o e empenho na coordena????o do Minist??rio da Sa??de.
          <br />
          <br />
          Por ??ltimo, nossa gratid??o e respeito aos valentes colportores da
          ACSR, que n??o recuaram diante dos desafios impostos pela pandemia.
          Esses homens e mulheres, mo??as e rapazes literalmente foram a campo, e
          Nosso Senhor honrou o minist??rio desses Mensageiros da Esperan??a. A
          Deus todo louvor e gratid??o!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JuraciHauser;

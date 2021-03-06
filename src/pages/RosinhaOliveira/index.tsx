import React, { useEffect, useState } from "react";

import rosinhaOliveira from "../../assets/rosinha-oliveira/rosinha-without-back.png";
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
  GreenBox,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const RosinhaOliveira: React.FC = () => {
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
          <img src={rosinhaOliveira} alt="Rosinha Oliveira" />
        </ImageContainer>
        <Name>
          Rosinha
          <br /> Oliveira
        </Name>
        <Role>
          Minist??rio da Mulher, ??rea Feminina da Associa????o Ministerial
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???N</FirstLetter>
            <Text>
              os v??rios ramos da obra mission??ria, a mulher modesta e
              inteligente pode usar
            </Text>
          </TextCapitularContainer>
          <Text>
            suas faculdades com mais alto proveito. [???] Quem pode representar a
            verdade e o exemplo de Cristo melhor que as mulheres crist??s que
            est??o em sua vida praticando a verdade????
            <br />
            <br />
            (Ellen G. White, Evangelismo, p. 369).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsText>
          Deus tem um prop??sito para cada mulher na miss??o de salvar. O
          Minist??rio da Mulher existe para apoiar, encorajar, inspirar e motivar
          mulheres a alcan??arem o pleno potencial em Cristo, capacitando-as a
          aprofundar sua vida espiritual, colocar sua f?? em a????o ao empregar
          seus dons no servi??o crist??o, tornando-se parte significativa na
          prega????o do evangelho.
          <br />
          <br />
          Nosso desejo ?? que cada mulher possa se envolver em algumas das
          frentes mission??rias da Igreja, atrav??s dos projetos desenvolvidos, na
          Roda do Discipulado, sempre visando levar pessoas a Jesus.
          <br />
          <br />
          <h1>
            No territ??rio da ACSR hoje, temos um n??mero expressivo de <br />
            <span className="red">9.796 mulheres</span>
            <br />
            que representam <br /> <span className="green">58%</span> do total
            de membros da Associa????o, que poder??o fazer parte da miss??o de
            salvar.
          </h1>
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Ao longo do ??ltimo quadri??nio, mesmo diante dos desafios, pela gra??a e
          atua????o de Deus, muitas vit??rias foram alcan??adas no departamento do
          Minist??rio da Mulher.
        </FadeIn>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          <h2>Minist??rio da Recep????o com envolvimento das Novas Gera????es;</h2>
          <br />
          <ul>
            <li>
              Quartas de Poder ??? Realizadas nas ??ltimas quartas de cada m??s;
            </li>
            <li>Grupos de Intercess??o;</li>
            <li>Treinamento de l??deres Distritais;</li>
            <li>Projeto MEL, envolvendo as Novas Gera????es e Novos na F??;</li>
            <li>Dia Mundial de Ora????o;</li>
            <li>Ch??s Evangel??sticos;</li>
            <li>Quebrando o Sil??ncio na Igreja e nas escolas;</li>
            <li>
              Congresso EU VOU ??? Cada participante, l??der ou coordenadora,
              trazendo uma pessoa que est?? discipulando;
            </li>
            <li>
              Outubro Rosa: Palestras e atividades f??sicas, corrida virtual ou
              solid??ria ???Supera????o???;
            </li>
            <li>
              Semana de Evangelismo de Colheita, com pregadores jovens e
              adolescentes, realizada no m??s de novembro.
            </li>
          </ul>
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsText>
          <h2>??rea Feminina da Associa????o Ministerial (AFAM)</h2>
          <br />
          <h2>
            ???O Senhor gostaria que o Ministro e Esposa tivessem unidos no
            trabalho. [???] Ela faz o trabalho de seu esposo mais completo???
            <br />
            <br />
            <span className="italic-block">
              (Ellen G. White, 6 Manuscripts Releases, 43).
            </span>
          </h2>
          <br />
          <br />
          A AFAM atua como apoio ?? Associa????o Ministerial orientando as esposas
          dos pastores e dos anci??os na edifica????o de suas respectivas fam??lias,
          igrejas e comunidades.
          <br />
          <br />
          Neste quadri??nio, a AFAM teve o privil??gio de contribuir com o
          desenvolvimento da esposa do pastor em diferentes ??reas da vida, como:
          relacionamento, educa????o de filhos, sa??de f??sica, emocional e
          espiritual. Sempre trazendo ??nfases similares ??s Compet??ncias
          Ministeriais com o prop??sito de oferecer as melhores ferramentas para
          o desenvolvimento de um minist??rio pleno, completo, equilibrado e
          permanente.
          <br />
          <br />
          De maneira individual, o departamento promoveu a harmonia e felicidade
          do casal pastoral, desenvolvendo eventos e atividades que proporcionam
          a condu????o deste objetivo, bem como o incentivo no envolvimento das
          frentes mission??rias da igreja, com a miss??o de salvar.
          <br />
          <br />
          Conc??lios com a fam??lia pastoral;
          <ul className="ml16">
            <li>Retiros e conc??lios somente com as esposas de pastores;</li>
            <li>Visitas ministeriais on-line e presencial;</li>
            <li>Encontros regionais ??? PGPEP;</li>
            <li>Conc??lio de esposas de anci??os;</li>
            <li>
              Treinamento com esposas de pastores aspirantes ao minist??rio;
            </li>
            <li>Vig??lias com as esposas de pastores departamentais;</li>
            <li>Grupos on-line de intercess??o.</li>
          </ul>
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <img src={greenArrowDown} alt="Seta para baixo verde" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Minha gratid??o a Deus pelo cuidado e carinho por cada uma de n??s, e
          por me permitir esta oportunidade de liderar este grupo t??o especial,
          que tem dedicado sua vida em favor do Minist??rio.
          <br />
          <br />
          ?? minha fam??lia que sempre me apoiou, especialmente meu marido, Marcos
          J??nior, companheiro em todos os momentos. Por sempre acreditar que eu
          poderia desenvolver o meu melhor na miss??o de salvar, estando ao meu
          lado, me dando suporte e apoio.
          <br />
          <br />
          Aos meus filhos, Richard, Mikaela e Willian que sempre me apoiaram
          nesta nobre tarefa.
          <br />
          <br />
          Aos pastores e suas esposas a imensa dedica????o e envolvimento nas
          atividades propostas.
          <br />
          <br />
          ?? USB, em especial ?? professora Denise Lopes, por sua lideran??a, apoio
          e inspira????o em cada a????o realizada pela AFAM e Minist??rio da Mulher.
          Que carinhosamente, com suas brilhantes ideias, nos motiva a buscar
          sempre o melhor.
          <br />
          <br />
          Agrade??o ?? Administra????o da ACSR o apoio e a considera????o por este
          grupo especial al??m do envolvimento direto e indireto nos projetos
          realizados pelos departamentos da AFAM e Minist??rio da Mulher.
          <br />
          <br />
          Meu reconhecimento e gratid??o ??s minhas colegas de minist??rio, as
          quais tenho profunda considera????o e estima. Voc??s desenvolveram um
          excelente trabalho durante este quadri??nio ao lado do pastor.
          <br />
          <br />
          ?? secret??ria Naylane Weidle o tempo dedicado com perfei????o no
          atendimento e organiza????o dos materiais. ??s coordenadoras e l??deres do
          Minist??rio da Mulher, a tremenda dedica????o e esfor??o na realiza????o dos
          projetos.
          <br />
          <br />
          Nosso reconhecimento ?? Claudete Cardoso que atuou nos anos de 2019 e
          2020 no departamento do Minist??rio da Mulher, contribuindo para que os
          resultados acontecessem.
          <br />
          <br />A Deus toda a honra e toda a gl??ria!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default RosinhaOliveira;

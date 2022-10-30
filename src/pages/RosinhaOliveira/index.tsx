import React, { useEffect, useState } from "react";

import rosinhaOliveira from "../../assets/rosinha-oliveira/rosinha-without-back.jpg";
import greenArrowDown from "../../assets/seta-para-baixo.png";
import arrowDownRed from "../../assets/seta-para-baixo-red.png";

import image1 from "../../assets/rosinha-oliveira/image1.png";
import image2 from "../../assets/rosinha-oliveira/image2.png";
import image3 from "../../assets/rosinha-oliveira/image3.png";
import image4 from "../../assets/rosinha-oliveira/image4.png";
import image5 from "../../assets/rosinha-oliveira/image5.png";
import image6 from "../../assets/rosinha-oliveira/image6.png";
import image7 from "../../assets/rosinha-oliveira/image7.png";
import image8 from "../../assets/rosinha-oliveira/image8.png";
import image9 from "../../assets/rosinha-oliveira/image9.png";
import image10 from "../../assets/rosinha-oliveira/image10.png";

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
  HighlightsTitle,
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
          Ministério da Mulher, Ministério da Recepção e Área Feminina da Associação Ministerial
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“N</FirstLetter>
            <Text>
              os vários ramos da obra missionária, a mulher modesta e
              inteligente pode usar
            </Text>
          </TextCapitularContainer>
          <Text>
            suas faculdades com mais alto proveito. […] Quem pode representar a
            verdade e o exemplo de Cristo melhor que as mulheres cristãs que
            estão em sua vida praticando a verdade?”
            <br />
            <br />
            (Ellen G. White, Evangelismo, p. 369).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsText>
          Deus tem um propósito para cada mulher na missão de salvar. O
          Ministério da Mulher existe para apoiar, encorajar, inspirar e motivar
          mulheres a alcançarem o pleno potencial em Cristo, capacitando-as a
          aprofundar sua vida espiritual, colocar sua fé em ação ao empregar
          seus dons no serviço cristão, tornando-se parte significativa na
          pregação do evangelho.
          <br />
          <br />
          Nosso desejo é que cada mulher possa se envolver em algumas das
          frentes missionárias da Igreja, através dos projetos desenvolvidos, na
          Roda do Discipulado, sempre visando levar pessoas a Jesus.
          <br />
          <br />
          <h1>
            No território da ACSR hoje, temos um número expressivo de <br />
            <span className="red">9.756 mulheres</span>
            <br />
            que representam <br /> <span className="green">58,3%</span> do total
            de membros da Associação, que poderão fazer parte da missão de
            salvar.
          </h1>
          <br />
          Nossa responsabilidade é motivá-las usando seus dons nesta tarefa tão nobre.
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Ao longo do último quadriênio, mesmo diante dos desafios, pela graça e
          atuação de Deus, muitas vitórias foram alcançadas no departamento do
          Ministério da Mulher.
        </FadeIn>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <br />
        <br />
        <img
          src={arrowDownRed}
          style={{ height: "48px", width: "48px" }}
          alt="Seta para baixo vermelha"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          •	Ministério da Recepção com envolvimento das Novas Gerações;
          <br />
          •	Quartas de Poder — Realizadas nas últimas quartas de cada mês;
          <br />
          •	Grupos de Intercessão;
          <br />
          •	Treinamento de líderes Distritais;
          <br />
          •	Projeto MEL, envolvendo as Novas Gerações e Novos na Fé;
          <br />
          •	Dia Mundial de Oração;
          <br />
          •	Chás Evangelísticos;
          <br />
          •	Quebrando o Silêncio na Igreja 
          e nas escolas;
          <br />
          •	Congresso EU VOU — Cada participante, líder ou coordenadora, trazendo uma pessoa que está discipulando;
          <br />
          •	Outubro Rosa: Palestras e atividades físicas, corrida virtual ou solidária  ‘Superação’;
          <br />
          •	Semana de Evangelismo de Colheita, com pregadores jovens e adolescentes, realizada no mês de novembro.
        </HighlightsText>
      </HighlightsContainer>
      <GreenBox>
          Área Feminina da Associação Ministerial (AFAM)
          <br />
          “O Senhor gostaria que o Ministro e Esposa tivessem unidos no
          trabalho. […] Ela faz o trabalho de seu esposo mais completo”
          <br />
          <br />
          <span className="italic-block">
            (Ellen G. White, 6 Manuscripts Releases, 43).
          </span>
      </GreenBox>
      <HighlightsText>
        <br />
        <br />
        A AFAM atua como apoio à Associação Ministerial orientando as esposas
        dos pastores e dos anciãos na edificação de suas respectivas famílias,
        igrejas e comunidades.
        <br />
        <br />
        Neste quadriênio, a AFAM teve o privilégio de contribuir com o
        desenvolvimento da esposa do pastor em diferentes áreas da vida, como:
        relacionamento, educação de filhos, saúde física, emocional e
        espiritual. Sempre trazendo ênfases similares às Competências
        Ministeriais com o propósito de oferecer as melhores ferramentas para
        o desenvolvimento de um ministério pleno, completo, equilibrado e
        permanente.
        <br />
        <br />
        De maneira individual, o departamento promoveu a harmonia e felicidade
        do casal pastoral, desenvolvendo eventos e atividades que proporcionam
        a condução deste objetivo, bem como o incentivo no envolvimento das
        frentes missionárias da igreja, com a missão de salvar.
        <br />
        <br />
      </HighlightsText>

        <HighlightsTitle>Ministério do MM</HighlightsTitle>
        <br />
        <br />
        <img src={image1} alt="" />
        <br />
        <img src={image2} alt="" />
        <br />
        <img src={image3} alt="" />
        <br />
        <br />
        <img src={image4} alt="" />
        <br />
        <br />
        <HighlightsTitle>Departamento da AFAM</HighlightsTitle>
        <br />
        <br />
        <img src={image5} alt="" />
        <br />

      <HighlightsContainer>
        <br />
        <br />
        <img
          src={arrowDownRed}
          style={{ height: "48px", width: "48px" }}
          alt="Seta para baixo vermelha"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          •Concílios com a família pastoral;
          <br />
          •	Retiros e concílios somente com as esposas de pastores;
          <br />
          •	Visitas ministeriais on-line e presencial;
          <br />
          •	Encontros regionais — PGPEP;
          <br />
          •	Concílio de esposas de anciãos;
          <br />
          •	Treinamento com esposas de pastores aspirantes ao ministério;
          <br />
          •	Vigílias com as esposas de pastores departamentais;
          <br />
          •	Grupos on-line de intercessão.
        </HighlightsText>
      </HighlightsContainer>

      <img src={image6} alt="" />
      <br />
      <img src={image7} alt="" />
      <br />
      <img src={image8} alt="" />
      <br />
      <img src={image9} alt="" />
      <br />
      <img src={image10} alt="" />
      <br />

      <ThanksContainer>
        <img src={greenArrowDown} alt="Seta para baixo verde" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Minha gratidão a Deus pelo cuidado e carinho por cada uma de nós, e
          por me permitir esta oportunidade de liderar este grupo tão especial,
          que tem dedicado sua vida em favor do Ministério.
          <br />
          <br />
          À minha família que sempre me apoiou, especialmente meu marido, Marcos
          Júnior, companheiro em todos os momentos. Por sempre acreditar que eu
          poderia desenvolver o meu melhor na missão de salvar, estando ao meu
          lado, me dando suporte e apoio.
          <br />
          <br />
          Aos meus filhos, Richard, Mikaela e Willian que sempre me apoiaram
          nesta nobre tarefa.
          <br />
          <br />
          Aos pastores e suas esposas a imensa dedicação e envolvimento nas
          atividades propostas.
          <br />
          <br />
          À USB, em especial à professora Denise Lopes, por sua liderança, apoio
          e inspiração em cada ação realizada pela AFAM e Ministério da Mulher.
          Que carinhosamente, com suas brilhantes ideias, nos motiva a buscar
          sempre o melhor.
          <br />
          <br />
          Agradeço à Administração da ACSR o apoio e a consideração por este
          grupo especial além do envolvimento direto e indireto nos projetos
          realizados pelos departamentos da AFAM e Ministério da Mulher.
          <br />
          <br />
          Meu reconhecimento e gratidão às minhas colegas de ministério, as
          quais tenho profunda consideração e estima. Vocês desenvolveram um
          excelente trabalho durante este quadriênio ao lado do pastor.
          <br />
          <br />
          À secretária Naylane Weidle o tempo dedicado com perfeição no
          atendimento e organização dos materiais. Às coordenadoras e líderes do
          Ministério da Mulher, a tremenda dedicação e esforço na realização dos
          projetos.
          <br />
          <br />
          Nosso reconhecimento à Claudete Cardoso que atuou nos anos de 2019 e
          2020 no departamento do Ministério da Mulher, contribuindo para que os
          resultados acontecessem.
          <br />
          <br />A Deus toda a honra e toda a glória!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default RosinhaOliveira;

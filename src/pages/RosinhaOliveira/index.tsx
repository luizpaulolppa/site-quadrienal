import React, { useEffect, useState } from "react";

import rosinhaOliveira from "../../assets/rosinha-oliveira/rosinha-without-back.png";
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
  GreenBox,
  DestaquesLayout,
  BoxDescription,
  BoxTitle,
  GreenNumbersText,
} from "./styles";

const RosinhaOliveira: React.FC = () => {
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
          <img src={rosinhaOliveira} alt="Rosinha Oliveira" />
        </ImageContainer>
        <Name>
          Rosinha
          <br /> Oliveira
        </Name>
        <Role>
          Ministério da Mulher, Área Feminina da Associação Ministerial
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
            <span className="red">9.796 mulheres</span>
            <br />
            que representam <br /> <span className="green">58%</span> do total
            de membros da Associação, que poderão fazer parte da missão de
            salvar.
          </h1>
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <GreenBox>
        <br />
        <br />
        Ao longo do último quadriênio, mesmo diante dos desafios, pela graça e
        atuação de Deus, muitas vitórias foram alcançadas no departamento do
        Ministério da Mulher.
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          <h2>Ministério da Recepção com envolvimento das Novas Gerações;</h2>
          <br />
          <ul>
            <li>
              Quartas de Poder — Realizadas nas últimas quartas de cada mês;
            </li>
            <li>Grupos de Intercessão;</li>
            <li>Treinamento de líderes Distritais;</li>
            <li>Projeto MEL, envolvendo as Novas Gerações e Novos na Fé;</li>
            <li>Dia Mundial de Oração;</li>
            <li>Chás Evangelísticos;</li>
            <li>Quebrando o Silêncio na Igreja e nas escolas;</li>
            <li>
              Congresso EU VOU — Cada participante, líder ou coordenadora,
              trazendo uma pessoa que está discipulando;
            </li>
            <li>
              Outubro Rosa: Palestras e atividades físicas, corrida virtual ou
              solidária ‘Superação’;
            </li>
            <li>
              Semana de Evangelismo de Colheita, com pregadores jovens e
              adolescentes, realizada no mês de novembro.
            </li>
          </ul>
        </HighlightsText>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsText>
          <h2>Área Feminina da Associação Ministerial (AFAM)</h2>
          <br />
          <h2>
            “O Senhor gostaria que o Ministro e Esposa tivessem unidos no
            trabalho. […] Ela faz o trabalho de seu esposo mais completo”
            <br />
            <br />
            <span className="italic-block">
              (Ellen G. White, 6 Manuscripts Releases, 43).
            </span>
          </h2>
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
          Concílios com a família pastoral;
          <ul className="ml16">
            <li>Retiros e concílios somente com as esposas de pastores;</li>
            <li>Visitas ministeriais on-line e presencial;</li>
            <li>Encontros regionais — PGPEP;</li>
            <li>Concílio de esposas de anciãos;</li>
            <li>
              Treinamento com esposas de pastores aspirantes ao ministério;
            </li>
            <li>Vigílias com as esposas de pastores departamentais;</li>
            <li>Grupos on-line de intercessão.</li>
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

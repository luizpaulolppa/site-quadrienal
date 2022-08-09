import React, { useEffect, useState } from "react";

import douglasSilva from "../../assets/douglas-silva/douglas-silva.png";
import arrowDownRed from "../../assets/seta-para-baixo-red.png";
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
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
  BackgroundImage,
} from "./styles";

const DouglasSilva: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <img src={douglasSilva} alt="Douglas Silva" />
        </ImageContainer>
        <Name>
          Pr.
          <br /> Douglas
          <br /> Silva
        </Name>
        <Role>
          Ministério Jovem, Ministério da Música, Comunicação e Universitários
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“D</FirstLetter>
            <Text>
              eus fará uma grande obra pelos jovens se, mediante o auxílio do
              Espírito Santo
            </Text>
          </TextCapitularContainer>
          <Text>
            receberem Sua Palavra no coração e lhe obedecerem na vida. Está
            constantemente procurando atraí-los a Si, a Fonte de toda sabedoria,
            bondade, pureza e verdade. A mente que se ocupa com temas elevados é
            enobrecida”
            <br />
            <br />
            (Ellen G. White, Mensagens aos Jovens, p. 56).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br />
        <br />
        <img src={arrowDownRed} alt="Seta para baixo verde" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          O Ministério Jovem representa o trabalho de centenas de sociedades de
          jovens comprometidas com o Senhor Jesus Cristo. Na grande maioria das
          congregações da ACSR, os jovens se organizam para apoiar o ministério
          da igreja de Deus nesta terra. A energia, a força e a disposição da
          juventude são fatores cruciais para a saúde de uma igreja local.
        </HighlightsText>
        <br />
        <HighlightsText>
          Como a própria palavra de Deus diz: “Jovens, escrevi a vocês, porque
          são fortes, e a Palavra de Deus permanece em vocês, e vocês já
          venceram o Maligno.” I Jo 2:14. O objetivo claro nos ideais JA é
          salvar do pecado e guiar no serviço, e isso acontece quando os jovens
          fazem da missão do Senhor o seu estilo de vida. Através das várias
          ações deste departamento, visamos ter um exército de jovens que (1)
          vivam em comunhão com o Senhor, (2) transmitam o amor de Jesus através
          de ações solidárias e (3) estejam focados na missão de salvar. A
          tarefa principal não é encher as reuniões de jovens.
        </HighlightsText>
        <br />
        <HighlightsText>
          Nossa missão está centrada em lotar as cidades de novos discípulos de
          Cristo. Não se pode medir o sucesso do Ministério Jovem pela
          quantidade de pessoas que assistem aos eventos, mas pela quantidade de
          discípulos que saem para cumprir a missão. Com oração, trabalhamos em
          algumas frentes para alcançarmos o objetivo de discipular esta nova
          geração. Com a graça de Deus, já temos visto grandes mobilizações e
          resultados!
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Equipe de Líderes</HighlightsTitle>
        <br />
        <HighlightsText>
          Além do tradicional grupo de regionais e conselheiros nos últimos três
          anos, o departamento vem trabalhando na formação de uma equipe de
          distritais JA. Esses líderes trabalham dando um suporte imediato para
          os diretores de jovens de cada igreja, ao todo são cinco conselheiros,
          sete regionais e 38 distritais.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Save One</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          O treinamento para os líderes de jovens foi realizado a cada ano
          através de uma convenção que recebeu o nome de Save One. Nesse
          treinamento, os jovens receberam motivação, material e direcionamento
          para o cumprimento da missão, através de atividades práticas sobre
          Escola Sabatina Jovem, G148, Missão Calebe, estilização de sala etc.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Campori de Jovens</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          Dois grandes acampamentos foram realizados em Bento Gonçalves durante
          o quadriênio. A cidade tornou-se palco do movimento de jovens
          adventistas que impactaram a cidade com ações sociais, fortaleceram a
          missão e os ideais do MJA.
        </HighlightsText>
        <br />
        <HighlightsText>
          Em 2019, o Campori Legado reforçou a identidade do Jovem Adventista e
          contou com a presença de 1.100 jovens. Em 2022, o Campori Chamados
          revigorou o propósito de Deus na vida de 1.500 jovens.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Missão Calebe</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          Centenas de jovens calebes doaram parte das suas férias para Jesus em
          cada início de ano. Saindo do conforto da casa, alguns viajaram muitos
          quilômetros para o local da missão. Nesses locais, eles desenvolveram
          visitação nos lares, estudos bíblicos, semanas de evangelismo, além de
          atividades sociais para a comunidade como feiras de saúde e outras.
          Cremos que uma geração de missionários está surgindo através deste
          programa.
        </HighlightsText>
        <br />
        <HighlightsText>
          Jovens que participaram da Missão Calebe por ano:
          <ul className="remove-list-style">
            <li>2019 – 1.150 calebes</li>
            <li>2020 – 998 calebes</li>
            <li>2021 – 1.240 calebes</li>
            <li>2022 – 1.380 calebes</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Projeto OYiM</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          O projeto Um Ano em Missão nestes últimos quatro anos envolveu 50
          jovens em um trabalho de tempo integral para o Senhor no território da
          ACSR. Eles atuaram diretamente na evangelização em grandes centros
          urbanos e auxiliaram no plantio de igrejas, estruturação de Centros de
          Influência e ministração de estudos bíblicos. A ACSR presta todo o
          treinamento, motivação, preparo, subvenções e orientações para o
          trabalho destes jovens.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Universitários</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          Cada universitário como um embaixador no campus é o objetivo deste
          departamento. Para isso, a Agremiação Gaúcha dos Universitários
          Adventistas (AGUA) organiza simpósios nos quais são ministradas
          palestras que apresentam as respostas necessárias para conscientizar
          os universitários adventistas de sua missão. Além disso, os cultos de
          envio fortalecem os princípios e o propósito do Jovem Universitário no
          período da Faculdade.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Música</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          A música tem um papel singular no contexto da adoração. Cada igreja
          deve dedicar tempo, recursos e talentos para que este ministério seja
          cumprido de modo que honre o nome de Deus. Pensando em melhor atender
          a este departamento, o campo criou uma coordenação, realizou
          treinamentos e ofereceu por dois anos um Encontro de Músicos onde os
          aspectos técnicos e espirituais são trabalhados. O departamento
          promoveu os seguintes programas:
        </HighlightsText>
        <br />
        <HighlightsText>
          <ul className="ml16">
            <li>Capacitação do Ministério da Música;</li>
            <li>Capacitação de Sonoplastas;</li>
            <li>Encontro de Músicos no IACS;</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Comunicação</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          A Comunicação é, sem dúvidas, um dos ministérios mais dinâmicos e
          intensos da Igreja Adventista. Ele surge para somar e age como um elo
          entre os demais ministérios, reunindo todas as informações e
          disponibilizando-as harmoniosamente ao público interno e externo (que
          compreende adventistas e a sociedade em geral). Além disso, este
          ministério também auxilia os comunicadores das igrejas lá na ponta e
          promove o maior alcance da Rede Novo Tempo de Comunicação na região.
        </HighlightsText>
        <HighlightsText>
          Esta divulgação interna e externa acontece por uma equipe composta por
          um assessor de comunicação e um diretor de mídia. Eles produzem
          conteúdos disponibilizados em sites oficiais, redes sociais, materiais
          impressos, reportagens na TV Novo Tempo, testemunhos, inserções na
          imprensa local, entre outros.
        </HighlightsText>
        <HighlightsText>
          Já o trabalho dos comunicadores das igrejas é fortalecido por
          treinamentos, assessoramentos e materiais também promovidos por este
          núcleo. O alcance das antenas da TV Novo Tempo é gerenciado por uma
          equipe técnica da área administrativa do escritório da ACSR. Com esta
          dinâmica de atividades, temos visto um desenvolvimento muito
          expressivo da comunicação em nossa região.
        </HighlightsText>
        <HighlightsText>
          A inserção no mundo digital, o aperfeiçoamento do trabalho do
          comunicador e o aumento do alcance da mensagem de esperança nos
          mostram que estamos apontando para o caminho certo — a pregação da
          Palavra de Deus, até Jesus voltar. Veja mais detalhes sobre as
          atividades promovidas neste departamento nos últimos quatro anos.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Congregações identificadas</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          Logo NT: 70% das igrejas e grupos Logo Igreja: 98% das igrejas e
          grupos
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Produções diversas</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          Notícias para portal da ACSR;
          <ul className="ml16">
            <li>Conteúdo para redes sociais;</li>
            <li>Reportagens para TV Novo Tempo (Revista Novo Tempo);</li>
            <li>Reportagens para TV Novo Tempo (Anjos da Esperança);</li>
            <li>Transmissões ao vivo (através do Canal do YouTube);</li>
            <li>Testemunhos para ACSR, USB e DSA;</li>
            <li>Promocionais de eventos e datas comemorativas;</li>
            <li>Conteúdos internos e institucionais.</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Produções diversas</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>(Assessoria de Imprensa ACSR)</HighlightsText>
        <HighlightsText>
          <br />
          <ul className="remove-list-style">
            <li>2019:28</li>
            <li>2020:6</li>
            <li>2021:3</li>
            <li>2022:16</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Revista ACSR News</HighlightsTitle>
        <br />
        <BackgroundImage />
        <br />
        <HighlightsText>
          (Informes oficiais do campo distribuídos para todas as igrejas)
        </HighlightsText>
        <HighlightsText>
          <br />
          <ul className="remove-list-style">
            <li>2019:28</li>
            <li>2020:6</li>
            <li>2021:3</li>
            <li>2022:16</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Canais de Comunicação da ACSR</HighlightsTitle>
        <br />
        <HighlightsText>
          <ul className="remove-list-style">
            <li>Site: acsr.adventistas.org</li>
            <li>Redes Sociais:</li>
            <li>Facebook: @acsr.rs</li>
            <li>Instagram: @adventistasacsr</li>
            <li>YouTube: Adventistas Centro do Rio Grande do Sul</li>
          </ul>
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>TV Novo Tempo</HighlightsTitle>
        <br />
        <HighlightsText>
          No Brasil, a TV Novo Tempo é transmitida em canal fechado nas
          operadoras de TV por assinatura, como: Sky (33 e 433), Net (184 e
          684), Claro TV (184 e 684) e Oi (214). Além disso, a programação da TV
          também pode ser assistida em canal aberto para algumas cidades
          brasileiras do nosso território: 45 UHF (Grande Porto Alegre) e 46 UHF
          (Cachoeira do Sul).
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Gostaria de manifestar minha gratidão a Deus em primeiro lugar! Não
          existe ministro ou ministério sem Deus, não existe obreiro ou obra sem
          Deus! Por isso, louvado seja o Senhor pelas incontáveis bênçãos
          concedidas ao Ministério Jovem da Associação Central Sul
          Rio-Grandense.
          <br />
          <br />
          Sou grato à minha esposa, Gabriela Silva que tem se esmerado pela
          igreja, além de abençoar minha vida e meu ministério! Obrigado,
          querida, por me acompanhar, incentivar e vivermos juntos o sonho de
          Deus enquanto aguardamos Seu retorno. “Ela lhe faz bem e não mal,
          todos os dias da sua vida” (Pv 31:12).
          <br />
          <br />
          Nossa gratidão à Administração da ACSR que nos concede todo o suporte
          necessário para avançarmos com a obra de Deus. Tenho certeza de que
          são líderes escolhidos por Deus! Ao meu conselheiro, pastor Elmar
          Borges, muito obrigado por seus conselhos e por compartilhar seus
          ensinamentos comigo. É um privilégio servir a Deus com uma liderança
          tão inspiradora e comprometida!
          <br />
          <br />
          Quero agradecer às secretárias do Ministério Jovem, vocês são grandes
          no que fazem! No último quadriênio, contamos com todo empenho e
          dedicação da Fernanda (2019 e 2020) e da Vitória (2021 e 2022). Que a
          vida e o ministério de vocês continuem sendo uma bênção como foi até
          aqui! Obrigado!
          <br />
          <br />
          Agradeço aos colegas departamentais que passaram por estas pastas
          durante os quatro anos! Obrigado, pastor Tiago Fraga (2019) por
          levantar uma geração de jovens e por fortalecer uma liderança base
          neste campo. Obrigado, pastor Uilialdo Barreto (2020 e 2021) que,
          mesmo em meio à pandemia, deu continuidade às bases do MJA e levou os
          jovens a terem mais Comunhão, Relacionamento e Missão.
          <br />
          <br />
          Por fim, e não menos importante, quero agradecer aos líderes do
          Ministério Jovem da ACSR. Queridos diretores, distritais, regionais e
          coordenadores vocês são uma inspiração para qualquer líder neste
          campo! Recebam meu carinho e admiração por tudo que fizeram durante
          esse quadriênio, por todo esforço e sacrifício em favor dos jovens.
          Deus continue usando vocês e saibam que toda obra será recompensada no
          grande dia! Maranata!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default DouglasSilva;

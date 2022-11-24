import React, { useEffect, useState } from "react";

import douglasSilva from "../../assets/douglas-silva/douglas-silva.png";
import douglasImg1 from "../../assets/douglas-silva/douglas-img1.png";
import douglasImg2 from "../../assets/douglas-silva/douglas-img2.png";
import douglasImg3 from "../../assets/douglas-silva/douglas-img3.png";
import douglasImg4 from "../../assets/douglas-silva/douglas-img4.png";
import douglasImg5 from "../../assets/douglas-silva/douglas-img5.png";
import douglasImg6 from "../../assets/douglas-silva/douglas-img6.png";
import douglasImg7 from "../../assets/douglas-silva/douglas-img7.png";
import douglasImg8 from "../../assets/douglas-silva/douglas-img8.png";
import douglasImg9 from "../../assets/douglas-silva/douglas-img9.png";
import douglasImg10 from "../../assets/douglas-silva/douglas-img10.png";
import douglasImg11 from "../../assets/douglas-silva/douglas-img11.png";
import douglasImg12 from "../../assets/douglas-silva/douglas-img12.png";
import image1 from "../../assets/douglas-silva/image1.png";
import image2 from "../../assets/douglas-silva/image2.png";
import image3 from "../../assets/douglas-silva/image3.png";
import image4 from "../../assets/douglas-silva/image4.png";
import image5 from "../../assets/douglas-silva/image5.png";
import image6 from "../../assets/douglas-silva/image6.png";
import image8 from "../../assets/douglas-silva/image8.png";
import image9 from "../../assets/douglas-silva/image9.png";

import site from "../../assets/douglas-silva/site.svg";
import facebook from "../../assets/douglas-silva/facebook.svg";
import instagram from "../../assets/douglas-silva/instagram.svg";
import youtube from "../../assets/douglas-silva/youtube.svg";

import calebes from "../../assets/douglas-silva/calebes.png";
import universitarios from "../../assets/douglas-silva/universitarios.png";
import comunicacao from "../../assets/douglas-silva/comunicacao.png";
import producoes from "../../assets/douglas-silva/producoes.png";

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
  GreenBox,
  HighlightsContainerBlack,
  BoxYear,
  Year,
  YearsContainer,
  BoxYearGreen,
  BoxYearBlue,
  BoxYearYellow,
  RedBox,
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
        <br />
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
            enobrecida”.
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
        <img
          src={arrowDownRed}
          className="arrow-down"
          alt="Seta para baixo verde"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          O Ministério Jovem representa o trabalho de centenas de sociedades
          jovens comprometidas com o Senhor Jesus Cristo. Na grande maioria das
          congregações da ACSR, os jovens se organizam para apoiar o ministério
          da igreja de Deus nesta terra. A energia, a força e a disposição da
          juventude são fatores cruciais para a saúde de uma igreja local.
        </HighlightsText>
        <br />
        <br />
      </HighlightsContainer>
      <GreenBox>
        <br />
        <br />
        <br />
        <br />
        <p>Como a própria palavra de Deus diz:</p>
        <br />
        <p className="fs2">
          “Jovens, escrevi a vocês, porque são fortes, e a Palavra de Deus
          permanece em vocês, e vocês já venceram o Maligno.” I Jo 2:14.
        </p>
        <br />
        <p>
          O objetivo claro nos ideais JA é salvar do pecado e guiar no serviço,
          e isso acontece quando os jovens fazem da missão do Senhor o seu
          estilo de vida.
        </p>
        <br />
        <p>
          Através das várias ações deste departamento, visamos ter um exército
          de jovens que (1) vivam em comunhão com o Senhor, (2) transmitam o
          amor de Jesus através de ações solidárias e (3) estejam focados na
          missão de salvar. A tarefa principal não é encher as reuniões de
          jovens.
        </p>
        <br />
        <br />
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <p>
          Nossa missão está centrada em lotar as cidades de novos discípulos de
          Cristo. Não se pode medir o sucesso do Ministério Jovem pela
          quantidade de pessoas que assistem aos eventos, mas pela quantidade de
          discípulos que saem para cumprir a missão. Com oração, trabalhamos em
          algumas frentes para alcançarmos o objetivo de discipular esta nova
          geração. Com a graça de Deus, já temos visto grandes mobilizações e
          resultados!
        </p>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Equipe de Líderes</HighlightsTitle>
        <br />
        <p>
          Além do tradicional grupo de regionais e conselheiros nos últimos três
          anos, o departamento vem trabalhando na formação de uma equipe de
          distritais JA.
        </p>
        <br />
        <p>
          Esses líderes trabalham dando um suporte imediato para os diretores de
          jovens de cada igreja, ao todo são cinco conselheiros, sete regionais
          e 38 distritais.
        </p>
        <br />
        <HighlightsTitle>CRM</HighlightsTitle>
        <br />
        <img
          src={image1}
          style={{ width: "229px", height: "424px", margin: "auto" }}
          alt="douglasImg1"
        />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Save One</HighlightsTitle>
        <br />
        <img
          src={douglasImg2}
          style={{ marginBottom: "10px" }}
          alt="douglasImg1"
        />
        <img src={douglasImg1} alt="douglasImg1" />
        <br />
        <p>
          O treinamento para os líderes de jovens foi realizado a cada ano
          através de uma convenção que recebeu o nome de Save One. Nesse
          treinamento, os jovens receberam motivação, material e direcionamento
          para o cumprimento da missão, através de atividades práticas sobre
          Escola Sabatina Jovem, G148, Missão Calebe, estilização de sala etc.
        </p>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Campori de Jovens</HighlightsTitle>
        <br />
        <img src={image2} style={{ marginBottom: "10px" }} alt="" />
        <img src={image3} alt="" />
        <br />
        <p>
          Dois grandes acampamentos foram realizados em Bento Gonçalves durante
          o quadriênio. A cidade tornou-se palco do movimento de jovens
          adventistas que impactaram a cidade com ações sociais, fortaleceram a
          missão e os ideais do MJA.
        </p>
        <br />
        <p>
          Em 2019, o Campori Legado reforçou a identidade do Jovem Adventista e
          contou com a presença de 1.100 jovens. Em 2022, o Campori Chamados
          revigorou o propósito de Deus na vida de 1.305 jovens.
        </p>
        <br />
        <img src={image4} alt="" />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Missão Calebe</HighlightsTitle>
        <br />
        <img src={douglasImg4} alt="douglasImg1" />
        <br />
        <HighlightsTitle>Calebes</HighlightsTitle>
        <br />
        <img
          src={calebes}
          alt="calebes"
          style={{ width: "229px", height: "337px", margin: "auto" }}
        />
        <br />
        <br />
        <p>
          Centenas de jovens calebes doaram parte das suas férias para Jesus em
          cada início de ano. Saindo do conforto da casa, alguns viajaram muitos
          quilômetros para o local da missão. Nesses locais, eles desenvolveram
          visitação nos lares, estudos bíblicos, semanas de evangelismo, além de
          atividades sociais para a comunidade como feiras de saúde e outras.
          Cremos que uma geração de missionários está surgindo através deste
          programa.
        </p>
        <br />
        <img src={douglasImg5} alt="douglasImg5" />
        <img src={douglasImg6} alt="douglasImg5" />
        <img src={douglasImg7} alt="douglasImg5" />
        <img src={douglasImg8} alt="douglasImg5" />
        <img src={douglasImg9} alt="douglasImg5" />
        <br />
        <br />
        <strong>Jovens que participaram da Missão Calebe por ano:</strong>
        <br />
        <img src={douglasImg10} alt="douglasImg10" />
        <br />
        <img src={douglasImg11} alt="douglasImg11" />
        <br />
        <br />
        <HighlightsTitle>Projeto OYiM</HighlightsTitle>
        <br />
        <img src={douglasImg12} alt="douglasImg12" />
        <br />
        <p>
          O projeto Um Ano em Missão nestes últimos quatro anos envolveu 50
          jovens em um trabalho de tempo integral para o Senhor no território da
          ACSR. Eles atuaram diretamente na evangelização em grandes centros
          urbanos e auxiliaram no plantio de igrejas, estruturação de Centros de
          Influência e ministração de estudos bíblicos. A ACSR presta todo o
          treinamento, motivação, preparo, subvenções e orientações para o
          trabalho destes jovens.
        </p>
      </HighlightsContainer>
      <HighlightsContainerBlack>
        <HighlightsTitle>OYIM</HighlightsTitle>
        <br />
        <p>Número de Batismos</p>
        <YearsContainer>
          <Year>
            <p>2019</p>
            <BoxYear>
              <p>30</p>
            </BoxYear>
          </Year>
          <Year>
            <p>2020</p>
            <BoxYear>
              <p>0</p>
            </BoxYear>
          </Year>
          <Year>
            <p>2021</p>
            <BoxYear>
              <p>26</p>
            </BoxYear>
          </Year>
          <Year>
            <p>2022</p>
            <BoxYear>
              <p>9</p>
            </BoxYear>
          </Year>
        </YearsContainer>
        <p className="desc">2020 - Pandemia (Projeto cancelado)</p>
        <br />

        <br />
        <p>Igrejas Plantadas</p>
        <YearsContainer>
          <Year>
            <p>2019</p>
            <BoxYearGreen>
              <p>1</p>
            </BoxYearGreen>
          </Year>
          <Year>
            <p>2020</p>
            <BoxYearGreen>
              <p>0</p>
            </BoxYearGreen>
          </Year>
          <Year>
            <p>2021</p>
            <BoxYearGreen>
              <p>0</p>
            </BoxYearGreen>
          </Year>
          <Year>
            <p>2022</p>
            <BoxYearGreen>
              <p>0</p>
            </BoxYearGreen>
          </Year>
        </YearsContainer>
        <p className="desc">2019 - Higienópolis</p>
        <p className="desc">2020 - Pandemia (Projeto cancelado)</p>
        <br />

        <br />
        <p>Igrejas Revitalizadas</p>
        <YearsContainer>
          <Year>
            <p>2019</p>
            <BoxYearYellow>
              <p>3</p>
            </BoxYearYellow>
          </Year>
          <Year>
            <p>2020</p>
            <BoxYearYellow>
              <p>0</p>
            </BoxYearYellow>
          </Year>
          <Year>
            <p>2021</p>
            <BoxYearYellow>
              <p>5</p>
            </BoxYearYellow>
          </Year>
          <Year>
            <p>2022</p>
            <BoxYearYellow>
              <p>3</p>
            </BoxYearYellow>
          </Year>
        </YearsContainer>
        <p className="desc">2020 - Pandemia (Projeto cancelado)</p>
        <br />

        <br />
        <p>Igrejas Revitalizadas</p>
        <YearsContainer>
          <Year>
            <p>2019</p>
            <BoxYearBlue>
              <p>75</p>
            </BoxYearBlue>
          </Year>
          <Year>
            <p>2020</p>
            <BoxYearBlue>
              <p>0</p>
            </BoxYearBlue>
          </Year>
          <Year>
            <p>2021</p>
            <BoxYearBlue>
              <p>130</p>
            </BoxYearBlue>
          </Year>
          <Year>
            <p>2022</p>
            <BoxYearBlue>
              <p>80</p>
            </BoxYearBlue>
          </Year>
        </YearsContainer>
        <p className="desc">2020 - Pandemia (Projeto cancelado)</p>
        <br />
        <br />
      </HighlightsContainerBlack>
      <HighlightsContainer>
        <HighlightsTitle>Universitários</HighlightsTitle>
        <br />
        <img src={universitarios} alt="universitarios" />
        <br />
        <p>
          Cada universitário como um embaixador no campus é o objetivo deste
          departamento. Para isso, a Agremiação Gaúcha dos Universitários
          Adventistas (AGUA) organiza simpósios nos quais são ministradas
          palestras que apresentam as respostas necessárias para conscientizar
          os universitários adventistas de sua missão. Além disso, os cultos de
          envio fortalecem os princípios e o propósito do Jovem Universitário no
          período da Faculdade.
        </p>
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Música</HighlightsTitle>
        <br />
        <img src={image5} alt="musicas" />
        <br />
        <p>
          A música tem um papel singular no contexto da adoração. Cada igreja
          deve dedicar tempo, recursos e talentos para que este ministério seja
          cumprido de modo que honre o nome de Deus. Pensando em melhor atender
          a este departamento, o campo criou uma coordenação, realizou
          treinamentos e ofereceu por dois anos um Encontro de Músicos onde os
          aspectos técnicos e espirituais são trabalhados. O departamento
          promoveu os seguintes programas:
        </p>
        <br />
        <p>
          • Capacitação do Ministério da Música;
          <br />
          • Capacitação de Sonoplastas;
          <br />• Encontro de Músicos no IACS.
        </p>
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Comunicação</HighlightsTitle>
        <br />
        <img src={comunicacao} alt="comunicacao" />
        <br />
        <p>
          A Comunicação é, sem dúvidas, um dos ministérios mais dinâmicos e
          intensos da Igreja Adventista. Ele surge para somar e age como um elo
          entre os demais ministérios, reunindo todas as informações e
          disponibilizando-as harmoniosamente ao público interno e externo (que
          compreende adventistas e a sociedade em geral).
          <br />
          <br />
          Além disso, este ministério também auxilia os comunicadores das
          igrejas lá na ponta e promove o maior alcance da Rede Novo Tempo de
          Comunicação na região.
        </p>
        <br />
        <img src={image6} alt="comunicacao" />
        <br />
        <p>
          Esta divulgação interna e externa acontece por uma equipe composta por
          um assessor de comunicação e um diretor de mídia. Eles produzem
          conteúdos disponibilizados em sites oficiais, redes sociais, materiais
          impressos, reportagens na TV Novo Tempo, testemunhos, inserções na
          imprensa local, entre outros.
        </p>
        <br />
        <p>
          Já o trabalho dos comunicadores das igrejas é fortalecido por
          treinamentos, assessoramentos e materiais também promovidos por este
          núcleo. O alcance das antenas da TV Novo Tempo é gerenciado por uma
          equipe técnica da área administrativa do escritório da ACSR. Com esta
          dinâmica de atividades, temos visto um desenvolvimento muito
          expressivo da comunicação em nossa região.
        </p>
        <br />
        <p>
          A inserção no mundo digital, o aperfeiçoamento do trabalho do
          comunicador e o aumento do alcance da mensagem de esperança nos
          mostram que estamos apontando para o caminho certo — a pregação da
          Palavra de Deus, até Jesus voltar. Veja mais detalhes sobre as
          atividades promovidas neste departamento nos últimos quatro anos.
        </p>
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Congregações identificadas</HighlightsTitle>
        <span>
          <strong>2015-2018</strong>
        </span>
        <br />
        <strong>Logo NT:</strong>
        <p>
          <span className="green-text">37%</span> das igrejas e grupos
        </p>
        <br />
        <strong>Logo Igreja:</strong>
        <p>
          <span className="green-text">80%</span> das igrejas e grupos
        </p>
        <br />
        <br />
        <span>
          <strong>2019-2022</strong>
        </span>
        <br />
        <strong>Logo NT:</strong>
        <p>
          <span className="green-text">70%</span> das igrejas e grupos
        </p>
        <br />
        <strong>Logo Igreja:</strong>
        <p>
          <span className="green-text">98%</span> das igrejas e grupos
        </p>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Produções diversas</HighlightsTitle>
        <br />
        <p>
          • Notícias para portal da ACSR;
          <br />
          • Conteúdo para redes sociais;
          <br />
          • Reportagens para TV Novo Tempo (Revista Novo Tempo);
          <br />
          • Reportagens para TV Novo Tempo (Anjos da Esperança);
          <br />
          • Transmissões ao vivo (através do Canal do YouTube);
          <br />
          • Testemunhos para ACSR, USB e DSA;
          <br />
          • Promocionais de eventos e datas comemorativas;
          <br />
          • Conteúdos internos e institucionais.
          <br />
        </p>
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Número de reportagens</HighlightsTitle>
        <br />
        <p>(Assessoria de Imprensa ACSR)</p>
        <br />
        <img
          src={image8}
          alt="producoes"
          style={{ width: "229px", height: "427px", margin: "auto" }}
        />
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Revista ACSR News</HighlightsTitle>
        <br />
        <p>(Informes oficiais do campo distribuídos para todas as igrejas)</p>
        <br />
        <img src={image9} alt="revista" style={{ width: "229px", height: "427px", margin: "auto" }} />
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>Canais de Comunicação da ACSR</HighlightsTitle>
        <br />
        <strong className="subtitle">Site</strong>
        <div style={{ display: "flex" }}>
          <img src={site} alt="" style={{ marginRight: "15px" }} />
          <RedBox>
            <a href="http://acsr.adventistas.org/" target="_blank">
              acsr.adventistas.org
            </a>
          </RedBox>
        </div>
        <br />
        <strong className="subtitle">Redes Sociais</strong>
        <strong>Facebook</strong>
        <div style={{ display: "flex" }}>
          <img src={facebook} alt="" style={{ marginRight: "15px" }} />
          <RedBox>
            <a href="https://www.facebook.com/acsr.rs" target="_blank">
              @acsr.rs
            </a>
          </RedBox>
        </div>
        <br />
        <strong>Instagram</strong>
        <div style={{ display: "flex" }}>
          <img src={instagram} alt="" style={{ marginRight: "15px" }} />
          <RedBox>
            <a
              href="https://www.instagram.com/adventistasacsr/"
              target="_blank"
            >
              @adventistasacsr
            </a>
          </RedBox>
        </div>
        <br />
        <strong>YouTube</strong>
        <div style={{ display: "flex" }}>
          <img src={youtube} alt="" style={{ marginRight: "15px" }} />
          <RedBox>
            <a
              href="https://www.youtube.com/@AssociacaoCentralRS"
              target="_blank"
            >
              Adventistas Centro <br /> do Rio Grande do Sul
            </a>
          </RedBox>
        </div>
        <br />
      </HighlightsContainer>
      <HighlightsContainer>
        <HighlightsTitle>TV Novo Tempo</HighlightsTitle>
        <br />
        <p>
          No Brasil, a TV Novo Tempo é transmitida em canal fechado nas
          operadoras de TV por assinatura, como:
        </p>
        <br />
        <p>
          <span className="green-text">Sky</span> (33 e 433)
        </p>
        <p>
          <span className="green-text">Net</span> (184 e 684)
        </p>
        <p>
          <span className="green-text">Claro TV</span> (184 e 684)
        </p>
        <p>
          <span className="green-text">Oi</span> (214)
        </p>
        <br />
        <p>
          Além disso, a programação da TV também pode ser assistida em canal
          aberto para algumas cidades brasileiras do nosso território:
        </p>
        <br />
        <p>
          <span className="green-text">45 UHF</span> (Grande Porto Alegre)
        </p>
        <p>
          <span className="green-text">46 UHF</span> (Cachoeira do Sul)
        </p>
        <br />
      </HighlightsContainer>
      <ThanksContainer>
        <img
          src={yellowArrowDown}
          className="arrow-down"
          alt="Seta para baixo amarela"
        />
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
          dedicação da Fernanda Sanabria (2019 e 2020) e da Vitória Boeira (2021
          e 2022). Que a vida e o ministério de vocês continuem sendo uma bênção
          como foi até aqui! Obrigado!
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

import React, { useEffect, useState } from "react";

import joaoLorini from "../../assets/joao-lorini/joao-without-back.png";

import arrowDown from "../../assets/arrow-down-white.svg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
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
  HighlightsSubTitle,
  Italic,
} from "./styles";

const JoaoLorini: React.FC = () => {
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
          <img src={joaoLorini} alt="Joao Lorini" />
        </ImageContainer>
        <Name>
          Pr.
          <br />
          João
          <br />
          Lorini
        </Name>
        <Role>
          Associação Ministerial, Ministério Pessoal e Escola Sabatina
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“P</FirstLetter>
            <Text>
              ortanto, vão e façam discípulos de todas as nações, batizando-os
              em nome do Pai, do
            </Text>
          </TextCapitularContainer>
          <Text>
            Filho e do Espírito Santo, ensinando-os a guardar todas as coisas
            que tenho ordenado a vocês. E eis que estou com vocês todos os dias
            até o fim dos tempos”
            <br />
            <br />
            <Italic>(Mt 28:19, 20).</Italic>
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsTitle>Ministério Pessoal</HighlightsTitle>
        <br />
        <HighlightsText>
          A nossa grande missão é fazer discípulos. Sonhamos, oramos e
          trabalhamos para termos uma igreja envolvida, para chegarmos ao sonho
          de ser Cada Um Salvando Um. Para isso, trabalhamos através da Roda do
          Discipulado. Queremos a maioria da igreja da ACSR:
        </HighlightsText>
        <br />
        <HighlightsText>
          1. Ter em seu estilo de vida a prática da comunhão, relacionamento e
          missão (INDO);
          <br />
          2. Conectar-se aos interessados intencionalmente para fazer deles
          novos discípulos por estudos bíblicos (FAÇAM DISCÍPULOS);
          <br />
          3. Desafiar discípulos maduros a tomarem a decisão pública pelo
          batismo (BATIZANDO);
          <br />
          4. Após o batismo, ensinar os discípulos a aprofundarem a vida cristã
          paras se multiplicarem, fazendo outros novos discípulos (ENSINANDO).
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <br />
        <br />
        <img src={redArrowDown} alt="Seta para baixo vermelha" />
        <br />
        <ThanksTitle>Destaques</ThanksTitle>
        <br />
        <br />
        <HighlightsSubTitle>CRM</HighlightsSubTitle>
        <br />
        <ThanksText>
          * Obs.: Em 2019 o cartão de chamada da Escola Sabatina não possuía as
          perguntas da Roda do Discipulado. Em 2022, os dados são apenas do 1º
          trimestre.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Rede do pastoreio</HighlightsSubTitle>
        <br />
        <ThanksText>
          O Ministério Pessoal trabalhou através de uma rede de pastoreio onde
          cada departamental do campo orientou os pastores distritais através
          dos PGP’s (Pequenos Grupos de Pastores), que por sua vez guiaram seus
          líderes missionários por meio dos PGL’s (Pequenos Grupos de Líderes) e
          estes líderes conduziram toda a igreja através das Unidades de Ação da
          Escola Sabatina.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Semana Santa</HighlightsSubTitle>
        <br />
        <ThanksText>
          Louvamos a Deus pelos resultados alcançados nas Semanas Santas deste
          quadriênio. Sem dúvida, o melhor ano foi 2019. Os dois anos seguintes,
          2020 e 2021, foram períodos difíceis com igrejas fechadas. Já em 2022
          começamos uma retomada.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          *Obs.: Em 2020, devido ao início da pandemia da COVID-19, a Semana
          Santa foi feita através de transmissões da das, portanto, não houve
          relatório.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Semana Santa Especial</HighlightsSubTitle>
        <br />
        <ThanksText>
          Em 2019, a Semana Santa no Rio Grande do Sul recebeu pregadores e
          músicos da DSA, Novo Tempo, CPB e USB. A ACSR recebeu 18 pregadores
          destas instituições, além de duas caravanas com o evangelista da DSA e
          orador da Voz da Profecia, acompanhados do Quarteto Arautos do Rei.
          Além desses, todos os departamentais, pastores e demais evangelistas
          da ACSR assumiram um ponto de pregação. Ao final, foi realizado um
          encerramento envolvendo os três campos gaúchos no estádio Beira-Rio.
          Louvamos a Deus pelo maior batismo deste campo em uma Semana Santa:
          382 pessoas.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Materiais Missionários</HighlightsSubTitle>
        <br />
        <ThanksText>
          O Ministério Pessoal providencia material missionário de boa qualidade
          e em quantidade suficiente para que a igreja possa fazer o trabalho na
          linha de frente. Seguem alguns números sobre os principais materiais
          distribuídos neste quadriênio:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          <ul>
            <li>
              Estudos Bíblicos (Amigos de Fé, Jesus Restaurador da Vida, Ouvindo
              a Voz de Deus, A Bíblia Ensina, Apocalipse, Daniel, Ensinos de
              Jesus etc.) = 105.400
            </li>
            <li>Folhetos Missionários = 1.660.000</li>
            <li>Pesquisas Bíblicas = 20.000</li>
            <li>DVD’s Missionários = 30.000</li>
            <li>Bíblias = 13.400</li>
          </ul>
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Trilhas Missionárias</HighlightsSubTitle>
        <br />
        <ThanksText>
          Desde 2019, temos trabalhado na ACSR com duas trilhas missionárias:
          Semana Santa e Primavera. O objetivo dessas trilhas é incentivar as
          igrejas a trabalharem continuamente em um processo espiritual de
          semear, cultivar e colher. O primeiro lançamento é feito para os
          pastores, depois para os líderes, seguido de atividades missionárias e
          de treinamento ao longo do processo. O resultado é uma colheita
          organizada, consistente e forte.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Amigos de Fé</HighlightsSubTitle>
        <br />
        <ThanksText>
          A proposta deste projeto é que o membro envolvido faça o discipulado
          com outro membro ainda não envolvido, para juntos realizarem muitas
          atividades de comunhão, relacionamento e missão durante o ano. Número
          de duplas a cada ano:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2019 = 2.023 duplas
          <br />
          2020 = 1.158 duplas
          <br />
          2021 = 1.989 duplas
          <br />
          2022 = 1.679 duplas
          <br />
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>PGP (Pequeno Grupo de Pastores)</HighlightsSubTitle>
        <br />
        <ThanksText>
          Todos os pastores da ACRS se reuniram em PGP’s nas regiões de Porto
          Alegre, Canoas, Serra, Santa Maria e Ijuí. Este encontro bimestral é
          muito importante na rede de pastoreio do Ministério Pessoal, pois,
          alinha os pastores distritais com a visão missionária do campo, além
          de prover motivação, apoio e materiais.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>PGL (Pequeno Grupo de Líderes)</HighlightsSubTitle>
        <br />
        <ThanksText>
          Este é um encontro regular do pastor distrital com os anciãos,
          diretores do Ministério Pessoal e Escola Sabatina, e professores da
          Escola Sabatina. No PGL são trabalhados três itens na rede de
          pastoreio: análise do CRM (dados de envolvimento na comunhão,
          relacionamento e missão), discipulado de líderes e didática do ensino
          da lição da Escola Sabatina.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Espaços Novo Tempo</HighlightsSubTitle>
        <br />
        <ThanksText>
          Com o crescimento expressivo da Rede Novo Tempo de Comunicação, a ACSR
          respondeu com um projeto de apoio para as igrejas terem um Espaço Novo
          Tempo. Durante todo o quadriênio, contamos com um pastor exclusivo
          para atender os interessados da TV Novo Tempo: pastor Juscelino
          Ferreira Santos.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>
          Fundação de novos Espaços Novo Tempo
        </HighlightsSubTitle>
        <br />
        <ThanksText>
          O processo de fundação inclui formação e treinamento de equipe local
          para atendimento e sala com TV e logo oficial:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2019:
          <br />
          1. Canoas
          <br />
          2. Cruz Alta
          <br />
          3. Itu-Sabará
          <br />
          4. Moinhos de Vento
          <br />
          5. Oliveiras
          <br />
          6. Sarandí
          <br />
          7. Vila Aparecida
          <br />
          8. Farrapos
          <br />
          9. Jardim Lindóia
          <br />
          10. Niterói
          <br />
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2020:
          <br />
          1. Guajuviras
          <br />
          2. Boqueirão
          <br />
          3. Nancy
          <br />
          4. Rio Branco
          <br />
          5. Caxias do Sul
          <br />
          6. Venâncio Aires
          <br />
          7. Ramiz Galvão
          <br />
          8. Santa Cruz do Sul
          <br />
          9. Candelária
          <br />
          10. São Cristóvão
          <br />
          11. Santa Maria
          <br />
          12. Pinheiro Machado
          <br />
          13. Lorenzi
          <br />
          14. Esplanada
          <br />
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2021:
          <br />
          1. São Sebastião do Caí
          <br />
          2. Modelo
          <br />
          3. Ferroviário
          <br />
          4. Patronato
          <br />
          5. Menino Deus
          <br />
          6. Betânia
          <br />
          7. Betânia Kids
          <br />
          8. Vila Santa Rosa
          <br />
          9. Porto Novo
          <br />
          10. Costa e Silva
          <br />
          11. Parque dos Maias
          <br />
          12. Paverama
          <br />
          13. Vera Cruz
          <br />
          14. Jockey Club
          <br />
          15. Nova Esperança
          <br />
          16. House Church
          <br />
          17. Candelária
          <br />
          18. Veranópolis
          <br />
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2022 (até março):
          <br />
          1. Quevedo
          <br />
          2. Colorado
          <br />
          3. Vila Hilda
          <br />
          4. Salto do Jacuí
          <br />
        </ThanksText>
        <br />
        <ThanksText>
          Batismos por influência da TV, rádio, web e equipes Novo Tempo:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          1. 2019: 97
          <br />
          2. 2020: 179
          <br />
          3. 2021: 280
          <br />
          4. 2022: 17 (até março)
          <br />
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Escola Sabatina</HighlightsSubTitle>
        <br />
        <ThanksText>
          A Escola Sabatina reflete a visão de ser o maior e o mais eficaz
          instrumento em levar almas para Cristo através do discipulado.
          Sonhamos em ver cada aluno dessa grande Escola sendo ativo em sua
          própria Roda do Discipulado. Nosso objetivo é ter a maioria dos
          membros como cooperadores de Deus.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          A nossa grande missão é fazer discípulos. Sonhamos, oramos e
          trabalhamos para termos uma igreja envolvida e alcançarmos o sonho de
          ser Cada Um Salvando Um. Para isso, trabalhamos desde 2020 através da
          Roda do Discipulado:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          1. Tendo em seu estilo de vida a prática da comunhão, relacionamento e
          missão (INDO);
          <br />
          2. Se conectando aos seus interessados intencionalmente para fazer
          deles novos discípulos por estudos bíblicos (FAÇAM DISCÍPULOS);
          <br />
          3. Desafiando seus discípulos maduros a tomarem a decisão pública pelo
          batismo (BATIZANDO);
          <br />
          4. Continuando, após o batismo, a ensinar seus discípulos a
          aprofundarem a vida cristã e a multiplicarem-se, fazendo também outros
          novos discípulos (ENSINANDO).
          <br />
        </ThanksText>
        <br />
        <br />

        <br />
        <br />
        <HighlightsSubTitle>Roda do Discipulado</HighlightsSubTitle>
        <br />
        <ThanksText>
          * Obs.: Em 2019, o cartão de chamada da ES não possuía as perguntas da
          Roda do Discipulado. Os dados de 2022 são apenas do primeiro
          trimestre.
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Dados da Escola Sabatina</HighlightsSubTitle>
        <br />
        <ThanksText>
          A estrutura que mais traz união para a igreja é a Escola Sabatina,
          pois cada Unidade de Ação estimula seus alunos a estudarem a lição, a
          mesma em todo o mundo. Para incentivar a assinatura da lição da ES, a
          cada ano é realizado em setembro, o Projeto Maná, uma parceria com a
          editora da igreja no Brasil, a Casa Publicadora Brasileira.
        </ThanksText>
        <br />
        <br />
        <br />
        <ThanksText>* Dados até 1o trimestre/2022.</ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Verbas para treinamentos (C1S1)</HighlightsSubTitle>
        <br />
        <ThanksText>
          Cada distrito e Escola Sabatina da ACSR recebe uma verba anual para
          investir em treinamentos para o Discipulado. Seguem os valores de
          verba de treinamento do quadriênio:
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          2019 = R$ 345.000,00
          <br />
          2020 = R$ 348.000,00
          <br />
          2021 = R$ 260.000,00
          <br />
          2022 = R$ 260.000,00
          <br />
        </ThanksText>

        <br />
        <br />
        <HighlightsSubTitle>Associação Ministerial</HighlightsSubTitle>
        <br />
        <ThanksText>
          Na Igreja Adventista do Sétimo Dia, a Associação Ministerial é formada
          pelos pastores aspirantes, ordenados e jubilados do campo. Seu diretor
          é o presidente da Associação, que tem como adjunto o secretário
          ministerial.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          O principal papel do secretário ministerial é pastorear, cuidar e
          estimular o crescimento dos pastores do campo, anciãos, anciães,
          diretores de grupos organizados, diáconos e diaconisas. Ele também é
          um apoiador das atividades dos obreiros jubilados.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          Somos gratos a Deus por cuidar da família ministerial da ACSR nesse
          quadriênio, especialmente nos difíceis anos da pandemia.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          Duas reuniões com pastores aspirantes foram realizadas por ano, de
          igual forma os Concílios Pastorais. O Concílio para anciãos acontece
          uma vez ao ano, apenas em 2020 este encontro foi on-line, devido à
          pandemia. Já o Concílio para as Famílias ministeriais aconteceu em
          2019 e 2021.
        </ThanksText>
        <br />
        <br />
        <ThanksText>
          O Programa de Atendimento ao Ministério Pastoral (PAMP) foi feito seis
          vezes por ano. Três cerimônias de Ordenação ao Ministério aconteceram
          neste quadriênio e ao todo, 12 pastores foram ordenados.
        </ThanksText>
      </ThanksContainer>
      <ThanksContainer>
        <br />
        <br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Agradeço, em primeiro lugar, a Deus pelo chamado ao Ministério e por
          ter me guiado até aqui. Agradeço à minha esposa, Bianca Lorini e aos
          meus filhos, Emily e Henrique por sempre apoiarem incondicionalmente
          meu Ministério, colocando a Deus em primeiro lugar.
          <br />
          <br />
          Agradeço à minha mãe, Lourdes Lorini por colocar em meu coração desde
          a infância o temor do Senhor e por ser fundamental para me formar um
          pastor.
          <br />
          <br />
          Agradeço aos demais familiares e amigos por fazerem parte deste
          Ministério.
          <br />
          <br />
          Minha gratidão à Administração da ACSR pela confiança e apoio sem
          medida. Ao pastor Rogério Gurniak que liderou a Associação Ministerial
          na ACSR de 2019 a 2021 sem medir esforços para alcançar estes
          resultados no quadriênio.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JoaoLorini;

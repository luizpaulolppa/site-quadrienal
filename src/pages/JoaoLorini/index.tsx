import React, { useEffect, useState } from "react";
import joaoLorini from "../../assets/joao-lorini/joao-without-back.jpg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
import image1 from "../../assets/joao-lorini/image1.png";
import image2 from "../../assets/joao-lorini/image2.png";
import image3 from "../../assets/joao-lorini/image3.png";
import image4 from "../../assets/joao-lorini/image4.png";
import image5 from "../../assets/joao-lorini/image5.png";
import image6 from "../../assets/joao-lorini/image6.png";
import image7 from "../../assets/joao-lorini/image7.png";
import image8 from "../../assets/joao-lorini/image8.png";
import image9 from "../../assets/joao-lorini/image9.png";
import image10 from "../../assets/joao-lorini/image10.png";
import image11 from "../../assets/joao-lorini/image11.png";
import image12 from "../../assets/joao-lorini/image12.png";
import image13 from "../../assets/joao-lorini/image13.png";
import image14 from "../../assets/joao-lorini/image14.png";
import image15 from "../../assets/joao-lorini/image15.png";
import image16 from "../../assets/joao-lorini/image16.png";
import image17 from "../../assets/joao-lorini/image17.png";
import image18 from "../../assets/joao-lorini/image18.png";
import image19 from "../../assets/joao-lorini/image19.png";
import image20 from "../../assets/joao-lorini/image20.png";
import image21 from "../../assets/joao-lorini/image21.png";
import image22 from "../../assets/joao-lorini/image22.png";
import image23 from "../../assets/joao-lorini/image23.png";
import image24 from "../../assets/joao-lorini/image24.png";
import image30 from "../../assets/joao-lorini/image30.png";
import image31 from "../../assets/joao-lorini/image31.png";
import image32 from "../../assets/joao-lorini/image32.png";
import image33 from "../../assets/joao-lorini/image33.png";
import image34 from "../../assets/joao-lorini/image34.png";
import image35 from "../../assets/joao-lorini/image35.png";
import image36 from "../../assets/joao-lorini/image36.png";
import image37 from "../../assets/joao-lorini/image37.png";
import image38 from "../../assets/joao-lorini/image38.png";
import image39 from "../../assets/joao-lorini/image39.png";
import image40 from "../../assets/joao-lorini/image40.svg";
import image41 from "../../assets/joao-lorini/image41.png";
import image42 from "../../assets/joao-lorini/image42.png";

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
  Badge,
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
            <FirstLetter>“I</FirstLetter>
            <Text>
              de, portanto, fazei discípulos de todas as nações, batizando-os em 
              nome do Pai, e do Filho, e
            </Text>
          </TextCapitularContainer>
          <Text>
            do Espírito Santo; ensinando-os a guardar todas as coisas que vos tenho 
            ordenado. E eis que estou convosco todos os dias até à consumação do século.” 
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
          de ser <strong>Cada Um Salvando Um</strong>. Para isso, atuamos através da Roda do
          Discipulado. Queremos a maioria da igreja da ACSR:
        </HighlightsText>
        <br />
        <HighlightsText>
          <Badge color="#DB3332" style={{ padding: '20px' }}>
            <span style={{ fontWeight: '600', fontSize: '46px' }}>
              1.
            </span>
            <span style={{ fontWeight: '400', fontSize: '16px' }}>
              Tendo em seu estilo de vida 
              a prática da comunhão, relacionamento e missão (IDE).
            </span>
          </Badge>
          <br />
          <Badge color="#19CD77" style={{ padding: '20px' }}>
            <span style={{ fontWeight: '600', fontSize: '46px' }}>
              2.
            </span>
            <span style={{ fontWeight: '400', fontSize: '16px' }}>
            Conectando-se aos seus interessados intencionalmente para fazer deles novos discípulos por meio de estudos bíblicos 
            (FAZEI DISCÍPULOS).
            </span>
          </Badge>
          <br />
          <Badge color="#E8D71E" style={{ padding: '20px' }}>
            <span style={{ fontWeight: '600', fontSize: '46px' }}>
              3.
            </span>
            <span style={{ fontWeight: '400', fontSize: '16px' }}>
              Desafiando seus discípulos maduros a tomarem a decisão pública pelo batismo  
              (BATIZANDO).
            </span>
          </Badge>
          <br />
          <Badge color="#63B4EF" style={{ padding: '20px' }}>
            <span style={{ fontWeight: '600', fontSize: '46px' }}>
              4.
            </span>
            <span style={{ fontWeight: '400', fontSize: '16px' }}>
              Continuando, após o batismo, a ensinar seus discípulos a aprofundarem a vida 
              cristã e a multiplicarem-se, fazendo também outros novos discípulos (ENSINANDO).
            </span>
          </Badge>
        </HighlightsText>
        <br />
        <br />
        <img src={redArrowDown} className="icon" alt="Seta para baixo vermelha" />
        <br />
        <ThanksTitle>Destaques</ThanksTitle>
        <br />
        <br />
        <img src={image1} alt="" />
        <br />
        <img src={image2} alt="" />
        <br />
        <img src={image3} alt="" />
        <br />
        <img src={image4} alt="" />
        <br />
        <br />
        <ThanksTitle>Rede do pastoreio</ThanksTitle>
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
        <img src={image5} alt="" />
        <br />
        <ThanksTitle>Semana Santa</ThanksTitle>
        <br />
        <ThanksText>
          Louvamos a Deus pelos resultados alcançados nas Semanas Santas deste quadriênio. 
          Tivemos um ano maravilhoso para a Semana Santa: 2019. Depois enfrentamos dois 
          anos de igrejas fechadas no período da Semana Santa: 2020 e 2021. 
          E no ano de 2022 começamos uma retomada. Seguem maiores informações:
        </ThanksText>
        <br />
        <br />
        <img src={image6} alt="" />
        <br />
        <img src={image7} alt="" />
        <br />
        <img src={image8} alt="" />
        <br />
        <img src={image9} alt="" />
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
          <strong> 382</strong> pessoas.
        </ThanksText>
        <br />
        <img src={image10} alt="" />
        <br />
        <img src={image11} alt="" />
        <br />
        <img src={image12} alt="" />
        <br />
        <br />
        <HighlightsTitle>Materiais Missionários</HighlightsTitle>
        <br />
        <ThanksText>
          O Ministério Pessoal providencia material missionário de boa qualidade 
          e em quantidade suficiente para que a igreja possa fazer o trabalho na 
          linha de frente. 
          <br />
          <br />
          Alguns números sobre os principais materiais distribuídos neste quadriênio: 
        </ThanksText>
        <br />
        <img src={image13} alt="" />
        <br />
        <br />
        <HighlightsTitle>Trilhas Missionárias</HighlightsTitle>
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
        <img src={image14} alt="" />
        <br />
        <HighlightsTitle>Amigos de Fé</HighlightsTitle>
        <br />
        <ThanksText>
          A proposta deste projeto é que o membro envolvido faça o discipulado
          com outro membro ainda não envolvido, para juntos realizarem muitas
          atividades de comunhão, relacionamento e missão durante o ano. Número
          de duplas a cada ano:
        </ThanksText>
        <br />
        <img src={image15} style={{ width: '229px', height: '374px', margin: 'auto' }} alt="" />
        <br />
        <img src={image16} alt="" />
        <br />
        <img src={image17} alt="" />
        <br />
        <br />
        <HighlightsTitle>PGP (Pequeno Grupo de Pastores)</HighlightsTitle>
        <br />
        <ThanksText>
          Todos os pastores da ACRS se reuniram em PGP’s nas regiões de Porto
          Alegre, Canoas, Serra, Santa Maria e Ijuí. Este encontro bimestral é
          muito importante na rede de pastoreio do Ministério Pessoal, pois,
          alinha os pastores distritais com a visão missionária do campo, além
          de prover motivação, apoio e materiais.
        </ThanksText>
        <br />
        <img src={image18} alt="" />
        <br />
        <img src={image19} alt="" />
        <br />
        <br />
        <HighlightsTitle>PGL (Pequeno Grupo de Líderes)</HighlightsTitle>
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
        <img src={image20} alt="" />
        <br />
        <img src={image21} alt="" />
        <br />
        <br />
        <HighlightsTitle>Espaços Novo Tempo</HighlightsTitle>
        <br />
        <ThanksText>
          Com o crescimento expressivo da Rede Novo Tempo de Comunicação, a ACSR
          respondeu com um projeto de apoio para as igrejas terem um Espaço Novo
          Tempo. Durante todo o quadriênio, contamos com um pastor exclusivo
          para atender os interessados da TV Novo Tempo: pastor Juscelino
          Ferreira Santos.
        </ThanksText>
        <br />
        <img src={image22} alt="" />
        <br />
        <img src={image23} alt="" />
        <br />
        <br />
        <HighlightsTitle>
          Fundação de novos Espaços Novo Tempo
        </HighlightsTitle>
        <br />
        <ThanksText>
          O processo de fundação inclui formação e treinamento de equipe local
          para atendimento e sala com TV e logo oficial:
        </ThanksText>
        <br />
        <br />
        <Badge color="#E1A0F8" style={{ padding: '20px' }}>
          <span style={{ fontSize: '28px' }}><strong>2018</strong></span>
        </Badge>
        <br />
        <ThanksText>
          14 Espaços Novo Tempo em funcionamento na ACSR
        </ThanksText>
        <br />
        <Badge color="#F1403F" style={{ padding: '20px' }}>
          <span style={{ fontSize: '28px' }}><strong>2019</strong></span>
        </Badge>
        <br />
        <ThanksText>
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
        <Badge color="#19CD77" style={{ padding: '20px' }}>
          <span style={{ fontSize: '28px' }}><strong>2020</strong></span>
        </Badge>
        <br />
        <ThanksText>
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
        <Badge color="#E8D71E" style={{ padding: '20px' }}>
          <span style={{ fontSize: '28px' }}><strong>2021</strong></span>
        </Badge>
        <br />
        <ThanksText>
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
        <Badge color="#63B4EF" style={{ padding: '20px' }}>
          <span style={{ fontSize: '28px' }}><strong>2022</strong></span>
        </Badge>
        <br />
        <ThanksText>
          1. Quevedo
          <br />
          2. Colorado
          <br />
          3. Vila Hilda
          <br />
          4. Tupanciretã
          <br />
          5. Salgado Filho
          <br />
          6. Medianeira
          <br />
          7. Faxinal de Dentro
          <br />
          8. Alegrete
          <br />
          9.  São Borja
          <br />
          10. Cachoeirinha
          <br />
          <br />
          <br />
        </ThanksText>
        <ThanksText>
          <strong>Batismos por influência da TV, rádio, web e equipes Novo Tempo:</ strong>
        </ThanksText>
        <br />
        <img src={image24} alt="" />
        <br />
        <br />
        <HighlightsTitle>Escola Sabatina</HighlightsTitle>
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
          <strong>Roda do Discipulado</ strong>
        </ThanksText>
        <br />
        <img src={image30} alt="" />
        <br />
        <img src={image31} alt="" />
        <br />
        <img src={image32} alt="" />
        <br />
        <img src={image33} alt="" />
        <br />
        <img src={image34} alt="" />
        <br />
        <img src={image35} alt="" />
        <br />
        <img src={image36} alt="" />
        <br />
        <img src={image37} alt="" />
        <br />
        <br />
        <HighlightsTitle>Dados da Escola Sabatina</HighlightsTitle>
        <br />
        <ThanksText>
        A estrutura que mais traz unidade para a IASD é a Escola Sabatina, 
        pois em cada Igreja tem uma Escola Sabatina funcionando com o estudo da mesma lição. 
        Seguem os números de Escolas Sabatinas ativas deste quadriênio:
        </ThanksText>
        <br />
        <ThanksText>* Dados até 3º trimestre/2022.</ThanksText>
        <br />
        <img src={image38} alt="" />
        <br />
        <img src={image39} alt="" />
        <br />
        <br />
        <HighlightsTitle>Verbas para treinamentos (C1S1)</HighlightsTitle>
        <br />
        <ThanksText>
          Cada distrito da ACSR recebe uma verba anual para investir em treinamentos 
          para o Discipulado. Seguem os valores de verba de treinamento do quadriênio:
        </ThanksText>
        <br />
        <img src={image40} alt="" />
        <br />
        <br />
        <HighlightsSubTitle><strong>Associação Ministerial</strong></HighlightsSubTitle>
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
        <img src={image41} alt="" />
        <br />
        <img src={image42} alt="" />
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
          Agradeço, em primeiro lugar, a Deus pelo chamado ao Ministério 
          e por ter me guiado até aqui. Agradeço à minha esposa, Bianca Lorini e 
          aos meus filhos, Emily e Henrique, por sempre apoiarem de forma 
          incondicional meu Ministério, colocando a Deus em primeiro lugar. 
          Agradeço à minha mãe, Lourdes Lorini, por ter colocado em meu coração,
          desde a infância, o temor do Senhor e por ter sido fundamental 
          para que me formasse um pastor. 
          <br />
          <br />
          Grato também sou às minhas secretárias nesse quadriênio: 
          Stéphany Claro, Keila Moreles, Andressa Cruz, Ellen Silva e 
          Rosângela Borges. Além delas, grato sou à Marissol Pasqualetto 
          que trabalhou como secretária para o relatório da Escola Sabatina. 
          Agradeço aos demais familiares e amigos por fazerem parte deste 
          Ministério. Nossa gratidão e reconhecimento pelo trabalho de meu 
          antecessor na área Ministerial, pastor Rogério Gurniak. Gratidão também ao 
          pastor Juscelino Ferreira que atuou durante o quadriênio como coordenador 
          do Ministério Novo Tempo com resultados fantásticos.
          <br />
          <br />
          Também agradeço aos líderes da USB, pastor Fabio Correa como líder 
          MIPES e pastor Elieser Vargas como líder Ministerial. 
          Agradeço à Administração da ACSR pela confiança e apoio sem medida. 
          Deixo aqui igualmente meu apreço e gratidão aos colegas Departamentais, 
          na ACSR trabalhamos como uma família. 
          <br />
          <br />
          E concluo agradecendo a cada pastor, ao ancionato e a toda liderança 
          do Ministério Pessoal e Escola Sabatina: vocês honraram a Deus com 
          vosso comprometimento e trabalho!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JoaoLorini;

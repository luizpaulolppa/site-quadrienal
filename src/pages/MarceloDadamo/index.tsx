import React, { useEffect, useState } from "react";

import marcelo from "../../assets/marcelo-dadamo/marcelo-without-back.png";
import composition from "../../assets/marcelo-dadamo/composition.png";
import batismos from "../../assets/marcelo-dadamo/batismos.png";
import capacitacoes from "../../assets/marcelo-dadamo/capacitacoes.png";
import missionarios from "../../assets/marcelo-dadamo/missionarios.png";
import domingosEspeciais from "../../assets/marcelo-dadamo/domingos-especiais.png";
import resultados1 from "../../assets/marcelo-dadamo/resultados1.png";
import resultados2 from "../../assets/marcelo-dadamo/resultados2.png";
import resultados3 from "../../assets/marcelo-dadamo/resultados3.png";
import resultados4 from "../../assets/marcelo-dadamo/resultados4.png";
import resultados5 from "../../assets/marcelo-dadamo/resultados5.png";


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
  EntriesAndMoveOutContainer,
  EntriesAndMoveOutTitle,
  EntriesAndMoveOutSubtitle,
  EntriesAndMoveText,
  HighlightsSubTitle,
} from "./styles";
import { RedBox } from "../JuraciHauser/styles";


const MarceloDadamo: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function linkToDepartamentsSection() {
    navigate("/?departamentos=true");
  }

  if (openMenu) {
    return <Menu link={linkToDepartamentsSection} onClose={() => setOpenMenu(false)} />;
  }

  return (
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <TitleContainer id="section1">
        <ImageContainer>
          <img src={marcelo} alt="Marcelo" />
        </ImageContainer>
        <Name>
          Pr.
          <br />Marcelo
          <br />Dadamo
        </Name>
        <Role>
          Evangelismo
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“D</FirstLetter>
            <Text>
              eem graças ao Senhor, invoquem o seu nome; tornem conhecidos entre os
            </Text>
          </TextCapitularContainer>
          <Text>
          povos os seus feitos” 
          <br /><br />
          (Sl 105:1).
          <br /><br />
          “Avante! Obedeçamos à ordem, […] Deus pede um contínuo progresso na difusão de 
          luz […] Avançai” 
          <br /><br />
          (Ellen G. White, Serviço Cristão, p. 103).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsText>
          O Evangelismo é uma área da igreja que leva cada cristão à proclamação das 
          ‘Boas Novas da Salvação em Jesus Cristo’, para fazer a reconciliação do 
          pecador com Deus, o Pai, e o Filho, através do poder do Espírito Santo. 
          Para a participação nesta obra, é necessário ter a compreensão e a experiência 
          pessoal em relação ao evangelho eterno. É esse evangelho que, finalmente, 
          traz crença, confissão, conversão, batismo, discipulado e a promessa de vida 
          eterna.
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          É importante também que evangelismo e testemunho se apresentem como um 
          processo contínuo e não apenas um programa. “As mais solenes verdades […] 
          deve ser nossa obra. […] O mundo precisa ser advertido, e o povo de Deus 
          deve ser fiel ao legado que se lhe confiou” 
          (Ellen G. White, Evangelismo, p. 120). O apóstolo Paulo afirma que “[…] o 
          evangelho […] é o poder de Deus para a salvação de todo aquele que crê” 
          (Rm 1:16).
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Os dados a seguir demonstram o resultado do esforço conjunto de nossos líderes, 
          bem como de nossos irmãos que se comprometeram com a causa do Mestre. 
          É também uma oportunidade para oferecermos a nossa gratidão a Deus por tão 
          grandes bênçãos concedidas à Sua igreja no território da Associação Central 
          Sul Rio-Grandense.
        </HighlightsText>
        <br /><br />
        <HighlightsTitle>Equipe de Apoio</HighlightsTitle>
        <br /><br />

        <HighlightsText>
          O departamento de Evangelismo da ACSR foi reestruturado a partir de 2019. 
          Desde então, conta com a seguinte equipe e suas funções:
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          •	Secretária para atender às demandas do Departamento de Evangelismo;<br />
          •	Obreiros bíblicos que ajudam nas semanas de colheita e projetos de 
          plantio e revitalização de igrejas;<br />
          •	Evangelistas regionais que organizam os movimentos evangelísticos da 
          região e capacitam os evangelistas distritais;<br />
          •	Evangelistas distritais são responsáveis por capacitar e discipular o 
          evangelista de elite;<br />
          •	Evangelistas elite preparam com o diretor de Ministério Pessoal a formação 
          das duplas missionárias, os evangelismos de Semana Santa, Primavera e 
          Evangelismo Integrado.<br />
        </HighlightsText>

        <br /><br />
        <HighlightsTitle>Composição do departamento de Evangelismo neste quadriênio:</HighlightsTitle>
        <br /><br />

        <img src={composition} alt="Composição envangelismo" />

        <br /><br />
      </HighlightsContainer>

      <EntriesAndMoveOutContainer>
        <br /><br />
        <EntriesAndMoveOutTitle>Batismo</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveText>
          Podemos observar, conforme o gráfico abaixo, que no ano de 2020 os batismos 
          caíram devido à pandemia, mas em 2021, já com parte da população vacinada, 
          tivemos o segundo maior batismo do quadriênio. 
        </EntriesAndMoveText>
        <br /><br />
        <img src={batismos} alt="Batismos" />
        <br /><br />
        <EntriesAndMoveOutTitle>Escola de Missões Regional</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveText>
          A Escola de Missões capacita os evangelistas regionais, distritais e elite nas 
          seis regiões. Em 2022, a região de POA I e II foi dividida, atualmente, o 
          território está composto por sete regiões. Esta divisão proporciona maior 
          proximidade com a igreja local.
          <br /><br /><br /><br />
          Durante os encontros, os evangelistas foram desafiados a formar novos líderes, 
          envolver os recentes na fé e investir nas novas gerações. Também foram desafiados 
          a realizarem os evangelismos de Semana Santa, Semanas de Colheitas, Domingos 
          Especiais e Escola de Missões.
        </EntriesAndMoveText>
        <br /><br />
        <EntriesAndMoveOutSubtitle>Capacitações Regionais Realizadas</EntriesAndMoveOutSubtitle>
        <img src={capacitacoes} alt="Capacitação" />
        <br /><br />
        <EntriesAndMoveOutSubtitle>Missionários Cadastrados</EntriesAndMoveOutSubtitle>
        <img src={missionarios} alt="Missionários" />
        <br /><br />
      </EntriesAndMoveOutContainer>

      <HighlightsContainer>
        <br /> <br />
        <HighlightsTitle>Domingos Especiais</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Os Domingos Especiais são realizados pelos evangelistas locais, pastores, 
          anciãos, diretores de grupo, Ministério Pessoal e Ministério Jovem. Pessoas 
          estão sendo batizadas como resultado do evangelismo voluntário como um processo 
          natural de discipulado. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Outro ponto a ressaltar foi o crescimento de igrejas que começaram a realizar 
          os Domingos Especiais. Esse aumento de pessoas e igrejas envolvidas foi ainda 
          maior em 2021, subindo de 18% em 2020 para 83% em 2021. Este avanço deve-se ao 
          controle realizado através das vacinas contra o coronavírus, apoio dos pastores 
          distritais e à mobilização conduzida pelos evangelistas treinados.
        </HighlightsText>      
        <br /> <br />
        <img src={domingosEspeciais} alt="Domingos especiais" />
        <br /><br />
        <HighlightsTitle>Semanas de Colheita</HighlightsTitle>
        <br /><br />
        <HighlightsSubTitle>Resultados</HighlightsSubTitle>
        <br /><br />
        <HighlightsText>Evangelismo com pastor distrital</HighlightsText>      
        <br /> 
        <img src={resultados1} alt="Resultados" />
        <br /><br />
        <HighlightsText>Evangelismo de Colheita (Dep. Evangelismo)</HighlightsText>      
        <br /> 
        <img src={resultados2} alt="Resultados" />
        <br /><br />
        <HighlightsText>Evangelismo de Primavera</HighlightsText>      
        <br />
        <img src={resultados3} alt="Resultados" />
        <br /><br />
        <HighlightsText>Evangelismo com evangelistas voluntários</HighlightsText>      
        <br />
        <img src={resultados4} alt="Resultados" />
        <br /><br />
        <HighlightsSubTitle>Total</HighlightsSubTitle>
        <br />
        <img src={resultados5} alt="Resultados" />
        <br /><br />
        <HighlightsText>*Meta para 2022. Será preciso aguardar até agosto deste ano.</HighlightsText>      
        <br /> <br />
      </HighlightsContainer>
      <RedBox>
        <br /><br />
        <span className="title">Caravanas e Impacto Regional</span>
        <br /><br />
        Existem dois resultados muito importantes nos impactos regionais:
        <br />
        <br />
        1° o envolvimento de fiéis no ensino da palavra de Deus para aqueles 
        que a conhecem, que afirmam sentir-se impactados pelo amor de Jesus e 
        saem motivados a um compromisso religioso mais profundo.
        <br />
        <br />
        2° as decisões tomadas pelos convidados e o 
        comprometimento deles em relação à pregação da volta de Jesus.
        <br />
        <br />
        <span>
          O aumento do público geral, interessados, pessoas que atenderam ao apelo e 
          batismos, foi a estratégia usada para ocuparmos os auditórios com 50% de 
          interessados e estudantes da Bíblia e 50% de membros da Igreja Adventista do 
          Sétimo Dia.
        </span>   
        <br /><br /><br /><br />
      </RedBox>
      <ThanksContainer>
        <br /><br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default MarceloDadamo;

import React, { useEffect, useState } from "react";

import marcelo from "../../assets/marcelo-dadamo/marcelo-without-back.jpg";
import composition from "../../assets/marcelo-dadamo/composition.png";
import batismos from "../../assets/marcelo-dadamo/batismos.png";
import capacitacoes from "../../assets/marcelo-dadamo/capacitacoes.png";
import missionarios from "../../assets/marcelo-dadamo/missionarios.png";
import domingosEspeciais from "../../assets/marcelo-dadamo/domingos-especiais.png";
import plantil from "../../assets/marcelo-dadamo/plantil.png";
import resultados1 from "../../assets/marcelo-dadamo/resultados1.png";
import resultados2 from "../../assets/marcelo-dadamo/resultados2.png";
import resultados3 from "../../assets/marcelo-dadamo/resultados3.png";
import resultados4 from "../../assets/marcelo-dadamo/resultados4.png";
import resultados5 from "../../assets/marcelo-dadamo/resultados5.png";
import resultados6 from "../../assets/marcelo-dadamo/resultados6.png";
import resultados7 from "../../assets/marcelo-dadamo/resultados7.png";
import resultados8 from "../../assets/marcelo-dadamo/resultados8.png";
import resultados9 from "../../assets/marcelo-dadamo/resultados9.png";
import resultados10 from "../../assets/marcelo-dadamo/resultados10.png";
import resultados11 from "../../assets/marcelo-dadamo/resultados11.png";
import resultados12 from "../../assets/marcelo-dadamo/resultados12.png";
import resultados13 from "../../assets/marcelo-dadamo/resultados13.png";
import resultados14 from "../../assets/marcelo-dadamo/resultados14.png";
import resultados15 from "../../assets/marcelo-dadamo/resultados15.png";
import resultados16 from "../../assets/marcelo-dadamo/resultados16.png";
import resultados17 from "../../assets/marcelo-dadamo/resultados17.png";
import resultados18 from "../../assets/marcelo-dadamo/resultados18.png";
import resultados19 from "../../assets/marcelo-dadamo/resultados19.png";
import resultados20 from "../../assets/marcelo-dadamo/resultados20.png";
import resultados21 from "../../assets/marcelo-dadamo/resultados21.png";
import resultados22 from "../../assets/marcelo-dadamo/resultados22.png";


import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import diagonalArrowRed from "../../assets/diagonal-arrow-red.png";
import diagonalArrowYellow from "../../assets/diagonal-arrow-yellow.png";
import diagonalArrowGreen from "../../assets/diagonal-arrow-green.png";
import diagonalArrowBlue from "../../assets/diagonal-arrow-blue.png";

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
  LabelContainer,
  Badge,
  FormerReligionTitle,
  FormerReligionContainer,
  RedBox,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const MarceloDadamo: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade1") as Element;
    const el1 = document.querySelector("#fade2") as Element;
    const el2 = document.querySelector("#fade3") as Element;
    const el3 = document.querySelector("#fade4") as Element;


    const elTrigger = document.querySelector("#start_fade1") as Element;
    elements.push(el);
    elements.push(el1);
    elements.push(el2);
    elements.push(el3);


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
      <div id="start_fade1"></div>
      <RedBox>
        <br /><br /><br />
        <FadeIn id='fade1' duration="3s" delay="0.2s">
          <span className="title">Caravanas e Impacto Regional</span>
          <br /><br />
          <span className="sub-title">
            Existem dois resultados muito importantes nos impactos regionais:
          </span>
        </FadeIn>
          <br /><br /><br />
          <div className="card">
            <FadeIn id='fade2' duration="3s" delay="0.2s">
              <span className="number">1°</span> o envolvimento de fiéis no ensino da palavra de Deus para aqueles 
              que a conhecem, que afirmam sentir-se impactados pelo amor de Jesus e 
              saem motivados a um compromisso religioso mais profundo.
            </FadeIn>
          </div>
          <br /><br />
          <div className="card">
            <FadeIn id='fade3' duration="3s" delay="0.2s">
            <span className="number">2°</span> as decisões tomadas pelos convidados e o 
            comprometimento deles em relação à pregação da volta de Jesus.
            </FadeIn>
          </div>
          <br /> <br /><br />
          <FadeIn id='fade4' duration="3s" delay="0.2s">
            <span className="footer">
              O aumento do público geral, interessados, pessoas que atenderam ao apelo e 
              batismos, foi a estratégia usada para ocuparmos os auditórios com <span className="number">50%</span> de 
              interessados e estudantes da Bíblia e <span className="number">50%</span> de membros da Igreja Adventista do 
              Sétimo Dia.
            </span>
          </FadeIn>
        <br /><br /><br /><br />
      </RedBox>
      <HighlightsContainer>
        <br /><br />
        <HighlightsTitle>Resultados</HighlightsTitle>
        <br /><br />
        <HighlightsText>Pontos</HighlightsText>      
        <br /> 
        <img src={resultados6} alt="Resultados" />
        <br /><br />
        <HighlightsText>Público</HighlightsText>      
        <br /> 
        <img src={resultados7} alt="Resultados" />
        <br /><br />
        <HighlightsText>Distritos alcançados</HighlightsText>      
        <br />
        <img src={resultados8} alt="Resultados" />
        <br /><br />
        <HighlightsText>Pedidos Estudos Bíblicos</HighlightsText>      
        <br />
        <img src={resultados9} alt="Resultados" />
        <br /><br />
        <HighlightsText>Interessados</HighlightsText>
        <br />
        <img src={resultados10} alt="Resultados" />
        <br /><br />
        <HighlightsText>Pedidos para batismo</HighlightsText>
        <br />
        <img src={resultados11} alt="Resultados" />
        <br /><br />
        <HighlightsText>Atenderam ao apelo</HighlightsText>
        <br />
        <img src={resultados12} alt="Resultados" />
        <br /><br />
        <HighlightsText>Batismos realizados</HighlightsText>
        <br />
        <img src={resultados13} alt="Resultados" />
        <br /><br />
        <HighlightsTitle>Total</HighlightsTitle>
        <br />
        <img src={resultados14} alt="Resultados" />
        <br /><br /><br /> <br />    
        <HighlightsTitle>Missão Global</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Um dos marcos-chave na história da Missão Adventista do Sétimo Dia foi 
          a criação da Missão Global em 1990. Essa atenção focada na missão não está 
          apenas no território geográfico, mas também nos grupos de pessoas. 
          Ela desviou a atenção das áreas onde a Igreja era relativamente forte para 
          as áreas onde ela era fraca ou inexistente. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Em vez de buscar fazer crescer as congregações existentes ao atrair novos 
          membros (o que, naturalmente, é importante), o objetivo da Missão Global é 
          ir à comunidade para iniciar novas congregações e revitalizar igrejas que 
          estão fracas. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Mediante um programa pioneiro, a Missão Global opera uma abordagem holística, 
          refletindo o que Ellen White se refere como o método de Cristo. Quando 
          pensamos no Retorno de Jesus Cristo, sempre nos vem à mente a afirmação 
          do Mestre em seu sermão profético: 
        </HighlightsText>
        <br /> <br />
        <HighlightsTitle>
          “E será pregado este evangelho do Reino por todo o mundo, para testemunho 
          a todas as nações. Então virá o fim” (Mt 24:14). 
        </HighlightsTitle>
        <br /> <br />
        <HighlightsText>Municípios da ACSR</HighlightsText>      
        <br /> 
        <img src={resultados15} alt="Resultados" />
        <br /><br />
        <HighlightsText>Com presença adventista</HighlightsText>      
        <br /> 
        <img src={resultados16} alt="Resultados" />
        <br /><br />
        <HighlightsText>Sem presença adventista</HighlightsText>      
        <br />
        <img src={resultados17} alt="Resultados" />
        <br /><br />
        <HighlightsText>Famílias isoladas</HighlightsText>      
        <br />
        <img src={resultados18} alt="Resultados" />
        <br /><br />
        <HighlightsText>Distritos envolvidos em plantio</HighlightsText>
        <br />
        <img src={resultados19} alt="Resultados" />
        <br /><br />
        <HighlightsText>Número de Igrejas plantadas</HighlightsText>
        <br />
        <img src={resultados20} alt="Resultados" />
        <br /><br />
        <HighlightsText>Número de Igrejas revitalizadas</HighlightsText>
        <br />
        <img src={resultados21} alt="Resultados" />
        <br /><br />
        <HighlightsTitle>Total</HighlightsTitle>
        <br />
        <img src={resultados22} alt="Resultados" />
        <br /> <br />
        <HighlightsText>
          Obs.: Em 2022, 39 igrejas da Região das Missões iniciaram o processo de 
          Revitalização.
        </HighlightsText>
        <br /> <br />
        <HighlightsTitle>Plantio de Igrejas</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Avaliamos os nossos desafios de Missão Global e abraçamos com a 
          União Sul Brasileira o projeto ‘Plantador Nível 5’, que tem duração de 
          um ano e acontece em quatro módulos. O projeto visa criar um movimento 
          de plantio de novas igrejas nas grandes cidades através do encontro semanal 
          ou quinzenal do núcleo-base, e nas pequenas cidades, por método tradicional 
          de plantio (Evangelismo Público).
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Em 2021, com a permissão da USB, a ACSR adaptou o programa com uma nova 
          proposta e demos o nome de ‘PANTE’. Nosso maior desafio são as grandes 
          cidades, como a nossa capital. Atualmente, 40% do território geográfico 
          de Porto Alegre está sob responsabilidade da ACSR, e a média atual é de 
          um adventista para cada 215 habitantes. Neste quadriênio, 18 novas 
          congregações surgiram e outras 16 estão no processo de organização.
        </HighlightsText>
        <br /> <br />
      </HighlightsContainer>
      <FormerReligionContainer>
        <FormerReligionTitle>Igrejas Plantadas</FormerReligionTitle>
        <br /><br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Higienópolis</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nancy</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Paquetá</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Tiro</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CAMAR</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>CVS Caxias</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Giruá - Centro</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Altos dos Galópolis</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>CASM – Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Menino Jesus – Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Rio Branco – Caxias do Sul</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Patronato – Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferroviário – Montenegro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>IASD Haitiana – Caxias do Sul</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>IASD Haitiana – Bento Gonçalves</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>*Aguardando dados*</span>
          </div>
        </LabelContainer>
      </FormerReligionContainer>
      <HighlightsContainer>
        <HighlightsTitle>Plantio de Igrejas</HighlightsTitle>
        <br /> <br />
        <img src={plantil} alt="Plantil de igrejas" />
        <br /> <br />
        <HighlightsTitle>Revitalização de Igrejas</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Além da abertura de novas igrejas em municípios e bairros sem presença 
          adventista, a partir de 2021, a ACSR iniciou um projeto chamado ‘REVITALIZE’, 
          ue tem o objetivo de revitalizar Igrejas com menor infraestrutura e maiores 
          necessidades em todas as áreas. Estamos recebendo uma subvenção da USB para 
          cinco igrejas ou grupos, sendo que 90% são para o investimento no prédio e 
          10% no pessoal. A ACSR também entra com o mesmo valor e a distribuição é na 
          mesma porcentagem.
        </HighlightsText>
        <br />
      </HighlightsContainer>
      <FormerReligionContainer>
        <FormerReligionTitle>Igrejas Revitalizadas</FormerReligionTitle>
        <br /><br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Coqueiros</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Timbaúva II</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Passo das Pedras</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Asa Branca – Sarandi</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Central – Bairro Pioneiro </span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Cidade Nova – Esplanada</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Coqueiros – Vila Jardim</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Portão Velho – Portão</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Reolon – Esplanada</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>São Sepé – Camobi</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Serrano – Bairro Cruzeiro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Vila Ferroviária – Montenegro</span>
          </div>
        </LabelContainer>
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <LabelContainer>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Carlos Barbosa – Farroupilha</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Harmonia – Mathias Velho</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Estância Velha – Canoas</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Fazendinha – Igara</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Vila Hilda – Cruz Alta</span>
          </div>
        </LabelContainer>
      </FormerReligionContainer>
      <ThanksContainer>
        <br /><br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
          Damos louvor e gratidão a Deus pela vida e salvação em Cristo Jesus.
          <br />
          <br />
          Aos administradores e departamentais da União Sul Brasileira e de nossa 
          Associação pelo apoio e companheirismo. 
          <br />
          <br />
          Aos pastores distritais pelo carinho e pela amizade, aos dedicados obreiros 
          bíblicos, evangelistas regionais, distritais, elite e líderes de igrejas pelo 
          envolvimento, e às minhas secretárias que me acompanharam durante este 
          quadriênio.
          <br />
          <br />
          Reconhecimento e gratidão à minha amada esposa, Nilcelaine Ribeiro, e aos 
          meus filhos, Pâmela e Marcelo.
          <br />
          <br />
          Ao relatar o que o Senhor tem feito por Sua igreja no território da ACSR, 
          podemos afirmar: “Graças te rendemos, ó Deus, graças te rendemos! Invocamos 
          o teu nome, e declaramos as tuas maravilhas” (Sl 75:1).
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default MarceloDadamo;

import React, { useEffect, useState } from "react";

import marcelo from "../../assets/marcelo-dadamo/marcelo-without-back.png";
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
            <FirstLetter>???D</FirstLetter>
            <Text>
              eem gra??as ao Senhor, invoquem o seu nome; tornem conhecidos entre os
            </Text>
          </TextCapitularContainer>
          <Text>
          povos os seus feitos??? 
          <br /><br />
          (Sl 105:1).
          <br /><br />
          ???Avante! Obede??amos ?? ordem, [???] Deus pede um cont??nuo progresso na difus??o de 
          luz [???] Avan??ai??? 
          <br /><br />
          (Ellen G. White, Servi??o Crist??o, p. 103).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsText>
          O Evangelismo ?? uma ??rea da igreja que leva cada crist??o ?? proclama????o das 
          ???Boas Novas da Salva????o em Jesus Cristo???, para fazer a reconcilia????o do 
          pecador com Deus, o Pai, e o Filho, atrav??s do poder do Esp??rito Santo. 
          Para a participa????o nesta obra, ?? necess??rio ter a compreens??o e a experi??ncia 
          pessoal em rela????o ao evangelho eterno. ?? esse evangelho que, finalmente, 
          traz cren??a, confiss??o, convers??o, batismo, discipulado e a promessa de vida 
          eterna.
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          ?? importante tamb??m que evangelismo e testemunho se apresentem como um 
          processo cont??nuo e n??o apenas um programa. ???As mais solenes verdades [???] 
          deve ser nossa obra. [???] O mundo precisa ser advertido, e o povo de Deus 
          deve ser fiel ao legado que se lhe confiou??? 
          (Ellen G. White, Evangelismo, p. 120). O ap??stolo Paulo afirma que ???[???] o 
          evangelho [???] ?? o poder de Deus para a salva????o de todo aquele que cr????? 
          (Rm 1:16).
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Os dados a seguir demonstram o resultado do esfor??o conjunto de nossos l??deres, 
          bem como de nossos irm??os que se comprometeram com a causa do Mestre. 
          ?? tamb??m uma oportunidade para oferecermos a nossa gratid??o a Deus por t??o 
          grandes b??n????os concedidas ?? Sua igreja no territ??rio da Associa????o Central 
          Sul Rio-Grandense.
        </HighlightsText>
        <br /><br />
        <HighlightsTitle>Equipe de Apoio</HighlightsTitle>
        <br /><br />

        <HighlightsText>
          O departamento de Evangelismo da ACSR foi reestruturado a partir de 2019. 
          Desde ent??o, conta com a seguinte equipe e suas fun????es:
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          ???	Secret??ria para atender ??s demandas do Departamento de Evangelismo;<br />
          ???	Obreiros b??blicos que ajudam nas semanas de colheita e projetos de 
          plantio e revitaliza????o de igrejas;<br />
          ???	Evangelistas regionais que organizam os movimentos evangel??sticos da 
          regi??o e capacitam os evangelistas distritais;<br />
          ???	Evangelistas distritais s??o respons??veis por capacitar e discipular o 
          evangelista de elite;<br />
          ???	Evangelistas elite preparam com o diretor de Minist??rio Pessoal a forma????o 
          das duplas mission??rias, os evangelismos de Semana Santa, Primavera e 
          Evangelismo Integrado.<br />
        </HighlightsText>

        <br /><br />
        <HighlightsTitle>Composi????o do departamento de Evangelismo neste quadri??nio:</HighlightsTitle>
        <br /><br />

        <img src={composition} alt="Composi????o envangelismo" />

        <br /><br />
      </HighlightsContainer>

      <EntriesAndMoveOutContainer>
        <br /><br />
        <EntriesAndMoveOutTitle>Batismo</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveText>
          Podemos observar, conforme o gr??fico abaixo, que no ano de 2020 os batismos 
          ca??ram devido ?? pandemia, mas em 2021, j?? com parte da popula????o vacinada, 
          tivemos o segundo maior batismo do quadri??nio. 
        </EntriesAndMoveText>
        <br /><br />
        <img src={batismos} alt="Batismos" />
        <br /><br />
        <EntriesAndMoveOutTitle>Escola de Miss??es Regional</EntriesAndMoveOutTitle>
        <br />
        <EntriesAndMoveText>
          A Escola de Miss??es capacita os evangelistas regionais, distritais e elite nas 
          seis regi??es. Em 2022, a regi??o de POA I e II foi dividida, atualmente, o 
          territ??rio est?? composto por sete regi??es. Esta divis??o proporciona maior 
          proximidade com a igreja local.
          <br /><br /><br /><br />
          Durante os encontros, os evangelistas foram desafiados a formar novos l??deres, 
          envolver os recentes na f?? e investir nas novas gera????es. Tamb??m foram desafiados 
          a realizarem os evangelismos de Semana Santa, Semanas de Colheitas, Domingos 
          Especiais e Escola de Miss??es.
        </EntriesAndMoveText>
        <br /><br />
        <EntriesAndMoveOutSubtitle>Capacita????es Regionais Realizadas</EntriesAndMoveOutSubtitle>
        <img src={capacitacoes} alt="Capacita????o" />
        <br /><br />
        <EntriesAndMoveOutSubtitle>Mission??rios Cadastrados</EntriesAndMoveOutSubtitle>
        <img src={missionarios} alt="Mission??rios" />
        <br /><br />
      </EntriesAndMoveOutContainer>

      <HighlightsContainer>
        <br /> <br />
        <HighlightsTitle>Domingos Especiais</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Os Domingos Especiais s??o realizados pelos evangelistas locais, pastores, 
          anci??os, diretores de grupo, Minist??rio Pessoal e Minist??rio Jovem. Pessoas 
          est??o sendo batizadas como resultado do evangelismo volunt??rio como um processo 
          natural de discipulado. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Outro ponto a ressaltar foi o crescimento de igrejas que come??aram a realizar 
          os Domingos Especiais. Esse aumento de pessoas e igrejas envolvidas foi ainda 
          maior em 2021, subindo de 18% em 2020 para 83% em 2021. Este avan??o deve-se ao 
          controle realizado atrav??s das vacinas contra o coronav??rus, apoio dos pastores 
          distritais e ?? mobiliza????o conduzida pelos evangelistas treinados.
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
        <HighlightsText>Evangelismo com evangelistas volunt??rios</HighlightsText>      
        <br />
        <img src={resultados4} alt="Resultados" />
        <br /><br />
        <HighlightsSubTitle>Total</HighlightsSubTitle>
        <br />
        <img src={resultados5} alt="Resultados" />
        <br /><br />
        <HighlightsText>*Meta para 2022. Ser?? preciso aguardar at?? agosto deste ano.</HighlightsText>      
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
              <span className="number">1??</span> o envolvimento de fi??is no ensino da palavra de Deus para aqueles 
              que a conhecem, que afirmam sentir-se impactados pelo amor de Jesus e 
              saem motivados a um compromisso religioso mais profundo.
            </FadeIn>
          </div>
          <br /><br />
          <div className="card">
            <FadeIn id='fade3' duration="3s" delay="0.2s">
            <span className="number">2??</span> as decis??es tomadas pelos convidados e o 
            comprometimento deles em rela????o ?? prega????o da volta de Jesus.
            </FadeIn>
          </div>
          <br /> <br /><br />
          <FadeIn id='fade4' duration="3s" delay="0.2s">
            <span className="footer">
              O aumento do p??blico geral, interessados, pessoas que atenderam ao apelo e 
              batismos, foi a estrat??gia usada para ocuparmos os audit??rios com <span className="number">50%</span> de 
              interessados e estudantes da B??blia e <span className="number">50%</span> de membros da Igreja Adventista do 
              S??timo Dia.
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
        <HighlightsText>P??blico</HighlightsText>      
        <br /> 
        <img src={resultados7} alt="Resultados" />
        <br /><br />
        <HighlightsText>Distritos alcan??ados</HighlightsText>      
        <br />
        <img src={resultados8} alt="Resultados" />
        <br /><br />
        <HighlightsText>Pedidos Estudos B??blicos</HighlightsText>      
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
        <HighlightsTitle>Miss??o Global</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Um dos marcos-chave na hist??ria da Miss??o Adventista do S??timo Dia foi 
          a cria????o da Miss??o Global em 1990. Essa aten????o focada na miss??o n??o est?? 
          apenas no territ??rio geogr??fico, mas tamb??m nos grupos de pessoas. 
          Ela desviou a aten????o das ??reas onde a Igreja era relativamente forte para 
          as ??reas onde ela era fraca ou inexistente. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Em vez de buscar fazer crescer as congrega????es existentes ao atrair novos 
          membros (o que, naturalmente, ?? importante), o objetivo da Miss??o Global ?? 
          ir ?? comunidade para iniciar novas congrega????es e revitalizar igrejas que 
          est??o fracas. 
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Mediante um programa pioneiro, a Miss??o Global opera uma abordagem hol??stica, 
          refletindo o que Ellen White se refere como o m??todo de Cristo. Quando 
          pensamos no Retorno de Jesus Cristo, sempre nos vem ?? mente a afirma????o 
          do Mestre em seu serm??o prof??tico: 
        </HighlightsText>
        <br /> <br />
        <HighlightsTitle>
          ???E ser?? pregado este evangelho do Reino por todo o mundo, para testemunho 
          a todas as na????es. Ent??o vir?? o fim??? (Mt 24:14). 
        </HighlightsTitle>
        <br /> <br />
        <HighlightsText>Munic??pios da ACSR</HighlightsText>      
        <br /> 
        <img src={resultados15} alt="Resultados" />
        <br /><br />
        <HighlightsText>Com presen??a adventista</HighlightsText>      
        <br /> 
        <img src={resultados16} alt="Resultados" />
        <br /><br />
        <HighlightsText>Sem presen??a adventista</HighlightsText>      
        <br />
        <img src={resultados17} alt="Resultados" />
        <br /><br />
        <HighlightsText>Fam??lias isoladas</HighlightsText>      
        <br />
        <img src={resultados18} alt="Resultados" />
        <br /><br />
        <HighlightsText>Distritos envolvidos em plantio</HighlightsText>
        <br />
        <img src={resultados19} alt="Resultados" />
        <br /><br />
        <HighlightsText>N??mero de Igrejas plantadas</HighlightsText>
        <br />
        <img src={resultados20} alt="Resultados" />
        <br /><br />
        <HighlightsText>N??mero de Igrejas revitalizadas</HighlightsText>
        <br />
        <img src={resultados21} alt="Resultados" />
        <br /><br />
        <HighlightsTitle>Total</HighlightsTitle>
        <br />
        <img src={resultados22} alt="Resultados" />
        <br /> <br />
        <HighlightsText>
          Obs.: Em 2022, 39 igrejas da Regi??o das Miss??es iniciaram o processo de 
          Revitaliza????o.
        </HighlightsText>
        <br /> <br />
        <HighlightsTitle>Plantio de Igrejas</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Avaliamos os nossos desafios de Miss??o Global e abra??amos com a 
          Uni??o Sul Brasileira o projeto ???Plantador N??vel 5???, que tem dura????o de 
          um ano e acontece em quatro m??dulos. O projeto visa criar um movimento 
          de plantio de novas igrejas nas grandes cidades atrav??s do encontro semanal 
          ou quinzenal do n??cleo-base, e nas pequenas cidades, por m??todo tradicional 
          de plantio (Evangelismo P??blico).
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Em 2021, com a permiss??o da USB, a ACSR adaptou o programa com uma nova 
          proposta e demos o nome de ???PANTE???. Nosso maior desafio s??o as grandes 
          cidades, como a nossa capital. Atualmente, 40% do territ??rio geogr??fico 
          de Porto Alegre est?? sob responsabilidade da ACSR, e a m??dia atual ?? de 
          um adventista para cada 215 habitantes. Neste quadri??nio, 18 novas 
          congrega????es surgiram e outras 16 est??o no processo de organiza????o.
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
            <span>Higien??polis</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Nancy</span>
          </div>
          <div>
            <img src={diagonalArrowRed} alt="Seta na diagonal vermelha" />
            <span>Paquet??</span>
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
            <span>Giru?? - Centro</span>
          </div>
          <div>
            <img src={diagonalArrowGreen} alt="Seta na diagonal verde" />
            <span>Altos dos Gal??polis</span>
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
            <span>CASM ??? Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Menino Jesus ??? Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Rio Branco ??? Caxias do Sul</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Patronato ??? Santa Maria</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Bairro Ferrovi??rio ??? Montenegro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>IASD Haitiana ??? Caxias do Sul</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>IASD Haitiana ??? Bento Gon??alves</span>
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
        <HighlightsTitle>Revitaliza????o de Igrejas</HighlightsTitle>
        <br /> <br />
        <HighlightsText>
          Al??m da abertura de novas igrejas em munic??pios e bairros sem presen??a 
          adventista, a partir de 2021, a ACSR iniciou um projeto chamado ???REVITALIZE???, 
          ue tem o objetivo de revitalizar Igrejas com menor infraestrutura e maiores 
          necessidades em todas as ??reas. Estamos recebendo uma subven????o da USB para 
          cinco igrejas ou grupos, sendo que 90% s??o para o investimento no pr??dio e 
          10% no pessoal. A ACSR tamb??m entra com o mesmo valor e a distribui????o ?? na 
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
            <span>Timba??va II</span>
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
            <span>Asa Branca ??? Sarandi</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Central ??? Bairro Pioneiro </span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Cidade Nova ??? Esplanada</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Coqueiros ??? Vila Jardim</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Port??o Velho ??? Port??o</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Reolon ??? Esplanada</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>S??o Sep?? ??? Camobi</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Serrano ??? Bairro Cruzeiro</span>
          </div>
          <div>
            <img src={diagonalArrowYellow} alt="Seta na diagonal amarela" />
            <span>Vila Ferrovi??ria ??? Montenegro</span>
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
            <span>Carlos Barbosa ??? Farroupilha</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Harmonia ??? Mathias Velho</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Est??ncia Velha ??? Canoas</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Fazendinha ??? Igara</span>
          </div>
          <div>
            <img src={diagonalArrowBlue} alt="Seta na diagonal azul" />
            <span>Vila Hilda ??? Cruz Alta</span>
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
          Damos louvor e gratid??o a Deus pela vida e salva????o em Cristo Jesus.
          <br />
          <br />
          Aos administradores e departamentais da Uni??o Sul Brasileira e de nossa 
          Associa????o pelo apoio e companheirismo. 
          <br />
          <br />
          Aos pastores distritais pelo carinho e pela amizade, aos dedicados obreiros 
          b??blicos, evangelistas regionais, distritais, elite e l??deres de igrejas pelo 
          envolvimento, e ??s minhas secret??rias que me acompanharam durante este 
          quadri??nio.
          <br />
          <br />
          Reconhecimento e gratid??o ?? minha amada esposa, Nilcelaine Ribeiro, e aos 
          meus filhos, P??mela e Marcelo.
          <br />
          <br />
          Ao relatar o que o Senhor tem feito por Sua igreja no territ??rio da ACSR, 
          podemos afirmar: ???Gra??as te rendemos, ?? Deus, gra??as te rendemos! Invocamos 
          o teu nome, e declaramos as tuas maravilhas??? (Sl 75:1).
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default MarceloDadamo;

import React, { useState } from "react";

import rogerio from "../../assets/rogerio-without-back.png";
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
  GreenBox,
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  Fade
} from "./styles";

const RogerioGurniak: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  if (openMenu) {
    return <Menu onClose={() => setOpenMenu(false)} />;
  }

  return (
    <Container>
      <MenuBlack
        onBack={() => navigate("/")}
        setOpenMenu={(data) => setOpenMenu(data)}
      />
      <TitleContainer>
        <ImageContainer>
          <img src={rogerio} alt="Rogerio" />
        </ImageContainer>
        <Fade></Fade>
        <Name>
          Pr.
          <br /> Rogério
          <br /> Gurniak
        </Name>
        <Role>Secretaria, Serviço Voluntário Adventista, Centro de Vida Saudável</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“O</FirstLetter>
            <Text>
              O coração de Deus anseia por Seus filhos terrestres com amor mais forte que a morte. 
            </Text>
          </TextCapitularContainer>
          <Text>
            Entregando Seu Filho, nesse único Dom derramou sobre nós todo o Céu. A vida, morte e intercessão do Salvador, o ministério dos anjos, o pleitear do Espírito, o Pai operando acima de tudo e por tudo, o interesse incessante dos seres celestiais — tudo se empenha em favor da redenção do homem” (Ellen G. White, Caminho a Cristo, p. 21).
          </Text>
        </TextContainer>
      </TitleContainer>
      <GreenBox>
        O Ministério da Secretaria tem objetivos claros:  
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
      </GreenBox>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
          Primeiramente, toda gratidão a Deus por todas as bênçãos derramadas sobre cada 
          membro da Igreja Adventista do Sétimo Dia da Associação Central Sul Rio-Grandense 
          e os cuidados que Ele tem com Seu povo ao longo dos últimos quatro anos. 
          <br /><br />
          Agradeço também à minha esposa, Ana Claudia Gurniak, que está sempre ao meu lado, 
          me inspirando a fazer o melhor na obra de Deus. Aos meus filhos, Leandro e Erick por 
          serem uma realização em minha vida. À minha mãe, Maria Clara Gurniak, por ter me dedicado ao Senhor, 
          mesmo sem saber que um dia eu estaria servindo ao nosso Deus.
          <br /><br />
          Grato também sou ao exército de voluntários que são a força do secretariado nas igrejas
          do nosso campo. Aos secretários distritais que são um time discipulador formando e capacitando 
          líderes neste departamento. Finalmente, grato à Rosângela Barragan e à Marissol Pasqualetto pela 
          dedicação e profissionalismo na Secretaria da ACRS.
          <br /><br />
          Nossa gratidão e reconhecimento pelo trabalho do pastor Elton Júnior, que dirigiu estes departamentos 
          com competência e dedicação por três anos (novembro de 2018–novembro de 2021). 
          Também agradeço ao pastor Harry Streithorst pela liderança e amizade neste ministério, 
          assim como ao pastor Charles Rampanelli que conduziu a Secretaria da USB até o ano de 2021, 
          por todo apoio e incentivo a este departamento da ACSR. 
          <br /><br />
          Deixo aqui igualmente meu apreço e gratidão aos colegas de Administração pastor 
          Marcos Júnior e Everson Braga pelo apoio e amizade.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default RogerioGurniak;

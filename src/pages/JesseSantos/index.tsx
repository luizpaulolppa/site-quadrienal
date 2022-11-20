import React, { useEffect, useState } from "react";

import jesse from "../../assets/jesse-santos/jesse-without-back.jpg";
import table from "../../assets/jesse-santos/table.png";
import batismo from "../../assets/jesse-santos/batismo.png";
import eventos from "../../assets/jesse-santos/eventos.png";

import image1 from "../../assets/jesse-santos/image1.png";
import image2 from "../../assets/jesse-santos/image2.png";
import image3 from "../../assets/jesse-santos/image3.png";
import image4 from "../../assets/jesse-santos/image4.png";
import image5 from "../../assets/jesse-santos/image5.png";
import image6 from "../../assets/jesse-santos/image6.png";
import image9 from "../../assets/jesse-santos/image9.png";
import image10 from "../../assets/jesse-santos/image10.png";
import image11 from "../../assets/jesse-santos/image11.png";
import image12 from "../../assets/jesse-santos/image12.png";

import arrowDownYellow from "../../assets/seta-para-baixo-light-yellow.png";
import arrowDownRed from "../../assets/seta-para-baixo-light-red.png";

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
  BoxLine,
  BoxRed,
  BoxPink2,
  BoxGreen2,
  BoxOrange,
  BoxPink,
  BoxBlue,
  BoxYellow,
  BoxGreen,
} from "./styles";

const JesseSantos: React.FC = () => {
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
          <img src={jesse} alt="Jesse" />
        </ImageContainer>
        <Name>
          Pr.
          <br /> Jessé
          <br /> Santos
        </Name>
        <Role>Desbravadores e Aventureiros</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“M</FirstLetter>
            <Text>as se nos entregarmos completamente a Deus, e seguirmos</Text>
          </TextCapitularContainer>
          <Text>
            Sua direção em nosso trabalho, Ele mesmo Se responsabilizará pelo
            cumprimento. Não quer que nos entreguemos a conjeturas sobre o êxito
            de nossos esforços honestos. Nem uma vez devemos pensar em fracasso.
            Devemos cooperar com Aquele que não conhece fracasso”.
            <br />
            <br />
            (Ellen G. White, Parábolas de Jesus, p. 363).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br />
        <br />
        <strong>
          <h2>Legado!</h2>
        </strong>
        <br />
        <HighlightsText>
          Quando se trata do Ministério de Desbravadores e Aventureiros é isso
          que nos impulsiona a prosseguir: deixar um legado de fé, amor e
          serviço no coração de nossas crianças e adolescentes. Deus, em Sua
          onisciência, capacitou homens e mulheres que, por gerações,
          construíram um ministério sólido, relevante e fundamental para nossa
          igreja. Sem sombra de dúvidas, estes ministérios são a maior escola de
          formação de líderes no mundo há mais de 70 anos!
        </HighlightsText>
        <br />
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
        <strong>Clube de Aventureiros</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={image1} alt="clube1" />
        <br />
        <br />
        <strong>Clube de Desbravadores</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={image2} alt="clube2" />
        <br />
        <br />
        <strong>Membros Aventureiros</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={image3} alt="clube3" />
        <br />
        <br />
        <strong>Membros Desbravadores</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={image4} alt="clube4" />
        <br />
        <br />
        <br />
        <img src={table} alt="table" />
        <br />
        <br />
        <img src={image6} alt="" />
        <br />
        <img src={image5} alt="" />
        <br />
        <br />
        <HighlightsTitle>Batismos</ HighlightsTitle>
        <br />
        <img src={image9} alt="batismo" />
        <br />
        <br />
        <img src={image10} alt="batismo" />
        <br />
        <br />
        <strong>
          <h2>Total de Batismos</h2>
        </strong>
        <br />
        <img src={image11} alt="batismo" />
        <br />
        <strong>
          <h2>
            TOTAL DOS 4 ANOS: <br /> <span className="green-text">1.291</span>
          </h2>
        </strong>
        <br />
        <br />
        <img src={image12} alt="batismo" />
        <br />
        <br />
      </HighlightsContainer>
      <ThanksContainer>
        <img src={arrowDownYellow} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Imensa gratidão a Deus pela jornada até aqui. Sem Ele, Seu favor,
          graça e amor nada seria possível.
          <br />
          <br />
          À minha esposa Jaqueline Almeida e meus filhos Matheus e Filipe, por
          serem pilares na minha caminhada e por me amarem e apoiarem
          incondicionalmente.
          <br />
          <br />
          Gratidão à nossa secretária Emilli Silva, que tem sido incansável 
          frente a esse ministério e a todos que fazem do MDA da ACSR uma realidade 
          crescente e transformadora. Agradeço também as orientações, conselhos do pastor 
          Aryel Marques, líder desse ministério para a região sul do Brasil e à 
          administração da ACSR, pastor Marcos Júnior, pastor Rogério Gurniak e Everson Braga, pelo apoio, 
          confiança e oportunidade.
          <br />
          <br />
          Agradeço ao pastor Fray Calderon que atuou no Ministério de Desbravadores 
          e Aventureiros nos anos 2018 a 2021, e ao pastor Uilialdo Barreto que assumiu no 
          período de 2021 até maio de 2022. Eles fizeram parte das conquistas e 
          aprendizados deixando um excelente legado.
          <br />
          <br />
          Seguimos confiantes na boa mão do nosso líder e Mestre Jesus Cristo!
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default JesseSantos;

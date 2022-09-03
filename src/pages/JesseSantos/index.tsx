import React, { useEffect, useState } from "react";

import jesse from "../../assets/jesse-santos/jesse-without-back.jpg";
import clube1 from "../../assets/jesse-santos/clube1.png";
import clube2 from "../../assets/jesse-santos/clube2.png";
import clube3 from "../../assets/jesse-santos/clube3.png";
import clube4 from "../../assets/jesse-santos/clube4.png";
import table from "../../assets/jesse-santos/table.png";
import batismo from "../../assets/jesse-santos/batismo.png";
import eventos from "../../assets/jesse-santos/eventos.png";

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
  HighlightsSubTitle,
  RedCard,
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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
            Devemos cooperar com Aquele que não conhece fracasso”
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
        <img src={clube1} alt="clube1" />
        <br />
        <br />
        <strong>Clube de Desbravadores</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={clube2} alt="clube2" />
        <br />
        <br />
        <strong>Membros Aventureiros</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={clube3} alt="clube3" />
        <br />
        <br />
        <strong>Membros Desbravadores</strong>
        <p className="red-text">(Quantidade por ano)</p>
        <br />
        <img src={clube4} alt="clube4" />
        <br />
        <br />
        <br />
        <img src={table} alt="table" />
        <br />
        <br />
        <strong>Batismos</strong>
        <p className="red-text">
          (Geral para faixa etária desbravador e aventureiro)
        </p>
        <br />
        <img src={batismo} alt="batismo" />
        <br />
        <br />
        <BoxLine>
          <BoxRed />
          <p>8 - 9 anos 2019</p>
        </BoxLine>
        <BoxLine>
          <BoxGreen />
          <p>8 - 9 anos 2020</p>
        </BoxLine>
        <BoxLine>
          <BoxYellow />
          <p>8 - 9 anos 2021</p>
        </BoxLine>
        <BoxLine>
          <BoxBlue />
          <p>8 - 9 anos 2022 (até junho)</p>
        </BoxLine>
        <BoxLine>
          <BoxPink />
          <p>10 - 15 anos 2019</p>
        </BoxLine>
        <BoxLine>
          <BoxOrange />
          <p>10 - 15 anos 2020</p>
        </BoxLine>
        <BoxLine>
          <BoxGreen2 />
          <p>10 - 15 anos 2021</p>
        </BoxLine>
        <BoxLine>
          <BoxPink2 />
          <p>10 - 15 anos 2022 (até junho)</p>
        </BoxLine>
        <br />
        <br />
        <strong>
          <h2>Total de Batismos</h2>
        </strong>
        <br />
        <p>
          2019 = <span className="green-text">503</span>
        </p>
        <p>
          2020 = <span className="green-text">185</span>
        </p>
        <p>
          2021 = <span className="green-text">381</span>
        </p>
        <p>
          2022 = <span className="green-text">86</span>
        </p>
        <br />
        <strong>
          <h2>
            TOTAL DOS 4 ANOS = <br /> <span className="green-text">1.155</span>
          </h2>
        </strong>
        <br />
        <br />
        <br />
        <strong>
          <h1>Dados de 2018</h1>
        </strong>
        <p>
          Clube de Aventureiros = <span className="green-text">62</span>
        </p>
        <p>
          Clube de Desbravadores = <span className="green-text">93</span>
        </p>
        <p>
          Membros Aventureiros = <span className="green-text">1378</span>
        </p>
        <p>
          Membros Desbravadores = <span className="green-text">2628</span>
        </p>
        <br />
        <br />
        <strong>Eventos</strong>
        <p className="red-text">(Número de participantes)</p>
        <br />
        <img src={eventos} alt="batismo" />
        <br />
        <br />
        <BoxLine>
          <BoxRed />
          <p>Mega Líder DBV 2018 - Todas Regiões</p>
        </BoxLine>
        <BoxLine>
          <BoxGreen />
          <p>Mega Líder AVT 2018 - Todas Regiões</p>
        </BoxLine>
        <BoxLine>
          <BoxYellow />
          <p>Olimpiada DBV - 2018</p>
        </BoxLine>
        <BoxLine>
          <BoxBlue />
          <p>Olimpori AVT - 2018</p>
        </BoxLine>
        <BoxLine>
          <BoxPink />
          <p>Calebe de Lenço 2018</p>
        </BoxLine>
        <BoxLine>
          <BoxOrange />
          <p>Cursos para Secretários, conselheiros e capitães</p>
        </BoxLine>
        <br />
        <br />
        <strong>
          <h2>Total</h2>
        </strong>
        <br />
        <p>
          Eventos 2015-2018 = <span className="green-text">31</span>
        </p>
        <p>
          Eventos 2019 = <span className="green-text">5</span>
        </p>
        <p>
          Eventos 2020 = <span className="green-text">5</span>
        </p>
        <p>
          Eventos 2021 = <span className="green-text">3</span>
        </p>
        <p>
          Eventos 2022 = <span className="green-text">8</span>
        </p>
        <br />
        <br />
        <strong>
          <h2>
            TOTAL 2019 A 2022 = <span className="green-text">21</span>
          </h2>
        </strong>
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
          Gratidão também a todos que fazem do MDA da ACSR uma realidade
          crescente e transformadora e à Administração da ACSR pelo apoio,
          confiança e oportunidade.
          <br />
          <br />
          Agradeço ao pastor Fray Calderon que esteve à frente do Ministério de
          Desbravadores e Aventureiros e fez parte das conquistas e aprendizados
          nos anos de 2018 a 2021.
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

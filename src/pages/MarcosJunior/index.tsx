import React, { useState } from "react";

import marcos from "../../assets/marcos-without-back.png";
import arrowDown from "../../assets/arrow-down-white.svg";

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
} from "./styles";

const MarcosJunior: React.FC = () => {
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
          <img src={marcos} alt="Marcos" />
        </ImageContainer>
        <Name>
          Pr.
          <br /> Marcos
          <br /> Junior
        </Name>
        <Role>Presidência</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>É</FirstLetter>
            <Text>
              com muita alegria que recebemos você, delegado da V Assembleia
              Quadrienal da Associação Central Sul.
            </Text>
          </TextCapitularContainer>
          <Text>
            Agradeço a Deus por chegarmos até aqui e a Ele todo louvor pelas
            vitórias alcançadas. Ao olhar para trás, sou muito grato à igreja na
            região central do Rio Grande do Sul, por todo o apoio e envolvimento
            neste período.
          </Text>
        </TextContainer>
      </TitleContainer>
      <GreenBox>
        Neste quadriênio, pela graça <br /> de Deus foi possível chegar a
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
      </GreenBox>
    </Container>
  );
};

export default MarcosJunior;

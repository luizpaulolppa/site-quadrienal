import React, { useState } from "react";

import marcos from "../../assets/marcos-without-back.png";
import arrowDown from "../../assets/arrow-down-white.svg";
import setaParaBaixo from "../../assets/seta-para-baixo-red.png";
import igrejaCinza from "../../assets/igreja-cinza.png";
import peopleCinza from "../../assets/people-cinza.png";
import peopleIgrejaCinza from "../../assets/people-igreja-cinza.png";
import membersTotal from "../../assets/members-total.png";
import pizzaCrm from "../../assets/pizza-crm.png";
import batismo from "../../assets/marcos-junior/batismo.png";
import comunhao from "../../assets/marcos-junior/comunhao.png";
import discipulado from "../../assets/marcos-junior/discipulado.png";
import estudosBiblicos from "../../assets/marcos-junior/estudos-biblicos.png";
import membrosPresentes from "../../assets/marcos-junior/membros-presentes.png";
import missao from "../../assets/marcos-junior/missao.png";
import relacionamento from "../../assets/marcos-junior/relacionamento.png";

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
  DataContainer,
  DataTitle,
  BoxData,
  BoxDataInfo,
  ItemBoxData,
  VerticalLine,
  MembersContainer,
  CrmContainer,
} from "./styles";

const MarcosJunior: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);
  const [graficoPosition, setGraficoPosition] = useState(0);
  const navigate = useNavigate();

  function getImg(imgPosition: number) {
    switch (imgPosition) {
      case 0:
        return <img src={pizzaCrm} alt="" />;
      case 1:
        return <img src={membrosPresentes} alt="" />;
      case 2:
        return <img src={comunhao} alt="" />;
      case 3:
        return <img src={relacionamento} alt="" />;
      case 4:
        return <img src={missao} alt="" />;
      case 5:
        return <img src={estudosBiblicos} alt="" />;
      case 6:
        return <img src={batismo} alt="" />;
      case 7:
        return <img src={discipulado} alt="" />;
    }
  }

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
      <DataContainer>
        <img src={setaParaBaixo} alt="setaParaBaixo" />
        <DataTitle>Dados</DataTitle>
        <ItemBoxData onMouseOver={() => setItemSelected(0)}>
          <VerticalLine show={itemSelected === 0} />
          <BoxData red={itemSelected === 0}>
            <img src={igrejaCinza} alt="Igreja" />
            <BoxDataInfo>
              <p>Igrejas</p>
              <p>130</p>
            </BoxDataInfo>
          </BoxData>
        </ItemBoxData>
        <ItemBoxData onMouseOver={() => setItemSelected(1)}>
          <VerticalLine show={itemSelected === 1} />
          <BoxData red={itemSelected === 1}>
            <img src={peopleCinza} alt="Igreja" />
            <BoxDataInfo>
              <p>Igrejas</p>
              <p>130</p>
            </BoxDataInfo>
          </BoxData>
        </ItemBoxData>
        <ItemBoxData onMouseOver={() => setItemSelected(2)}>
          <VerticalLine show={itemSelected === 2} />
          <BoxData red={itemSelected === 2}>
            <img src={peopleIgrejaCinza} alt="Igreja" />
            <BoxDataInfo>
              <p>Igrejas</p>
              <p>130</p>
            </BoxDataInfo>
          </BoxData>
        </ItemBoxData>
      </DataContainer>
      <MembersContainer>
        Total de membros <span>16.842</span>
        <img src={membersTotal} alt="membersTotal" />
      </MembersContainer>
      <CrmContainer>
        <p>CRM - ACSR</p>
        <select
          defaultValue={0}
          name="datas"
          id="datas"
          value={graficoPosition}
          onChange={(data) => setGraficoPosition(Number(data.target.value))}
        >
          <option value="0">Matriculados (%)</option>
          <option value="1">Membros Presentes (%)</option>
          <option value="2">Comunhão (%)</option>
          <option value="3">Relacionamento (%)</option>
          <option value="4">Missão (%)</option>
          <option value="5">Estudos Bíblicos (%)</option>
          <option value="6">Batismo (%)</option>
          <option value="7">Discipulado Pós-Batismo (%)</option>
        </select>
        {getImg(graficoPosition)}
      </CrmContainer>
    </Container>
  );
};

export default MarcosJunior;

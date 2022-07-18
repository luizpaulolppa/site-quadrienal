import React, { useState } from "react";

import marcos from "../../assets/marcos-without-back.png";
import arrowDown from "../../assets/arrow-down-white.svg";
import setaParaBaixo from "../../assets/seta-para-baixo-red.png";
import setaParaBaixoYelow from "../../assets/seta-para-baixo-yelow.png";
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
import semestre1 from "../../assets/marcos-junior/1-semestre.png";
import projetoPlante1 from "../../assets/marcos-junior/projeto-plante-1.png";
import projetoPlante2 from "../../assets/marcos-junior/projeto-plante-2.png";
import projetoPlante3 from "../../assets/marcos-junior/projeto-plante-3.png";
import revitalize1 from "../../assets/marcos-junior/revitalize-1.png";
import revitalize2 from "../../assets/marcos-junior/revitalize-2.png";
import revitalize3 from "../../assets/marcos-junior/revitalize-3.png";
import impacto1 from "../../assets/marcos-junior/impacto-1.png";
import impacto2 from "../../assets/marcos-junior/impacto-2.png";
import impacto3 from "../../assets/marcos-junior/impacto-3.png";
import impacto4 from "../../assets/marcos-junior/impacto-4.png";
import impacto5 from "../../assets/marcos-junior/impacto-5.png";
import livros from "../../assets/marcos-junior/livros.png";

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
  EvangelismoContainer,
  ProjetoPlante,
  ImpactoACSR,
  Livros,
  Agradecimentos,
} from "./styles";
import Tabs from "../../components/Tabs";

const MarcosJunior: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);
  const [graficoPosition, setGraficoPosition] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
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
      <EvangelismoContainer>
        <p>Evangelismos</p>
        <Tabs
          tabs={["1º semestre", "2º semestre"]}
          value={tabIndex}
          onChange={setTabIndex}
        />
        <img src={semestre1} alt="semestre1" />
      </EvangelismoContainer>
      <ProjetoPlante>
        <h1>Projeto Plante</h1>
        <p>Número de treinamentos</p>
        <img src={projetoPlante1} alt="projetoPlante1" />
        <p>Pastores treinados</p>
        <img src={projetoPlante2} alt="projetoPlante2" />
        <p>Igrejas Plantadas</p>
        <img src={projetoPlante3} alt="projetoPlante3" />
      </ProjetoPlante>
      <ProjetoPlante>
        <h1>Projeto Revitalize</h1>
        <p>Número de treinamentos</p>
        <img src={revitalize1} alt="projetoPlante1" />
        <p>Pastores treinados</p>
        <img src={revitalize2} alt="projetoPlante2" />
        <p>Igrejas Plantadas</p>
        <img src={revitalize3} alt="projetoPlante3" />
      </ProjetoPlante>
      <ImpactoACSR>
        <h1>Impacto ACSR</h1>
        <p>Número de pontos de pregação</p>
        <img src={impacto1} alt="impacto 1" />
        <p>Estudos Bíblicos</p>
        <img src={impacto2} alt="impacto 2" />
        <p>Pedidos de Batismo</p>
        <img src={impacto3} alt="impacto 3" />
        <p>Média de Público Diário</p>
        <img src={impacto4} alt="impacto 4" />
        <p>Pessoas Batizadas</p>
        <img src={impacto5} alt="impacto 5" />
      </ImpactoACSR>
      <Livros>
        <h1>Livros Missionários Adquiridos</h1>
        <img src={livros} alt="livros" />
      </Livros>
      <Agradecimentos>
        <img src={setaParaBaixoYelow} alt="setaParaBaixoYelow" />
        <h1>Agradecimentos</h1>
        <p>Minha gratidão a Deus pelo chamado e pela saúde.</p>
        <br />
        <p>
          À Rosinha Oliveira, pelo apoio incondicional e por ser minha
          companheira de todas as horas. Aos meus filhos, Richard, Willian e
          minha ‘filha’ Mikaela que me inspiram a sempre avançar.
        </p>
        <br />
        <p>
          À minha mãe, Eunice Braga dos Santos, que a cada instante me motiva
          com sua dedicação.
        </p>
        <br />
        <p> 
          Minha gratidão aos pastores e diretores de escola, que, com seu
          compromisso, desenvolvem uma parte fundamental no processo de
          crescimento desta associação.
        </p>
        <br />
        <p>
          Agradeço a todos os membros da ACSR, que dedicam seus dons na pregação
          do evangelho.
        </p>
        <br />
        <p>
          Aos meus companheiros de administração, pastor Rogério Gurniak e
          Everson Braga, que com uma parceria sem igual, me dão condições para
          liderar. Também agradeço aos pastores Elton Alves e Laudecir Mazzo,
          que estiveram na administração deste campo, neste período.
        </p>
        <br />
        <p>Aos departamentais pelo seu cristianismo e profissionalismo.</p>
        <br />
        <p>
          À minha secretária, Rosângela Barragan, pelo seu comprometimento em
          fazer o melhor para Deus.
        </p>
        <br />
        <p>
          Aos colportores, por nos inspirar a trabalhar pela fé. A todos os
          funcionários da ACRS, da Educação e voluntários que atuam nas igrejas,
          meu reconhecimento pelo empenho e dedicação.
        </p>
        <br />
        <p>
          Agradeço às organizações superiores, em especial à Divisão
          Sul-Americana (DSA).
        </p>
        <br />
        <p>
          Minha gratidão aos administradores da União Sul Brasileira pelo apoio
          incondicional, orientações e conselhos. Ao pastor Marlinton Lopes, que
          tem me pastoreado e orientado como um companheiro incansável e
          apoiador em todos os momentos. Aos pastores Harry Streithorst e Volnei
          Porto, administradores da USB e companheiros nessa jornada.
        </p>
      </Agradecimentos>
    </Container>
  );
};

export default MarcosJunior;

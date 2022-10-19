/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";

import marcos from "../../assets/marcos-junior/marcos-without-back.jpg";
import arrowDown from "../../assets/arrow-down-white.svg";
import setaParaBaixo from "../../assets/seta-para-baixo-red.png";
import setaParaBaixoYelow from "../../assets/seta-para-baixo-yellow.png";
import membersTotal from "../../assets/marcos-junior/members-total.png";
import membersTotal2 from "../../assets/marcos-junior/members-total-2.png";
import crm from "../../assets/marcos-junior/crm.png";
import dadosGerais from "../../assets/marcos-junior/dados-gerais.png";
import semestre1 from "../../assets/marcos-junior/1-semestre.png";
import semestre2 from "../../assets/marcos-junior/2-semestre.png";
import projetoPlante1 from "../../assets/marcos-junior/projeto-plante-1.png";
import projetoPlante2 from "../../assets/marcos-junior/projeto-plante-2.png";
import projetoPlante3 from "../../assets/marcos-junior/projeto-plante-3.png";
import revitalize1 from "../../assets/marcos-junior/revitalize-1.png";
import revitalize2 from "../../assets/marcos-junior/revitalize-2.png";
import revitalize3 from "../../assets/marcos-junior/revitalize-3.png";
import impacto from "../../assets/marcos-junior/impacto.png";

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
  MembersContainer,
  CrmContainer,
  EvangelismoContainer,
  ProjetoPlante,
  ImpactoACSR,
  Agradecimentos,
} from "./styles";
import Tabs from "../../components/Tabs";
import FadeIn from "../../components/FadeIn";

function testee() {
  let counter = document.getElementById("totalMembers") as Element;
  if (!counter) return;
  counter.innerHTML='0'
}

function testee2() {
  let counter = document.getElementById("totalMembers2") as Element;
  if (!counter) return;
  counter.innerHTML='0'
}

const MarcosJunior: React.FC = () => {
  const navigate = useNavigate();

  testee()
  testee2()

  const [openMenu, setOpenMenu] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  let isRunningMembersCount = false;
  let isRunningMembersCount2 = false;


  useEffect(() => {
    let counter = document.getElementById("totalMembers") as Element;
    if (!counter) return; 

    let counter2 = document.getElementById("totalMembers2") as Element;
    if (!counter2) return; 

    window.scrollTo(0, 0);
    window.addEventListener("scroll", function () {
  if (isOnScreen(counter)) {
        if (counter.innerHTML === (16842).toLocaleString("pt-BR")) return; 
        if (!isRunningMembersCount) {
          startTotalMembersCount();
        }

        if (counter2.innerHTML === (17475).toLocaleString("pt-BR")) return; 
        if (!isRunningMembersCount2) {
          startTotalMembersCount2();
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const elements: Array<{ element: Element, trigger: Element } | null> = [];
    const el = document.querySelector("#fade1") as Element;
    const el2 = document.querySelector("#fade2") as Element;
    const elTrigger = document.querySelector("#start_fade1") as Element;
    const elTrigger2 = document.querySelector("#start_fade2") as Element;
    elements.push({ element: el, trigger: elTrigger });
    elements.push({ element: el2, trigger: elTrigger2 });

    window.addEventListener("scroll", function () {
      elements.forEach((el: any) => playAnimation(el.element, el.trigger));
    });
  }, []);

  function playAnimation(el: any, trigger: any) {
    if (isOnScreen(trigger)) el.style.animationPlayState = "running";
  }

  function isOnScreen(el: any) {
    if (!el) return;
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
  }

  function startTotalMembersCount() {
    isRunningMembersCount = true;
    const totalMembers = 16842;
    let counts = setInterval(updated);
    let upto = 16500;

    function updated() {
      let counter = document.getElementById("totalMembers") as Element;
      if (!counter) return;
      counter.innerHTML = (++upto).toLocaleString("pt-BR");
      if (upto >= totalMembers) {
        clearInterval(counts);
        isRunningMembersCount = false;
      }
    }
  }

  function startTotalMembersCount2() {
    isRunningMembersCount2 = true;
    const totalMembers = 17475;
    let counts = setInterval(updated);
    let upto = 17000;

    function updated() {
      let counter = document.getElementById("totalMembers2") as Element;
      if (!counter) return;
      counter.innerHTML = (++upto).toLocaleString("pt-BR");
      if (upto >= totalMembers) {
        clearInterval(counts);
        isRunningMembersCount2 = false;
      }
    }
  }

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
              com muita alegria que recebemos você, delegado da V Assembleia Quadrienal da Associação Central Sul
              <br /> Rio-Grandense.
            </Text>
          </TextCapitularContainer>
          <Text>
          <br /> 
            Agradeço a Deus por chegarmos até aqui e a Ele todo louvor pelas
            vitórias alcançadas. Ao olhar para trás, sou muito grato à igreja na
            região central do Rio Grande do Sul, por todo o apoio e envolvimento
            neste período.
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Neste quadriênio, pela graça <br /> de Deus foi possível chegar a
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
        <br />
      </GreenBox>

      <DataContainer>
        <div id="start_fade2"></div>
        <br />
        <br />
        <img src={setaParaBaixo} alt="setaParaBaixo" />
        <DataTitle>Dados <br />gerais</DataTitle>
        <br />
        <img src={dadosGerais} alt="dadosGerais" />
        <br />
      </DataContainer>
      <FadeIn id="fade2" duration="3s" delay="0.2s">
        <MembersContainer>
          Total de membros <br />
          <p className="subtitle" >setembro | 2022</p>
          <span id="totalMembers">0</span>
          <br />
          <img src={membersTotal} alt="membersTotal" />
          <br /><br />
          <p className="subtitle">dezembro | 2018</p>
          <span id="totalMembers2">0</span>
          <br />
          <img src={membersTotal2} alt="membersTotal2" />
        </MembersContainer>
      </FadeIn>
      <CrmContainer>
        <p>CRM - ACSR</p>
        <img src={crm} alt="CRM" />
      </CrmContainer>
      <span>
        *Obs.: Em 2019 o cartão de chamada da Escola Sabatina não possuía as 
        perguntas da Roda do Discipulado. Em 2022, os dados são do 3º trimestre, 
        quando foram levantados os dados para esta revista.
      </span>
      <EvangelismoContainer>
        <p>Evangelismos</p>
        <Tabs
          tabs={["1º semestre", "2º semestre"]}
          value={tabIndex}
          onChange={setTabIndex}
        />
        <br />
        { tabIndex === 0 &&  <FadeIn duration="1s" delay="0.2s" style={{ animationPlayState: "running" }}><img src={semestre1} alt="semestre1" /></FadeIn> }
        { tabIndex === 1 &&  <FadeIn duration="1s" delay="0.2s" style={{ animationPlayState: "running" }}><img src={semestre2} alt="semestre2" /></FadeIn> }
        <br />
        <br />
      </EvangelismoContainer>
      <ProjetoPlante>
        <br />
        <br />
        <br />
        <p className="title">Projeto Plante</p>
        <span>Formar um movimento de igrejas que plantem outras igrejas.</span>
        <br />
        <br />
        <p>Número de treinamentos</p>
        <img src={projetoPlante1} alt="projetoPlante1" />
        <p>Pastores treinados</p>
        <img src={projetoPlante2} alt="projetoPlante2" />
        <p>Igrejas Plantadas</p>
        <img src={projetoPlante3} alt="projetoPlante3" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="title">Projeto Revitalize</p>
        <span>Projeto que visa revitalizar igrejas 
              que precisem crescer na Comunhão, no Relacionamento e na Missão.</span>
        <p>Número de treinamentos</p>
        <img src={revitalize1} alt="projetoPlante1" />
        <p>Pastores treinados</p>
        <img src={revitalize2} alt="projetoPlante2" />
        <p>Igrejas Plantadas</p>
        <img src={revitalize3} alt="projetoPlante3" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </ProjetoPlante>
      <ImpactoACSR>
        <br />
        <br />
        <h1>Impacto ACSR</h1>
        <span>(evangelismo 10 dias de oração)</span>
        <br />
        <br />
      
        <img src={impacto} alt="impacto" />
      </ImpactoACSR>
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

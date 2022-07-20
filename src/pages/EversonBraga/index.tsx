import React, { useState } from "react";

import everson from "../../assets/everson-without-back.png";
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
  Highlights,
  HighlightsText,
  HighlightsTitle,
  HighlightsDataText,
  ThanksContainer,
  ThanksText,
  ThanksTitle,
  BalanceContainer,
  BalanceTitle,
  BalanceSubTitle,
  BalanceBadge,
  BalanceText,
  Fade
} from "./styles";

const EversonBraga: React.FC = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  function linkToDepartamentsSection() {
    navigate("/")
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
      <TitleContainer>
        <ImageContainer>
          <img src={everson} alt="Everson" />
        </ImageContainer>
        <Fade></Fade>
        <Name>
          Everson
          <br /> Braga 
        </Name>
        <Role>Tesouraria e Expansão Patrimonial</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“A</FirstLetter>
            <Text>
            tua fidelidade se estende de geração em geração; 
            fundaste a terra, e ela permanece”<br /><br />(Sl 119:90).
            </Text>
          </TextCapitularContainer>
        </TextContainer>
        <br />
      </TitleContainer>
      <Highlights>
        <br />
        <br />
        <img src={redArrowDown} alt="seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br /><br />  
        <HighlightsText>
          Louvamos a Deus por termos uma 
          <span className="red"> igreja comprometida </span> 
          com o serviço do Senhor.
        </HighlightsText>
        
        <br /><br />

        <HighlightsText>
          <span className="red">Muitas bênçãos</span> foram derramadas neste campo, 
          resultado da prosperidade e fidelidade de nossos irmãos.
        </HighlightsText>
        <br /><br /><br /><br />
        
        <HighlightsDataText>
          Podemos confirmá-la através do crescimento de <span className="green">18,01% </span>
          nos dízimos e <span className="blue">9,43%</span> nas ofertas
        </HighlightsDataText>    

        <br /><br />

        <HighlightsText>
          Nesse mesmo período, tivemos um crescimento de inflação de <span className="red">27,95%</span> 
          <br /><br />
          (janeiro de 2019 – julho de 2022).
        </HighlightsText>
        <br />
        <br />
      </Highlights>
      <GreenBox>
        “O que semeia em abundância, em abundância também ceifará. 
        Deus não é injusto para que Se esqueça do vosso labor, 
        do vosso trabalho de amor” 
        <br /><br />
        <span>(Ellen G. White, <br /> Conselhos sobre Mordomia, p. 58).</span>
      </GreenBox>
      <BalanceContainer>
        <br />
        <BalanceTitle>Balanços Patrimoniais</BalanceTitle>
        <br /><br /><br />
        <BalanceSubTitle>Terrenos adquiridos</BalanceSubTitle>
        <br />
        <BalanceBadge color="#F1403F"><span>2019</span></BalanceBadge>
        <br />
        <BalanceText>
          Presidente Vargas | Bairro Cruzeiro | 315.000,00
        </BalanceText>
        <br /> 
        <BalanceBadge color="#19CD77"><span>2020</span></BalanceBadge>
        <br />
        <BalanceText>
          Boa Vista do Incra | Cruz Alta | 11.162,52
        </BalanceText>
        <br />
        <BalanceBadge color="#E8D71E"><span>2021</span></BalanceBadge>
        <br />
        <BalanceText>
          Nova Brasília | Alegrete | 65.000,00
        </BalanceText>
        <BalanceText>
          Bairro Aparecida | Bento Gonçalves | 150.000,00
        </BalanceText>
        <br />
        <BalanceBadge color="#63B4EF"><span>2022</span></BalanceBadge>
        <br />
        <BalanceText>
          Bairro Pinheiros | Lajeado | 125.000,00
        </BalanceText>
        <BalanceText>
          Rio Branco | Caxias do Sul | 700.000,00
        </BalanceText>
        <BalanceText>
          Bela União | Santa Maria | 100.000,00
        </BalanceText>
        <BalanceText>
          Olarias | Canoas | 180.000,00
        </BalanceText>
        <br /><br />
        <BalanceText><strong>TOTAL TERRENOS: 1.646.162,52</strong></BalanceText>
      </BalanceContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
          Agradecemos a Deus primeiramente, pela oportunidade que nos dá de 
          pertencermos à sua igreja, bem como aos membros do campo da 
          Associação Central Sul Rio-Grandense da IASD pela sua fidelidade nos 
          dízimos e ofertas. 
          <br /><br />
          Aos tesoureiros de nossas igrejas pelo comprometimento, 
          zelo e integridade que desempenham sua missão nos controles e 
          processos dos recursos que pertencem a Deus. 
          À administração da USB, em especial ao pastor Volnei Porto, 
          pelo apoio e orientações. 
          <br /><br />
          Aos colegas da administração, departamentais, servidores do escritório, 
          pastores, colportores e funcionários das escolas nossa gratidão pela 
          amizade, unidade e lealdade com a missão da Igreja.
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default EversonBraga;

import React, { useEffect, useState } from "react";

import everson from "../../assets/everson/everson-without-back.jpg";
import redArrowDown from "../../assets/seta-para-baixo-red.png";
import yellowArrowDown from "../../assets/seta-para-baixo-yellow.png";
import greenArrow from "../../assets/everson/arrow.png";
import image1 from "../../assets/everson/image-1.jpg";
import image2 from "../../assets/everson/image-2.png";
import image3 from "../../assets/everson/image-3.png";
import image4 from "../../assets/everson/image-4.png";
import image5 from "../../assets/everson/image-5.png";
import image6 from "../../assets/everson/image-6.png";
import image7 from "../../assets/everson/image-7.png";
import image8 from "../../assets/everson/image-8.png";
import image9 from "../../assets/everson/image-9.png";
import image10 from "../../assets/everson/image-10.png";
import image11 from "../../assets/everson/image-11.png";
import image12 from "../../assets/everson/image-12.png";
import image13 from "../../assets/everson/image-13.png";
import image14 from "../../assets/everson/image-14.png";
import image15 from "../../assets/everson/image-15.png";
import image16 from "../../assets/everson/image-16.png";
import image17 from "../../assets/everson/image-17.png";
import image18 from "../../assets/everson/image-18.png";
import image19 from "../../assets/everson/image-19.png";
import image20 from "../../assets/everson/image-20.png";
import image21 from "../../assets/everson/image-21.png";
import image22 from "../../assets/everson/image-22.png";
import image23 from "../../assets/everson/image-23.png";

import image24 from "../../assets/everson/image-24.png";
import image25 from "../../assets/everson/image-25.png";
import image26 from "../../assets/everson/image-26.png";
import image27 from "../../assets/everson/image-27.png";
import image28 from "../../assets/everson/image-28.png";
import image29 from "../../assets/everson/image-29.png";
import image30 from "../../assets/everson/image-30.png";
import image31 from "../../assets/everson/image-31.png";
import image32 from "../../assets/everson/image-32.png";
import image33 from "../../assets/everson/image-33.png";
import image34 from "../../assets/everson/image-34.png";
import image35 from "../../assets/everson/image-35.png";
import image36 from "../../assets/everson/image-36.png";
import image37 from "../../assets/everson/image-37.png";
import image38 from "../../assets/everson/image-38.png";
import image39 from "../../assets/everson/image-39.png";
import image40 from "../../assets/everson/image-40.png";
import image41 from "../../assets/everson/image-41.png";
import image42 from "../../assets/everson/image-42.png";
import image43 from "../../assets/everson/image-43.png";
import image44 from "../../assets/everson/image-44.png";
import image45 from "../../assets/everson/image-45.png";
import image46 from "../../assets/everson/image-46.png";
import image47 from "../../assets/everson/image-47.png";
import image48 from "../../assets/everson/image-48.png";
import image49 from "../../assets/everson/image-49.png";
import image50 from "../../assets/everson/image-50.png";
import image51 from "../../assets/everson/image-51.png";
import image52 from "../../assets/everson/image-52.png";
import image53 from "../../assets/everson/image-53.png";
import image54 from "../../assets/everson/image-54.png";
import image55 from "../../assets/everson/image-55.png";
import image56 from "../../assets/everson/image-56.png";

import image57 from "../../assets/everson/image-57.png";
import image58 from "../../assets/everson/image-58.png";
import image59 from "../../assets/everson/image-59.png";
import image60 from "../../assets/everson/image-60.png";
import image61 from "../../assets/everson/image-61.png";
import image62 from "../../assets/everson/image-62.png";
import image63 from "../../assets/everson/image-63.png";
import image64 from "../../assets/everson/image-64.png";
import image65 from "../../assets/everson/image-65.png";
import image66 from "../../assets/everson/image-66.png";
import image67 from "../../assets/everson/image-67.png";
import image68 from "../../assets/everson/image-68.png";
import image69 from "../../assets/everson/image-69.png";
import image70 from "../../assets/everson/image-70.png";
import image71 from "../../assets/everson/image-71.png";
import image72 from "../../assets/everson/image-72.png";
import image73 from "../../assets/everson/image-73.png";
import image74 from "../../assets/everson/image-74.png";
import image75 from "../../assets/everson/image-75.png";
import image76 from "../../assets/everson/image-76.png";
import image77 from "../../assets/everson/image-77.png";
import image78 from "../../assets/everson/image-78.png";
import image79 from "../../assets/everson/image-79.png";
import image80 from "../../assets/everson/image-80.png";
import image81 from "../../assets/everson/image-81.png";
import image82 from "../../assets/everson/image-82.png";
import image83 from "../../assets/everson/image-83.png";
import image84 from "../../assets/everson/image-84.png";
import image85 from "../../assets/everson/image-85.png";
import image86 from "../../assets/everson/image-86.png";
import image87 from "../../assets/everson/image-87.png";
import image88 from "../../assets/everson/image-88.png";
import image89 from "../../assets/everson/image-89.png";
import image90 from "../../assets/everson/image-90.png";
import image91 from "../../assets/everson/image-91.png";
import image92 from "../../assets/everson/image-92.png";
import image93 from "../../assets/everson/image-93.png";
import image94 from "../../assets/everson/image-94.png";
import image95 from "../../assets/everson/image-95.png";
import image96 from "../../assets/everson/image-96.png";
import image97 from "../../assets/everson/image-97.png";
import image98 from "../../assets/everson/image-98.png";
import image99 from "../../assets/everson/image-99.png";


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
  Badge,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const EversonBraga: React.FC = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade1") as Element;
    const elTrigger = document.querySelector("#start_fade1") as Element;
    elements.push(el);

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
          <img src={everson} alt="Everson" />
        </ImageContainer>
        <Name>
          Everson
          <br /> Braga
        </Name>
        <Role>Tesouraria e Expansão Patrimonial</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“A</FirstLetter>
            <Text>
              tua fidelidade se estende de geração em geração; fundaste a terra,
              e ela permanece”
              <br />
              <br />
              (Sl 119:90).
            </Text>
          </TextCapitularContainer>
        </TextContainer>
        <br />
        <br />
      </TitleContainer>
      <Highlights>
        <br />
        <br />
        <img src={redArrowDown} alt="seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Louvamos a Deus por termos uma
          <span className="red"> igreja comprometida </span>
          com o serviço do Senhor.
        </HighlightsText>

        <br />
        <br />

        <HighlightsText>
          <span className="red">Muitas bênçãos</span> foram derramadas neste
          campo, resultado da prosperidade e fidelidade de nossos irmãos.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />

        <HighlightsDataText>
          Podemos confirmá-la através do crescimento de{" "}
          <span className="green">24,58% </span>
          nos dízimos e <span className="blue">15,86%</span> nas ofertas
        </HighlightsDataText>

        <br />
        <br />

        <HighlightsText>
          Nesse mesmo período, tivemos um crescimento de inflação de{" "}
          <span className="red">23,59%</span>
          <br />
          <br />
          (janeiro de 2019 – julho de 2022).
        </HighlightsText>
        <br />
        <br />
      </Highlights>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          “O que semeia em abundância, em abundância também ceifará. Deus não é
          injusto para que Se esqueça do vosso labor, do vosso trabalho de amor”
        </FadeIn>
        <br />
        <span>
          (Ellen G. White, <br /> Conselhos sobre Mordomia, p. 58).
        </span>
        <br />
        <br />
      </GreenBox>
      <BalanceContainer>
        <br />
        <BalanceTitle>Área Religiosa</BalanceTitle>
        <br />
        <br />
        <span className="subtitle">Balanço Patrimonial</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image1} alt="" />
        <br />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image2} alt="" />
        <br />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image3} alt="" />
        <br />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image4} alt="" />
        <br />
        <br />
        <span className="subtitle">Demonstração de Resultado do Exercício</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image5} alt="" />
        <br />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image6} alt="" />
        <br />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image7} alt="" />
        <br />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image8} alt="" />
        <br />
        <br />
        <span className="subtitle">Despesas com Evangelismo</span>
        <br />
        <br />
        <Badge color="#F1403F" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            Investimento em Evangelismo <br />2019-2022
          </span>
        </Badge>
        <br />
        <p><strong>R$ 6.802.020,56</strong></p>
        <br />
        <br />
        <img src={image9} alt="" />
        <br />
        <br />

        
        <span className="subtitle">% Capital Operativo</span>
        <br />
        <Badge color="#19CD77" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            É a diferença em que os ativos correntes excedem aos passivos correntes e 
            reservas ou fundo alocados. Recomendado 100%
          </span>
        </Badge>
        <br />
        <img src={image10} alt="" />
        <br />
        <br />
        <span className="subtitle">Dízimos</span>
        <br />
        <br />
        <img src={image11} alt="" />
        <br />
        <Badge color="#19CD77" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            “O dízimo deve ser unicamente dedicado ao sustento do Ministério Evangélico.
            ” CM, 81
          </span>
        </Badge>
        <br />
        <br />
        <span className="subtitle">Ofertas</span>
        <br />
        <br />
        <img src={image12} alt="" />


        <br />
        <br />
        <span className="subtitle">Liquidez Imediata</span>
        <br />
        <br />
        <Badge color="#19CD77" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            Índice que considera apenas caixa, saldos bancários e 
            aplicações financeiras de liquidez imediata para quitar obrigações.
          </span>
        </Badge>
        <br />
        <img src={image13} alt="" />


        <br />
        <br />
        <span className="subtitle">Despesas com capacitação e treinamento de igrejas</span>
        <br />
        <br />
        <img src={image14} alt="" />
        <br />
        <Badge color="#F1403F" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            Investimento em capacitação e treinamento de igrejas 2019-2022
          </span>
        </Badge>
        <br />
        <p><strong>R$ 7.127.699,14</strong></p>
        <br />
        <br />
        <span className="subtitle">Terrenos adquiridos</span>
        <br />
        <br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <span>Presidente Vargas | Bairro Cruzeiro | 315.000,00</span>
        <br />
        <img src={image15} alt="" />
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <span>Boa Vista do Incra | Cruz Alta | 11.162,52</span>
        <br />
        <img src={image16} alt="" />
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <span style={{ marginBottom: '5px' }}>Nova Brasília | Alegrete | 65.000,00</span>
        <span>Bairro Aparecida | Bento Gonçalves | 150.000,00</span>
        <br />
        <img src={image17} style={{ marginBottom: '10px'}} alt="" />
        <img src={image18} alt="" />
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <span style={{ marginBottom: '5px' }}>Bairro Pinheiros | Lajeado | 125.000,00</span>
        <span style={{ marginBottom: '5px' }}>Rio Branco | Caxias do Sul | 700.000,00</span>
        <span style={{ marginBottom: '5px' }}>Bela União | Santa Maria | 100.000,00</span>
        <span style={{ marginBottom: '5px' }}>Olarias | Canoas | 180.000,00</span>
        <span style={{ marginBottom: '5px' }}>Bairro Haller | Sto Ângelo | 107.000,00</span>
        <br />
        <img src={image19} style={{ marginBottom: '10px'}} alt="" />
        <img src={image20} style={{ marginBottom: '10px'}} alt="" />
        <img src={image21} style={{ marginBottom: '10px'}} alt="" />
        <img src={image22} style={{ marginBottom: '10px'}} alt="" />
        <img src={image23} alt="" />
        <br />
        <span><strong>TOTAL TERRENOS: 1.753.162,52</ strong></span>
        <br /><br /><br />

        <span className="subtitle">Subvenções igrejas</span>
        <br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <img src={image24} alt="" />
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <img src={image25} alt="" />
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <img src={image26} alt="" />
        <br />
        <Badge color="#63B4EF">
          <span>2022 *</span>
        </Badge>
        <br />
        <img src={image27} alt="" />
        <br />
        <img src={image28} alt="" />
        <br />
        <img src={image29} style={{ marginBottom: '10px'}} alt="" />
        <img src={image20} style={{ marginBottom: '10px'}} alt="" />
        <img src={image30} style={{ marginBottom: '10px'}} alt="" />
        <img src={image31} style={{ marginBottom: '10px'}} alt="" />
        <img src={image32} style={{ marginBottom: '10px'}} alt="" />
        <img src={image33} style={{ marginBottom: '10px'}} alt="" />
        <img src={image34} style={{ marginBottom: '10px'}} alt="" />
        <img src={image35} style={{ marginBottom: '10px'}} alt="" />
        <img src={image36} style={{ marginBottom: '10px'}} alt="" />
        <img src={image37} style={{ marginBottom: '10px'}} alt="" />
        <img src={image38} style={{ marginBottom: '10px'}} alt="" />
        <img src={image39} style={{ marginBottom: '10px'}} alt="" />
        <br />
        <br />
        <span className="subtitle">Subvenções igrejas</span>
        <br />
        <img src={image40} alt="" />
        <br />

        <BalanceTitle>Área Educacional</BalanceTitle>
        <br />
        <br />
        <span className="subtitle">Balanço Patrimonial</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image41} alt="" />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image42} alt="" />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image43} alt="" />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image44} alt="" />
        <br />
        <br />
        <span className="subtitle">Demonstração de Resultado do Exercício</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image45} alt="" />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image46} alt="" />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image47} alt="" />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image48} alt="" />
        <br />
        <br />
        <span className="subtitle">Serviços Educacionais</span>
        <br />
        <br />
        <img src={image49} alt="" />
        <br />
        <br />
        <span className="subtitle">% Capital Operativo</span>
        <br />
        <Badge color="#19CD77" style={{ padding: '20px' }}>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            É a diferença em que os ativos correntes excedem aos 
            passivos correntes e reservas ou fundo alocados. Recomendado 100%
          </span>
        </Badge>
        <br />
        <img src={image50} alt="" />
        <br />
        <br />
        <span className="subtitle">Investimentos Educação</span>
        <br />
        <br />
        <img src={image51} alt="" />
        <br />
        <br />
        <span className="subtitle">Investimento nas unidades escolares</span>
        <br />
        <Badge color="#F1403F">
          <span>2019</span>
        </Badge>
        <br />
        <img src={image52} alt="" />
        <br />
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <img src={image53} alt="" />
        <br />
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <img src={image54} alt="" />
        <br />
        <br />
        <Badge color="#63B4EF">
          <span>2022 *</span>
        </Badge>
        <br />
        <img src={image55} alt="" />
        <br />
        <br />
        <img src={image56} alt="" />
        <br />
        <br />
        <Badge color="#F1403F" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '600', fontSize: '32px' }}>58,10%</span>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
          crescimento acumulado das mensalidades
          2019-2022
          </span>
        </Badge>
        <br />
        <br />
        <img src={image57} style={{ marginBottom: '10px'}} alt="" />
        <img src={image58} style={{ marginBottom: '10px'}} alt="" />
        <img src={image59} style={{ marginBottom: '10px'}} alt="" />
        <img src={image60} style={{ marginBottom: '10px'}} alt="" />
        <img src={image61} style={{ marginBottom: '10px'}} alt="" />
        <img src={image62} style={{ marginBottom: '10px'}} alt="" />
        <img src={image63} style={{ marginBottom: '10px'}} alt="" />
        <img src={image64} style={{ marginBottom: '10px'}} alt="" />
        <img src={image65} style={{ marginBottom: '10px'}} alt="" />
        <img src={image66} style={{ marginBottom: '10px'}} alt="" />
        <img src={image67} style={{ marginBottom: '10px'}} alt="" />
        <img src={image68} style={{ marginBottom: '10px'}} alt="" />
        <img src={image69} style={{ marginBottom: '10px'}} alt="" />
        <img src={image70} style={{ marginBottom: '10px'}} alt="" />
        <img src={image71} style={{ marginBottom: '10px'}} alt="" />
        <img src={image72} style={{ marginBottom: '10px'}} alt="" />
        <img src={image73} style={{ marginBottom: '10px'}} alt="" />
        <img src={image74} style={{ marginBottom: '10px'}} alt="" />
        <img src={image75} style={{ marginBottom: '10px'}} alt="" />
        <img src={image76} style={{ marginBottom: '10px'}} alt="" />
        <img src={image77} style={{ marginBottom: '10px'}} alt="" />
        <img src={image78} style={{ marginBottom: '10px'}} alt="" />
        <img src={image79} style={{ marginBottom: '10px'}} alt="" />
        <img src={image80} style={{ marginBottom: '10px'}} alt="" />
        <img src={image81} style={{ marginBottom: '10px'}} alt="" />
        <img src={image82} style={{ marginBottom: '10px'}} alt="" />
        <img src={image83} style={{ marginBottom: '10px'}} alt="" />
        <br />
        <br />
        <BalanceTitle>Área Loja</BalanceTitle>
        <br />
        <br />
        <span className="subtitle">Balanço Patrimonial</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image84} alt="" />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image85} alt="" />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image86} alt="" />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image87} alt="" />
        <br />
        <br />
        <span className="subtitle">Demonstração de Resultado do Exercício</span>
        <br />
        <br />
        <div>
          <p>2019</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image88} alt="" />
        <br />
        <div>
          <p>2020</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image89} alt="" />
        <br />
        <div>
          <p>2021</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image90} alt="" />
        <br />
        <div>
          <p>2022</p>
          <img src={greenArrow} alt="Seta para baixo verde" />
        </div>
        <br />
        <img src={image91} alt="" />
        <br />
        <br />
        <span className="subtitle">Receita Líquida Loja</span>
        <br />
        <img src={image92} alt="" />
        <br />
        <br />
        <span className="subtitle">Resultado acumulado Loja</span>
        <br />
        <img src={image93} alt="" />
        <br />
        <br />
        <span className="subtitle">Capital operativo</span>
        <br />
        <img src={image94} alt="" />
        <br />
        <br />
        <span className="subtitle">Subvenção Associação e Educação</span>
        <br />
        <Badge color="#19CD77">
          <span>2020</span>
        </Badge>
        <br />
        <span>CAMAR | Parque Indoor | R$ 108.000,00</span>
        <br />
        <img src={image95} alt="" />
        <br />
        <Badge color="#E8D71E">
          <span>2021</span>
        </Badge>
        <br />
        <span>EACAN | Construção | R$ 600.000,00</span>
        <span>EACS | Terrenos | R$ 700.000,00</span>
        <br />
        <img src={image96} style={{ marginBottom: '10px'}} alt="" />
        <img src={image97} style={{ marginBottom: '10px'}} alt="" />
        <br />
        <Badge color="#63B4EF">
          <span>2022</span>
        </Badge>
        <br />
        <span>CAMAR | Auditório | R$ 400.000,00</span>
        <span>IASD Caxias do Sul-Rio Branco | Terreno | R$ 400.000,00</span>
        <br />
        <img src={image98} style={{ marginBottom: '10px'}} alt="" />
        <img src={image99} style={{ marginBottom: '10px'}} alt="" />
        <br />
      </BalanceContainer>
      <ThanksContainer>
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Agradecemos a Deus primeiramente, pela oportunidade que nos dá de
          pertencermos à sua igreja, bem como aos membros do campo da Associação
          Central Sul Rio-Grandense da IASD pela sua fidelidade nos dízimos e
          ofertas.
          <br />
          <br />
          Aos tesoureiros de nossas igrejas pelo comprometimento, zelo e
          integridade que desempenham sua missão nos controles e processos dos
          recursos que pertencem a Deus. À administração da USB, em especial ao
          pastor Volnei Porto, pelo apoio e orientações.
          <br />
          <br />
          Aos colegas da administração, departamentais, servidores do
          escritório, pastores, colportores e funcionários das escolas nossa
          gratidão pela amizade, unidade e lealdade com a missão da Igreja.
          <br />
          <br />
          Agradeço à minha esposa Monie Cremonezi Braga e filha Laura Cremonezi Braga, 
          pelo apoio e incentivo e por fazerem parte desse ministério. 
          <br />
          <br />
          Não poderia deixar de agradecer ao pastor Laudecir Mazzo por gerenciar com 
          responsabilidade e competência o departamento de Tesouraria e Expansão 
          Patrimônio nos anos de 2019 a março de 2021.
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default EversonBraga;

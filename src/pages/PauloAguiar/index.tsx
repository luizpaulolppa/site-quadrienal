import React, { useEffect, useState } from "react";

import paulo from "../../assets/paulo-aguiar/paulo-without-back.png";

import arrowDown from "../../assets/arrow-down-white.svg";
import arrowDownRed from "../../assets/seta-para-baixo-red.png";
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
  HighlightsContainer,
  HighlightsText,
  HighlightsTitle,
} from "./styles";


const PauloAguiar: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <img src={paulo} alt="Paulo" />
        </ImageContainer>
        <Name>
          Pr.
          <br />Paulo
          <br />Aguiar
        </Name>
        <Role>
          Ministério da Família, Mordomia Cristã, Ação Solidária Adventista
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“O</FirstLetter>
            <Text>
              tudo de mim em resposta ao Tudo de Deus".
            </Text>
          </TextCapitularContainer>
          <Text>
          “Quando os seguidores de Cristo Lhe devolvem o que Lhe é devido, 
          estão acumulando tesouro que lhes será entregue quando ouvirem as palavras: 
          “Bem está, bom e fiel servo… entra no gozo do teu Senhor”. Mt 25:23. 
          “O qual pelo gozo que Lhe estava proposto suportou a cruz, desprezando a 
          afronta, e assentou-Se à destra do trono de Deus.” Hb 12:2. O gozo de ver 
          almas redimidas, almas eternamente salvas, eis a recompensa de todos os que 
          assentam os pés nas pegadas dAquele que disse: 'Segue-Me.’” 
          <br /><br />
          (Ellen G. White, O Desejado de Todas as Nações, p. 523).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <HighlightsTitle>Mordomia Cristã</HighlightsTitle>
        <br />
        <HighlightsText>
          Ainda em nossos dias, há pessoas que possuem bons recursos financeiros e 
          um mordomo em sua casa. Essa função, entre outras coisas, é responsável por 
          administrar a casa do dono. Cuidar da casa e dos empregados (cozinheiras, 
          motorista, jardineiro etc.) estão entre as suas possíveis atribuições.
        </HighlightsText>
        <br />
        <HighlightsText>
          Devido à sua posição, o mordomo geralmente tem grande liberdade com acesso a 
          tudo que pertence ao proprietário e deve ser uma pessoa de absoluta confiança. 
          Além disso, tudo o que está sob sua responsabilidade não lhe pertence, mas ao 
          dono.
        </HighlightsText>
        <br />
        <HighlightsText>
          Ainda que essa analogia seja limitada, ela nos ajuda a entender o conceito da 
          Mordomia Cristã. Deus é o dono de todas as coisas: o Universo, o mundo, os 
          animais e claro, o ser humano. Apesar disso, Ele nos confiou a administração 
          de nossa vida, corpo, tempo, dons e recursos materiais.
        </HighlightsText>
        <br />
        <HighlightsText>
          Portanto, ser um mordomo fiel de Deus, implica viver e administrar a nossa vida, 
          reconhecendo por palavras e ações, que Deus é o nosso Senhor e o único dono de 
          tudo que somos e temos.
        </HighlightsText>
        <br />
        <HighlightsText>
          A grande oferta de salvação entregue por Deus na cruz do calvário, Seu Filho 
          Amado, deve inspirar nossa profunda gratidão e reconhecimento por Seu amor, 
          bondade e cuidado. Nós só podemos ‘dar’ a Deus ou devolver o que Ele já nos deu, 
          como disse Davi: “Porque quem sou eu, e quem é o meu povo para que pudéssemos 
          dar voluntariamente estas coisas? Porque tudo vem de ti, e nós só damos o que 
          vem das tuas mãos” (1Cr29:14).
        </HighlightsText>
        <br />
        <HighlightsTitle>Reavivamento Espiritual</HighlightsTitle>
        <br />

        <HighlightsText>
          Não existe reavivamento espiritual sem estudo diário da Bíblia e oração. 
          É também função da igreja motivar seus membros através de encontros de oração e 
          comunhão. Ao longo deste quadriênio, as igrejas da ACSR enfatizaram este 
          reavivamento, através do Projeto ‘Primeiro Deus — 10 dias de oração’ para 
          contribuir nesse processo.
        </HighlightsText>

        <br />
        <HighlightsTitle>Seminário Teórico-Prático</HighlightsTitle>
        <br />

        <HighlightsText>
          Cada pastor distrital participou deste modelo de treinamento em que foi 
          ressaltada a importância da Mordomia Cristã para o cumprimento da missão. 
          Nestes quatro anos, 120 congregações foram atendidas com o programa.
        </HighlightsText>

        <br />
        <HighlightsTitle>Capacitações</HighlightsTitle>
        <br />

        <HighlightsText>
          Os diretores de Mordomia foram capacitados por treinamentos regionais ou 
          gerais, a cada início de ano, para todo o campo. Nesses encontros, eles 
          receberam inspiração, motivação, materiais e orientação para honrar a Deus 
          através da missão que lhes foi confiada, além da formação de novos líderes. 
          No quadriênio, ocorreram três encontros especiais para diretores de Mordomia e 
          tesoureiros para guiar o trabalho nessas áreas importantes da igreja.
        </HighlightsText>

        <br />
        <HighlightsTitle>Treinamentos nas trimestrais</HighlightsTitle>
        <br />

        <HighlightsText>
          Para consolidar a Mordomia Cristã das Novas Gerações, as professoras do 
          Ministério da Criança e Ministério do Adolescente receberam capacitação 
          sobre o tema nas trimestrais.
        </HighlightsText>

        <br />
        <HighlightsTitle>Treinamentos para as famílias</HighlightsTitle>
        <br />

        <HighlightsText>
          Através de encontros em igrejas e retiros espirituais, o tema da fidelidade a 
          Deus foi abordado para reforçar o relacionamento de líderes e membros com 
          Nosso Senhor.
        </HighlightsText>

        <br />
        <HighlightsTitle>Dados</HighlightsTitle>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
      </HighlightsContainer>
      <GreenBox>
        <br />
          Ministério da Família
        <br />
        Ellen White escreveu: 

        "Uma família bem ordenada, bem disciplinada, terá poderosa 
        influência para o bem" 


        (Ellen G. White, Beneficência Social, p.235).
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          Grande será o alcance e as bençãos que uma família cristã poderá prover ao mundo, 
          levando o testemunho de Cristo e abençoando as pessoas e comunidade ao seu redor. 
          Além disso, uma família cristã provê um ambiente seguro e acolhedor onde todos 
          podem se desenvolver segundo a vontade do Senhor. Por isso, as ações do Ministério 
          da Família contribuem para este importante objetivo.
        </HighlightsText>
        <br /> <br />
        <br /><br />
        <img src={arrowDownRed} style={{ height: '48px', width: '48px' }}alt="Seta para baixo vermelha" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          A cada ano, foram realizados dois cursos de noivos de modo a preparar os casais para a 
          vida conjugal, abordando temas essenciais como: vida espiritual, missão da família cristã, 
          educação de filhos, intimidade, finanças e comunicação do casal.
        </HighlightsText>

        <HighlightsText>
          Nos distritos da ACSR tivemos 116 retiros ou encontros de casais neste quadriênio. 
          Esses encontros focalizaram a comunicação do casal, maior intimidade entre eles e com Deus.
        </HighlightsText>

        <HighlightsText>
          Ao longo dos quatro anos, foram realizados 172 encontros para pais para auxiliar os 
          pais na educação e preparo dos filhos para a vida. Nesses encontros, os principais temas 
          tradados foram: disciplina cristã, finanças para crianças, educação cristã e formação 
          das novas gerações para a missão.
        </HighlightsText>

        <HighlightsText>
          Visando desenvolver espiritualmente as famílias no estudo da Bíblia e do Espírito de Profecia, 
          foram realizadas oito quartas-feiras de estudo de um livro do Espírito de Profecia por ano, em cada igreja.
        </HighlightsText>

        <HighlightsText>
          Através do incentivo de um álbum de figurinhas colecionáveis dos personagens bíblicos e 
          outras ações, as famílias foram incentivadas a crescer em cinco áreas seguindo o 
          acróstico da palavra FÁCIL: Fidelidade (dízimos e ofertas), Adoração (culto familiar), 
          Comunhão (estudo da Bíblia e lição), Intercessão (oração em família) e Lazer 
          (brincadeiras e atividades juntos).
        </HighlightsText>

        <HighlightsText>
          Neste quadriênio, a ACSR incentivou os pais a fidelidade das novas gerações tanto em eventos 
          para famílias pastorais, funcionários e programações nas igrejas locais.
        </HighlightsText>

        <HighlightsText>
          A cada ano, os líderes do Ministério da Família eram treinados por capacitações 
          gerais e regionais com objetivo de desenvolver novos líderes e prover conhecimento, 
          motivação e materiais para o trabalho com as famílias da igreja.
        </HighlightsText>

        <HighlightsText>
          Ação Solidária Adventista reflete a visão de impulsionar ideias e ações ligadas a uma 
          relação de auxílio mútuo, uma virtude cristã que pratica a partilha de bens, sejam 
          materiais ou espirituais, em atividades reais. Sua missão consiste em envolver cada 
          membro da igreja no Relacionamento através do incentivo às ações solidárias semanais. 
          Nosso objetivo é ter a maioria dos membros vivendo o amor ao próximo como seu estilo de vida.
        </HighlightsText>

        <HighlightsText>
          Uma vez ao ano, a Igreja Adventista realiza a campanha da recolta para levantar fundos ao 
          trabalho solidário. Através dessa campanha, a comunidade conhece as iniciativas da ASA 
          com a oportunidade de colaborar.
        </HighlightsText>

        <HighlightsText>
          Exclusivamente na ACSR, desde 2015, os valores da recolta são destinados para o Fundo 
          Solidário Educacional, desta forma, alunos abaixo da linha da pobreza têm a oportunidade 
          de estudar nas escolas adventistas. O Fundo paga todas as mensalidades do ano letivo, 
          além de fornecer uniforme completo e material escolar. Os recursos recoltados no ano 
          corrente ajudam os alunos no ano seguinte. De 2019 a 2021, oito alunos foram ajudados 
          e em 2022, nove alunos receberam ajuda financeira.
        </HighlightsText>

        <HighlightsText>
          Ao longo de cada ano, os líderes da ASA foram treinados com capacitações gerais, 
          regionais e locais para desenvolver novos líderes e prover inspiração, estratégias 
          e materiais para o trabalho nos postos locais.
        </HighlightsText>
      </HighlightsContainer>
      <ThanksContainer>
        <br /><br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br /><br />
        <ThanksText>
          Meus agradecimentos pelos quatro anos de trabalho no Departamento de Educação da 
          ACSR são em primeiro lugar para Deus, pelas maravilhosas bênçãos recebidas, pela 
          saúde e motivação renovada a cada dia para cumprir a missão. Pela honra de servi-Lo 
          através da Educação Adventista.
          <br /><br />
          Agradeço ao meu esposo, Abraão Vicente pelo apoio constante, suas orações, as 
          palavras de encorajamento, bem como à toda minha família!
          <br /><br />
          Também ressalto meu imenso sentimento de gratidão pelos companheiros que servem 
          nas Escolas Adventistas da ACSR: diretores, pastores, tesoureiros, coordenadoras 
          pedagógicas, orientadoras educacionais, secretários escolares, professores e demais 
          funcionários, bem como aos colegas do Departamento de Educação! Que privilégio poder 
          trabalharmos juntos para fortalecer a missão da Educação Adventista aqui em nosso 
          território.
          <br /><br />
          Agradeço aos colegas departamentais da ACSR, aos administradores da ACSR pastor 
          Marcos Júnior, pastor Rogério Gurniak e Everson Braga. Também ao pastor Elton Alves 
          e Laudecir Mazzo que também administraram o campo em anos anteriores. 
          Finalmente, minha gratidão à administração da USB com toda sua equipe do 
          departamento de Educação, especialmente ao pastor Rubens Silva.
          <br /><br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default PauloAguiar;

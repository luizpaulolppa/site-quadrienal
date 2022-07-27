import React, { useEffect, useState } from "react";

import fabiana from "../../assets/fabiana-nowack/fabiana-without-back.png";
import totalStudents from "../../assets/fabiana-nowack/total-students.png";
import newStudents from "../../assets/fabiana-nowack/new-students.png";
import adventistStudents from "../../assets/fabiana-nowack/adventist-students.png";
import loyalty from "../../assets/fabiana-nowack/loyalty.png";
import totalTeachers from "../../assets/fabiana-nowack/total-teachers.png";
import philanthropy from "../../assets/fabiana-nowack/philanthropy.png";

import arrowDown from "../../assets/arrow-down-white.svg";
import arrowDownGreen from "../../assets/seta-para-baixo.png";
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
  HighlightsSubTitle,
} from "./styles";


const FabianaNowack: React.FC = () => {
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
          <img src={fabiana} alt="Fabiana" />
        </ImageContainer>
        <Name>
          Fabiana
          <br /> Nowack
        </Name>
        <Role>
          Educação Adventista
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>“A</FirstLetter>
            <Text>
              quele que coopera com o propósito divino, transmitindo aos jovens 
              o conhecimento de 
            </Text>
          </TextCapitularContainer>
          <Text>
            Deus, e moldando-lhes o caráter em harmonia com o Seu, realiza uma elevada 
            e nobre obra. Suscitando o desejo de atingir o ideal de Deus, 
            apresenta uma educação que é tão alta como o Céu e tão extensa como o Universo; 
            uma educação que não se poderá completar nesta vida, mas que se prolongará 
            na vindoura; educação que garante ao estudante eficiente sua promoção da escola 
            preparatória da Terra para o curso superior – a escola celestial” 
          <br /><br />
          (Ellen G. White, Educação, p. 9).
          </Text>
          <br />
        </TextContainer>
      </TitleContainer>
      <GreenBox>
        <br />
          Estrutura educacional das nove escolas que compõem o Departamento 
          de Educação na ACRS:
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
      </GreenBox>
      <HighlightsContainer>
        <br /><br />
        <img src={arrowDownGreen} style={{ height: '48px', width: '48px' }}alt="Seta para baixo verde" />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          O Departamento de Educação da ACSR foi muito abençoado neste último quadriênio, 
          pois mantivemos a missão e filosofia da Educação Adventista em todas as unidades 
          escolares. Acompanhe alguns índices de pessoal e dados administrativos:
        </HighlightsText>
        <br /><br /><br />
        <HighlightsSubTitle>Total de Alunos</HighlightsSubTitle>
        <br /><br />
        <img src={totalStudents} alt="Total de alunos" />
        <br /><br /><br />
        <HighlightsSubTitle>Alunos novos</HighlightsSubTitle>
        <br /><br />
        <img src={newStudents} alt="Novos alunos" />
        <br /><br /><br />
        <HighlightsSubTitle>Alunos adventistas</HighlightsSubTitle>
        <br /><br />
        <img src={adventistStudents} alt=" Alunos adventistas" />
        <br /><br /><br />
        <HighlightsSubTitle>Fidelização (%)</HighlightsSubTitle>
        <br /><br />
        <img src={loyalty} alt="Fidelização" />
        <br /><br /><br />
        <HighlightsSubTitle>Total de professores</HighlightsSubTitle>
        <br /><br />
        <img src={totalTeachers} alt="Total de professores" />
        <br /><br />
        <HighlightsSubTitle>Resultado Financeiro</HighlightsSubTitle>
        <br /><br /><br /><br />
        <HighlightsTitle>Filantropia</HighlightsTitle>
        <br /><br />
        <HighlightsText>
          Esta é uma concessão governamental à Instituição Adventista de Educação, 
          regida por legislação nacional própria que visa à concessão de bolsas de 
          estudos para famílias que se enquadram num perfil socioeconômico específico. 
          Os critérios são apresentados no Edital de Filantropia, divulgado em cada escola, 
          no período da campanha de matrículas. 
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Para terem acesso à gratuidade escolar de 50% ou 100%, pais ou responsáveis 
          enviam a documentação (conforme edital nacional de filantropia) de forma on-line, 
          para ser analisada pela assistente social. O resultado é divulgado 
          (de acordo com edital nacional de filantropia) mediante as vagas existentes 
          nas turmas de cada unidade e o percentual de alunos pagantes matriculados, 
          conforme a legislação vigente. Desta forma, várias famílias são atendidas pela 
          escola a cada ano.
        </HighlightsText>
        <br /><br />
        <img src={philanthropy} alt="Filantroipia" />
        <br /><br /><br /><br />
        <HighlightsTitle>Implementação do Ensino Médio em Cachoeirinha</HighlightsTitle>
        <br /><br />
        <HighlightsText>
          Em 2019, o Conselho Estadual de Educação autorizou a realização do Ensino 
          Médio na unidade escolar em Cachoeirinha. Assim, em 2020, 59 alunos iniciaram 
          o Ensino Médio nas turmas de 1º e 2º anos. Em 2021, houve a formatura da primeira 
          turma do Ensino Médio do Colégio Adventista de Cachoeirinha.
        </HighlightsText>
        <br /><br /><br /><br />
        <HighlightsTitle>Nova Escola Adventista em Canoas</HighlightsTitle>
        <br /><br />
        <HighlightsText>
          Em 11 de dezembro de 2019, o Conselho Estadual de Educação autorizou o início 
          dos trabalhos da Escola Adventista de Canoas. Em 28 de janeiro de 2020, a Escola 
          foi inaugurada numa cerimônia com autoridades denominacionais, municipais e 
          estaduais, além de funcionários, novos professores, pais e alunos. No mesmo dia, 
          foi comemorado o alcance da meta de alunos para 2020. Em 10 de fevereiro de 2020, 
          aconteceu o primeiro dia letivo da escola. Nos anos seguintes, o gráfico mostra o 
          aumento exponencial em todas as áreas da unidade.
        </HighlightsText>
        <br /><br /><br /><br />
        <HighlightsTitle>Novo terreno para a Escola de Caxias do Sul</HighlightsTitle>
        <br /><br />
        <HighlightsText>
          Em 2021, houve a aquisição do terreno da esquina ao lado da Escola Adventista de 
          Caxias do Sul, com quatro lotes com 1.953,85 m². Estamos em fase de elaboração do 
          projeto arquitetônico dos novos prédios para a ampliação da escola.
        </HighlightsText>
        <br /><br /><br /><br />
        <HighlightsTitle>Ampliações de estruturas físicas das unidades escolares da ACSR</HighlightsTitle>
        <br />
        <HighlightsSubTitle>Colégio Adventista de Cachoeirinha</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Em 2019, aconteceram duas ampliações com área de 566,58 m², compreendendo seis 
          salas de aulas, laboratório de Química, Física e Biologia, parque indoor e novas 
          salas de atendimento, além da reforma para nova biblioteca e nova sala de 
          professores com área de 265,62 m².
        </HighlightsText>
        <br />
        <HighlightsText>
          Em 2021 e 2022, um prédio de quatro andares foi construído para aumento do 
          pátio de alunos, quatro salas de aulas, salas de recursos, sala de reforço, 
          ginásio coberto, quadras esportivas descobertas, sala maker, depósitos para 
          banheiros e afins, num total de 1.871,82 m².
        </HighlightsText>
        <br /><br /><br />
        <HighlightsSubTitle>Colégio Adventista de Santa Maria</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Edificou-se em 2021 o prédio principal da escola, com três andares, 
          que contam com: área administrativa, oito salas administrativas, nove salas 
          de aula, biblioteca, sala dos professores, laboratório de Química, Física e 
          Biologia compreendendo uma área ampliada de 2.665,61 m². 
        </HighlightsText>
        <br /><br /><br />
        <HighlightsSubTitle>Escola Adventista de Canoas</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Ampliação e reforma de seis novas salas de aula, área administrativa, sala de 
          professores, biblioteca escolar, numa área construída de 1.000,15 m². 
        </HighlightsText>
        <br /><br /><br />
        <HighlightsSubTitle>Colégio Adventista Marechal Rondon</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Fachada, nova entrada de alunos pela Rua Emetério e as salas: de professores, 
          pastoral, de recursos, maker, de aula e de TI. Total de 301,88 m² de reforma e 
          construção. 
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

export default FabianaNowack;

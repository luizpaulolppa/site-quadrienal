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
  HighlightsSubTitle2,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const FabianaNowack: React.FC = () => {
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
      <TitleContainer id="section1">
        <ImageContainer>
          <img src={fabiana} alt="Fabiana" />
        </ImageContainer>
        <Name>
          Fabiana
          <br /> Nowack
        </Name>
        <Role>Educa????o Adventista</Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???A</FirstLetter>
            <Text>
              quele que coopera com o prop??sito divino, transmitindo aos jovens
              o conhecimento de
            </Text>
          </TextCapitularContainer>
          <Text>
            Deus, e moldando-lhes o car??ter em harmonia com o Seu, realiza uma
            elevada e nobre obra. Suscitando o desejo de atingir o ideal de
            Deus, apresenta uma educa????o que ?? t??o alta como o C??u e t??o extensa
            como o Universo; uma educa????o que n??o se poder?? completar nesta
            vida, mas que se prolongar?? na vindoura; educa????o que garante ao
            estudante eficiente sua promo????o da escola preparat??ria da Terra
            para o curso superior ??? a escola celestial???
            <br />
            <br />
            (Ellen G. White, Educa????o, p. 9).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <div id="start_fade1"></div>
      <GreenBox>
        <br />
        <FadeIn id="fade1" duration="3s" delay="0.2s">
          Estrutura educacional das nove escolas que comp??em o Departamento de
          Educa????o na ACRS:
        </FadeIn>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
      </GreenBox>
      <HighlightsContainer>
        <br />
        <br />
        <div>
          <div style={{ minWidth: "55%" }}>
            <HighlightsText className="bold">Cachoeira do Sul</HighlightsText>
            <HighlightsText className="bold" style={{ margin: "0 5px" }}>
              180
            </HighlightsText>
            <HighlightsText className="bold" style={{ margin: "0 5px" }}>
              20
            </HighlightsText>
          </div>
          <div style={{ margin: "0 10px" }}>
            <HighlightsText>
              Educa????o Infantil, Ensino Fundamental - S??ries Iniciais
            </HighlightsText>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsText>
          A equipe do departamento de Educa????o que atua apoiando as escolas,
          conta com:
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Departamental de Educa????o ???{" "}
          <HighlightsText className="green">
            Fabiana Hartmann Nowack
          </HighlightsText>
          <br />
          <br />
          Coordenadora Pedag??gica ???{" "}
          <HighlightsText className="green">Roseli Aguero</HighlightsText>
          <br />
          <br />
          Coordenadora da Pastoral Escolar ???{" "}
          <HighlightsText className="green">Monie Braga</HighlightsText>
          <br />
          <br />
          Secret??ria ???{" "}
          <HighlightsText className="green">Daniela Pires</HighlightsText>
          <br />
          <br />
          Gerente Financeiro ???{" "}
          <HighlightsText className="green">Phelipe Contri</HighlightsText>
          <br />
          <br />
          Contadores ???{" "}
          <HighlightsText className="green">
            Tiago Pilger e Luis Librelotto
          </HighlightsText>
          <br />
          <br />
          Cobran??a ???{" "}
          <HighlightsText className="green">Robson Zanoni</HighlightsText>
          <br />
          <br />
          Orientadora Educacional de Inclus??o ???{" "}
          <HighlightsText className="green">Sandra Pedroso</HighlightsText>
          <br />
          <br />
          Atendente Educacional Especializada ???{" "}
          <HighlightsText className="green">Lia Cardoso</HighlightsText>
          <br />
          <br />
          Bibliotec??ria ???{" "}
          <HighlightsText className="green">Martinha Silveira</HighlightsText>
          <br />
          <br />
          Nutricionista ???{" "}
          <HighlightsText className="green">P??mela Silva</HighlightsText>
          <br />
          <br />
          Marketing Educacional ???{" "}
          <HighlightsText className="green">
            Chaylloana Librelotto
          </HighlightsText>
          <br />
          <br />
          Assistente Social ???{" "}
          <HighlightsText className="green">Albertina Feck</HighlightsText>
          <br /> <br />
        </HighlightsText>
        <br />
        <br />
        <img
          src={arrowDownGreen}
          style={{ height: "48px", width: "48px" }}
          alt="Seta para baixo verde"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsText>
          O Departamento de Educa????o da ACSR foi muito aben??oado neste ??ltimo
          quadri??nio, pois mantivemos a miss??o e filosofia da Educa????o
          Adventista em todas as unidades escolares. Acompanhe alguns ??ndices de
          pessoal e dados administrativos:
        </HighlightsText>
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Total de Alunos</HighlightsSubTitle>
        <br />
        <br />
        <img src={totalStudents} alt="Total de alunos" />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Alunos novos</HighlightsSubTitle>
        <br />
        <br />
        <img src={newStudents} alt="Novos alunos" />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Alunos adventistas</HighlightsSubTitle>
        <br />
        <br />
        <img src={adventistStudents} alt=" Alunos adventistas" />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Fideliza????o (%)</HighlightsSubTitle>
        <br />
        <br />
        <img src={loyalty} alt="Fideliza????o" />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Total de professores</HighlightsSubTitle>
        <br />
        <br />
        <img src={totalTeachers} alt="Total de professores" />
        <br />
        <br />
        <HighlightsSubTitle>Resultado Financeiro</HighlightsSubTitle>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Filantropia</HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Esta ?? uma concess??o governamental ?? Institui????o Adventista de
          Educa????o, regida por legisla????o nacional pr??pria que visa ?? concess??o
          de bolsas de estudos para fam??lias que se enquadram num perfil
          socioecon??mico espec??fico. Os crit??rios s??o apresentados no Edital de
          Filantropia, divulgado em cada escola, no per??odo da campanha de
          matr??culas.
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          Para terem acesso ?? gratuidade escolar de 50% ou 100%, pais ou
          respons??veis enviam a documenta????o (conforme edital nacional de
          filantropia) de forma on-line, para ser analisada pela assistente
          social. O resultado ?? divulgado (de acordo com edital nacional de
          filantropia) mediante as vagas existentes nas turmas de cada unidade e
          o percentual de alunos pagantes matriculados, conforme a legisla????o
          vigente. Desta forma, v??rias fam??lias s??o atendidas pela escola a cada
          ano.
        </HighlightsText>
        <br />
        <br />
        <img src={philanthropy} alt="Filantroipia" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>
          Implementa????o do Ensino M??dio em Cachoeirinha
        </HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Em 2019, o Conselho Estadual de Educa????o autorizou a realiza????o do
          Ensino M??dio na unidade escolar em Cachoeirinha. Assim, em 2020, 59
          alunos iniciaram o Ensino M??dio nas turmas de 1?? e 2?? anos. Em 2021,
          houve a formatura da primeira turma do Ensino M??dio do Col??gio
          Adventista de Cachoeirinha.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Nova Escola Adventista em Canoas</HighlightsTitle>
        <br />
        <HighlightsText>
          Em 11 de dezembro de 2019, o Conselho Estadual de Educa????o autorizou o
          in??cio dos trabalhos da Escola Adventista de Canoas. Em 28 de janeiro
          de 2020, a Escola foi inaugurada numa cerim??nia com autoridades
          denominacionais, municipais e estaduais, al??m de funcion??rios, novos
          professores, pais e alunos. No mesmo dia, foi comemorado o alcance da
          meta de alunos para 2020. Em 10 de fevereiro de 2020, aconteceu o
          primeiro dia letivo da escola. Nos anos seguintes, o gr??fico mostra o
          aumento exponencial em todas as ??reas da unidade.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>
          Novo terreno para a Escola de Caxias do Sul
        </HighlightsTitle>
        <br />
        <HighlightsText>
          Em 2021, houve a aquisi????o do terreno da esquina ao lado da Escola
          Adventista de Caxias do Sul, com quatro lotes com 1.953,85 m??. Estamos
          em fase de elabora????o do projeto arquitet??nico dos novos pr??dios para
          a amplia????o da escola.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>
          Amplia????es de estruturas f??sicas das unidades escolares da ACSR
        </HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Escola Adventista de Cachoeira do Sul ??? Constru????o de duas novas salas
          de aula com 170,60 m?? de constru????o.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>
          Col??gio Adventista de Cachoeirinha
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Em 2019, aconteceram duas amplia????es com ??rea de 566,58 m??,
          compreendendo seis salas de aulas, laborat??rio de Qu??mica, F??sica e
          Biologia, parque indoor e novas salas de atendimento, al??m da reforma
          para nova biblioteca e nova sala de professores com ??rea de 265,62 m??.
        </HighlightsText>
        <br />
        <HighlightsText>
          Em 2021 e 2022, um pr??dio de quatro andares foi constru??do para
          aumento do p??tio de alunos, quatro salas de aulas, salas de recursos,
          sala de refor??o, gin??sio coberto, quadras esportivas descobertas, sala
          maker, dep??sitos para banheiros e afins, num total de 1.871,82 m??.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>
          Col??gio Adventista de Santa Maria
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Edificou-se em 2021 o pr??dio principal da escola, com tr??s andares,
          que contam com: ??rea administrativa, oito salas administrativas, nove
          salas de aula, biblioteca, sala dos professores, laborat??rio de
          Qu??mica, F??sica e Biologia compreendendo uma ??rea ampliada de 2.665,61
          m??.
        </HighlightsText>
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Escola Adventista de Canoas</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Amplia????o e reforma de seis novas salas de aula, ??rea administrativa,
          sala de professores, biblioteca escolar, numa ??rea constru??da de
          1.000,15 m??.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>
          Col??gio Adventista Marechal Rondon
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Fachada, nova entrada de alunos pela Rua Emet??rio e as salas: de
          professores, pastoral, de recursos, maker, de aula e de TI. Total de
          301,88 m?? de reforma e constru????o.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>Certifica????o Escola Saud??vel 2020</HighlightsTitle>
        <br />
        <HighlightsText>
          Avalia????o institucional educacional da Uni??o Sul Brasileira para as
          escolas adventistas, departamentos de Educa????o e seus ??ndices nas
          ??reas: espiritual, pedag??gica e administrativa. Na ocasi??o, dois
          trof??us foram entregues ?? ACSR, que obteve o 2?? lugar na USB em
          pontua????o geral de campo mais saud??vel, capta????o de alunos, batismos e
          crescimento: em matr??culas, real da receita e na quantidade de alunos
          adventistas.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>??rea Espiritual</HighlightsTitle>
        <br />
        <HighlightsText>
          A miss??o de Educar Salvando ?? nossa raz??o de existir. Por isso,
          mantemos no Calend??rio das Escolas Adventistas da ACSR todos os
          programas missionais da IASD: 10 dias de Ora????o, Impacto Esperan??a,
          Semana Santa, Miss??o Calebe, Semana de Ora????o, Classes B??blicas, al??m
          das aulas de Ensino Religioso da Educa????o Infantil ao Ensino M??dio.
          Iniciativas que foram destaque deste quadri??nio:
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Minha Escola, Minha Igreja (MEMI)
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          S??o igrejas e grupos que est??o sendo plantados nas escolas, para
          atender alunos e pais de alunos. Atualmente, est?? em pleno
          funcionamento a Igreja do CAMAR, que iniciou em agosto de 2020, com 42
          membros e um culto para alunos, denominado ???Descendentes???, com 60
          alunos adolescentes participando nas sextas-feiras, ?? noite. Nesta
          congrega????o foram realizados dez batismos em 2021.
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          Em 10 de abril de 2021, o grupo ICASM iniciou suas atividades no
          Col??gio Adventista de Santa Maria. Nele existem 28 membros e 8
          interessados. As demais escolas est??o na fase de implanta????o do grupo
          base para a forma????o de novas congrega????es.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Classes B??blicas</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Nas unidades escolares mantemos v??rias classes b??blicas com alunos,
          pais e servidores durante o ano letivo. O crescimento pode ser
          acompanhado a cada ano:
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Batismos</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Que momento de festa! Nas escolas, ele se repete com alunos, pais,
          servidores e amigos que decidem amar e servir ao Senhor para sempre.
          Tivemos a oportunidade de celebrar os seguintes batismos:
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Jornada Espiritual de Fidelidade ??? Contagem Regressiva
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          A Jornada ?? realizada a cada ano, com todos os servidores das unidades
          escolares com o objetivo de resguardar a comunh??o e o relacionamento
          de todos os funcion??rios e professores.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Together ??? Encontro de Alunos Adventistas
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          O Together foi criado para fortalecer a identidade adventista de
          nossos alunos. No primeiro encontro realizado em 2022, no IACS,
          participaram 90 alunos adventistas que ouviram temas sobre: fam??lia,
          hist??ria de vida, comunh??o, sexualidade, relacionamento e miss??o.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Miss??o Calebe School</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As escolas da ACSR est??o engajadas nas a????es mission??rias da IASD. Por
          isso, foi planejado e realizado o Calebe School a cada ano.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Visita de Professores aos pais e alunos
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Mais de 1.500 visitas foram realizadas a cada ano, com acolhimento e
          ??nfase espiritual.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Celebras</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          ?? o momento espiritual com os alunos em cada escola, semanal ou
          quinzenalmente.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Retiros Espirituais</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Os retiros s??o realizados anualmente, com todos os servidores das
          unidades escolares, com o objetivo fortalecer a comunh??o, o
          relacionamento e a miss??o.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Recolta nas Escolas</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As escolas realizam anualmente a campanha da recolta, visando
          arrecadar donativos, tais como: roupas, alimentos e valores em
          esp??cie. As roupas e alimentos s??o destinados ?? comunidade e ASA das
          igrejas locais. J?? as doa????es em dinheiro s??o somadas ??s doa????es da
          IASD para compor o Fundo Solid??rio Educacional que, a cada ano, mant??m
          alunos novos carentes com a anuidade escolar, livros did??ticos e kit
          de uniforme escolar. Os alunos benefici??rios do Fundo Solid??rio
          Educacional s??o distribu??dos nas diversas unidades escolares da ACSR.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Implementa????o da Coordena????o da Pastoral Escolar
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Atualmente, sete pastores e cinco professores de Ensino Religioso
          atendem ??s escolas da ACSR. Desde 2021, todo o programa evangel??stico
          das escolas est?? sendo coordenado pela professora Monie Braga com os
          pastores escolares. Assim, temos dire????o, miss??o com planejamento e
          execu????o muito focados em discipulado dos alunos adventistas, al??m da
          prega????o do evangelho.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsTitle>??rea Pedag??gica</HighlightsTitle>
        <br />
        <HighlightsSubTitle2>Forma????o continuada</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          S??o realizados cursos para a equipe de professores e funcion??rios em
          diversas ??reas de conhecimento, para a forma????o profissional.
        </HighlightsText>
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Aula de Projeto de Vida</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Trabalha o autoconhecimento da Educa????o Infantil ao Ensino M??dio.
        </HighlightsText>
        <br />
        <br />
        <HighlightsSubTitle2>Implanta????o Novo Ensino M??dio</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Conforme a legisla????o nacional sobre Educa????o, o Ensino M??dio sofreu
          altera????o. A partir de 2022, foi implantado o Novo Ensino M??dio nas
          unidades de Santa Maria, Cachoeirinha e Marechal Rondon, com maior
          carga hor??ria, prepara????o para a ??rea vocacional, empreendedorismo,
          vestibulares, tendo como fundamento a Filosofia Educacional
          Adventista.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Ensino Bil??ngue</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Desde 2019, implantamos o Programa Bil??ngue nos Col??gios de
          Cachoeirinha e Marechal Rondon para as turmas da Educa????o Infantil e
          at?? o 2?? ano do Ensino Fundamental. Desta forma, os alunos interagem
          com atividades na L??ngua Inglesa todos os dias letivos do ano, o que
          permite a flu??ncia deles com a nova l??ngua. Est?? no planejamento
          incluir outras escolas nos pr??ximos anos.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Bibliotecas Escolares</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Expans??o de ??rea f??sica das bibliotecas, completa reforma,
          mobili??rios, equipamentos novos e acervos atualizados, nas seguintes
          escolas: Santo ??ngelo (2019), Iju?? (2020), Cachoeirinha (2019),
          Cachoeira do Sul (2021), Santa Maria (2021) e Canoas (2022). O total
          do acervo das nove bibliotecas escolares s??o:
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>
          Espa??os e Equipamentos Pedag??gicos
        </HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Atualiza????o de equipamentos, reestrutura????o de espa??os e inaugura????o
          de salas especiais para o desenvolvimento escolar dos alunos durante
          este quadri??nio, como: Laborat??rio de Inform??tica, equipamentos de
          inform??tica para salas de aulas, tablets ou Chromebooks para uso dos
          alunos em aula.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>E-class</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As aulas na Escola Adventista n??o pararam durante a pandemia da
          Covid-19, que afetou drasticamente os anos letivos de 2020 e 2021. A
          Educa????o Adventista desenvolveu a plataforma digital E-class para
          atender as aulas remotas nesse per??odo e assim manter o ambiente
          discente e docente para todas as unidades escolares no Brasil,
          incluindo as escolas da ACSR.
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          E-class possibilitou a intera????o entre professores e alunos como:
          explica????es de aulas, envio de material escolar para os estudantes,
          entrega de tarefas e atividades para os professores, feedback das
          tarefas realizadas, realiza????o de provas e simulados. Este material
          fica armazenado diariamente, por disciplina, e pode ser acessado por
          pais, discentes e docentes. Aulas e atividades do E-class das nove
          unidades escolares da ACRS de fevereiro ao in??cio de setembro de 2021:
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </HighlightsContainer>
      <ThanksContainer>
        <br />
        <br />
        <img src={yellowArrowDown} alt="Seta para baixo amarela" />
        <br />
        <ThanksTitle>Agradecimentos</ThanksTitle>
        <br />
        <br />
        <ThanksText>
          Meus agradecimentos pelos quatro anos de trabalho no Departamento de
          Educa????o da ACSR s??o em primeiro lugar para Deus, pelas maravilhosas
          b??n????os recebidas, pela sa??de e motiva????o renovada a cada dia para
          cumprir a miss??o. Pela honra de servi-Lo atrav??s da Educa????o
          Adventista.
          <br />
          <br />
          Agrade??o ao meu esposo, Abra??o Vicente pelo apoio constante, suas
          ora????es, as palavras de encorajamento, bem como ?? toda minha fam??lia!
          <br />
          <br />
          Tamb??m ressalto meu imenso sentimento de gratid??o pelos companheiros
          que servem nas Escolas Adventistas da ACSR: diretores, pastores,
          tesoureiros, coordenadoras pedag??gicas, orientadoras educacionais,
          secret??rios escolares, professores e demais funcion??rios, bem como aos
          colegas do Departamento de Educa????o! Que privil??gio poder trabalharmos
          juntos para fortalecer a miss??o da Educa????o Adventista aqui em nosso
          territ??rio.
          <br />
          <br />
          Agrade??o aos colegas departamentais da ACSR, aos administradores da
          ACSR pastor Marcos J??nior, pastor Rog??rio Gurniak e Everson Braga.
          Tamb??m ao pastor Elton Alves e Laudecir Mazzo que tamb??m administraram
          o campo em anos anteriores. Finalmente, minha gratid??o ?? administra????o
          da USB com toda sua equipe do departamento de Educa????o, especialmente
          ao pastor Rubens Silva.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default FabianaNowack;

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
        <br />
      </GreenBox>
      <HighlightsContainer>
      <br /><br />
        <div>
          <div style={{ minWidth: '55%'}}>
            <HighlightsText className="bold">
              Cachoeira do Sul
            </HighlightsText>
            <HighlightsText  className="bold" style={{ margin: '0 5px'}}>
              180
            </HighlightsText>
            <HighlightsText  className="bold" style={{ margin: '0 5px'}}>
              20
            </HighlightsText>
          </div>
          <div style={{ margin: '0 10px'}}>
            <HighlightsText>
              Educação Infantil, Ensino Fundamental - Séries Iniciais
            </HighlightsText>
          </div>
        </div>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsText>
          A equipe do departamento de Educação que atua apoiando as escolas, conta com:
        </HighlightsText>
        <br /> <br />
        <HighlightsText>
          Departamental de Educação — <HighlightsText className="green">Fabiana Hartmann Nowack</HighlightsText>
          <br /><br />
          Coordenadora Pedagógica — <HighlightsText className="green">Roseli Aguero</HighlightsText> 
          <br /><br />
          Coordenadora da Pastoral Escolar — <HighlightsText className="green">Monie Braga</HighlightsText>
          <br /><br />
          Secretária — <HighlightsText className="green">Daniela Pires</HighlightsText>
          <br /><br />
          Gerente Financeiro — <HighlightsText className="green">Phelipe Contri</HighlightsText>
          <br /><br />
          Contadores — <HighlightsText className="green">Tiago Pilger e Luis Librelotto</HighlightsText>
          <br /><br />
          Cobrança — <HighlightsText className="green">Robson Zanoni</HighlightsText>
          <br /><br />
          Orientadora Educacional de Inclusão — <HighlightsText className="green">Sandra Pedroso</HighlightsText>
          <br /><br />
          Atendente Educacional  Especializada — <HighlightsText className="green">Lia Cardoso</HighlightsText>
          <br /><br />
          Bibliotecária — <HighlightsText className="green">Martinha Silveira</HighlightsText>
          <br /><br />
          Nutricionista — <HighlightsText className="green">Pâmela Silva</HighlightsText>
          <br /><br />
          Marketing Educacional — <HighlightsText className="green">Chaylloana Librelotto</HighlightsText>
          <br /><br />
          Assistente Social — <HighlightsText className="green">Albertina Feck</HighlightsText>
          <br /> <br />
        </HighlightsText>
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
        <br /><br /><br /><br /><br />
        <HighlightsTitle>Implementação do Ensino Médio em Cachoeirinha</HighlightsTitle>
        <br /><br />
        <HighlightsText>
          Em 2019, o Conselho Estadual de Educação autorizou a realização do Ensino 
          Médio na unidade escolar em Cachoeirinha. Assim, em 2020, 59 alunos iniciaram 
          o Ensino Médio nas turmas de 1º e 2º anos. Em 2021, houve a formatura da primeira 
          turma do Ensino Médio do Colégio Adventista de Cachoeirinha.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsTitle>Nova Escola Adventista em Canoas</HighlightsTitle>
        <br />
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
        <br />
        <HighlightsText>
          Em 2021, houve a aquisição do terreno da esquina ao lado da Escola Adventista de 
          Caxias do Sul, com quatro lotes com 1.953,85 m². Estamos em fase de elaboração do 
          projeto arquitetônico dos novos prédios para a ampliação da escola.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsTitle>Ampliações de estruturas físicas das unidades escolares da ACSR</HighlightsTitle>
        <br />
        <br />
        <HighlightsText>
          Escola Adventista de Cachoeira do Sul — Construção de duas novas salas de aula com 170,60 m² de construção.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle >Colégio Adventista de Cachoeirinha</HighlightsSubTitle>
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
        <br /><br /><br /><br />
        <br /><br /><br /><br />
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
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle>Colégio Adventista Marechal Rondon</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Fachada, nova entrada de alunos pela Rua Emetério e as salas: de professores, 
          pastoral, de recursos, maker, de aula e de TI. Total de 301,88 m² de reforma e 
          construção. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsTitle>Certificação Escola Saudável 2020</HighlightsTitle>
        <br />
        <HighlightsText>
          Avaliação institucional educacional da União Sul Brasileira para as 
          escolas adventistas, departamentos de Educação e seus índices nas áreas: 
          espiritual, pedagógica e administrativa. Na ocasião, dois troféus foram 
          entregues à ACSR, que obteve o 2º lugar na USB em pontuação geral de campo mais 
          saudável, captação de alunos, batismos e crescimento: em matrículas, real da 
          receita e na quantidade de alunos adventistas.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsTitle>Área Espiritual</HighlightsTitle>
        <br />
        <HighlightsText>
          A missão de Educar Salvando é nossa razão de existir. Por isso, mantemos no 
          Calendário das Escolas Adventistas da ACSR todos os programas missionais da IASD: 
          10 dias de Oração, Impacto Esperança, Semana Santa, Missão Calebe, Semana de 
          Oração, Classes Bíblicas, além das aulas de Ensino Religioso da Educação Infantil 
          ao Ensino Médio. Iniciativas que foram destaque deste quadriênio:
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Minha Escola, Minha Igreja (MEMI)</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          São igrejas e grupos que estão sendo plantados nas escolas, para atender alunos 
          e pais de alunos. Atualmente, está em pleno funcionamento a Igreja do CAMAR, 
          que iniciou em agosto de 2020, com 42 membros e um culto para alunos, denominado 
          ‘Descendentes’, com 60 alunos adolescentes participando nas sextas-feiras, à noite. Nesta congregação foram realizados dez batismos em 2021. 
        </HighlightsText>
        <br /><br />
        <HighlightsText>
          Em 10 de abril de 2021, o grupo ICASM iniciou suas atividades no Colégio 
          Adventista de Santa Maria. Nele existem 28 membros e 8 interessados. 
          As demais escolas estão na fase de implantação do grupo base para a formação 
          de novas congregações. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Classes Bíblicas</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Nas unidades escolares mantemos várias classes bíblicas com alunos, 
          pais e servidores durante o ano letivo. O crescimento pode ser acompanhado 
          a cada ano:
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Batismos</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Que momento de festa! Nas escolas, ele se repete com alunos, pais, servidores 
          e amigos que decidem amar e servir ao Senhor para sempre. Tivemos a 
          oportunidade de celebrar os seguintes batismos:
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Jornada Espiritual de Fidelidade — Contagem Regressiva</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          A Jornada é realizada a cada ano, com todos os servidores das unidades escolares 
          com o objetivo de resguardar a comunhão e o relacionamento de todos os 
          funcionários e professores.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Together — Encontro de Alunos Adventistas</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          O Together foi criado para fortalecer a identidade adventista de nossos alunos. 
          No primeiro encontro realizado em 2022, no IACS, participaram 90 alunos 
          adventistas que ouviram temas sobre: família, história de vida, comunhão, 
          sexualidade, relacionamento e missão. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Missão Calebe School</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As escolas da ACSR estão engajadas nas ações missionárias da IASD. 
          Por isso, foi planejado e realizado o Calebe School a cada ano.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Visita de Professores aos pais e alunos</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Mais de 1.500 visitas foram realizadas a cada ano, com acolhimento e 
          ênfase espiritual.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Celebras</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          É o momento espiritual com os alunos em cada escola, 
          semanal ou quinzenalmente.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Retiros Espirituais</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Os retiros são realizados anualmente, com todos os servidores das unidades 
          escolares, com o objetivo fortalecer a comunhão, o relacionamento e a missão. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Recolta nas Escolas</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As escolas realizam anualmente a campanha da recolta, visando arrecadar 
          donativos, tais como: roupas, alimentos e valores em espécie. As roupas e 
          alimentos são destinados à comunidade e ASA das igrejas locais. Já as doações 
          em dinheiro são somadas às doações da IASD para compor o Fundo Solidário 
          Educacional que, a cada ano, mantém alunos novos carentes com a anuidade 
          escolar, livros didáticos e kit de uniforme escolar. Os alunos beneficiários 
          do Fundo Solidário Educacional são distribuídos nas diversas unidades escolares 
          da ACSR. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Implementação da Coordenação da Pastoral Escolar</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Atualmente, sete pastores e cinco professores de Ensino Religioso atendem 
          às escolas da ACSR. Desde 2021, todo o programa evangelístico das escolas 
          está sendo coordenado pela professora Monie Braga com os pastores escolares. 
          Assim, temos direção, missão com planejamento e execução muito focados em 
          discipulado dos alunos adventistas, além da pregação do evangelho. 
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsTitle>Área Pedagógica</HighlightsTitle>
        <br />
        <HighlightsSubTitle2>Formação continuada</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          São realizados cursos para a equipe de professores e funcionários em 
          diversas áreas de conhecimento, para a formação profissional.
        </HighlightsText>
        <br />
        <br />
        <br />
        <HighlightsSubTitle2>Aula de Projeto de Vida</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Trabalha o autoconhecimento da Educação Infantil ao Ensino Médio.
        </HighlightsText>
        <br />
        <br />
        <HighlightsSubTitle2>Implantação Novo Ensino Médio</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Conforme a legislação nacional sobre Educação, o Ensino Médio sofreu 
          alteração. A partir de 2022, foi implantado o Novo Ensino Médio nas unidades 
          de Santa Maria, Cachoeirinha e Marechal Rondon, com maior carga horária, 
          preparação para a área vocacional, empreendedorismo, vestibulares, tendo como 
          fundamento a Filosofia Educacional Adventista.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Ensino Bilíngue</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Desde 2019, implantamos o Programa Bilíngue nos Colégios de Cachoeirinha e 
          Marechal Rondon para as turmas da Educação Infantil e até o 2º ano do Ensino 
          Fundamental. Desta forma, os alunos interagem com atividades na Língua Inglesa 
          todos os dias letivos do ano, o que permite a fluência deles com a nova língua. 
          Está no planejamento incluir outras escolas nos próximos anos.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Bibliotecas Escolares</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Expansão de área física das bibliotecas, completa reforma, mobiliários, 
          equipamentos novos e acervos atualizados, nas seguintes escolas: 
          Santo Ângelo (2019), Ijuí (2020), Cachoeirinha (2019), Cachoeira do Sul (2021), 
          Santa Maria (2021) e Canoas (2022). O total do acervo das nove bibliotecas 
          escolares são:
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>Espaços e Equipamentos Pedagógicos</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          Atualização de equipamentos, reestruturação de espaços e inauguração de salas 
          especiais para o desenvolvimento escolar dos alunos durante este quadriênio, 
          como: Laboratório de Informática, equipamentos de informática para salas de 
          aulas, tablets ou Chromebooks para uso dos alunos em aula.
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <HighlightsSubTitle2>E-class</HighlightsSubTitle2>
        <br />
        <HighlightsText>
          As aulas na Escola Adventista não pararam durante a pandemia da Covid-19, 
          que afetou drasticamente os anos letivos de 2020 e 2021. A Educação Adventista 
          desenvolveu a plataforma digital E-class para atender as aulas remotas nesse 
          período e assim manter o ambiente discente e docente para todas as unidades 
          escolares no Brasil, incluindo as escolas da ACSR. 
        </HighlightsText>
        <br />
        <br />
        <HighlightsText>
          E-class possibilitou a interação entre professores e alunos como: explicações 
          de aulas, envio de material escolar para os estudantes, entrega de tarefas e 
          atividades para os professores, feedback das tarefas realizadas, realização de 
          provas e simulados. Este material fica armazenado diariamente, por disciplina, 
          e pode ser acessado por pais, discentes e docentes. Aulas e atividades do 
          E-class das nove unidades escolares da ACRS de fevereiro ao início de setembro 
          de 2021:
        </HighlightsText>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
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

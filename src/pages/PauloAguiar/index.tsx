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
  HighlightsSubTitle,
} from "./styles";
import FadeIn from "../../components/FadeIn";

const PauloAguiar: React.FC = () => {
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

  useEffect(() => {
    const elements: Array<Element | null> = [];
    const el = document.querySelector("#fade2") as Element;
    const elTrigger = document.querySelector("#start_fade2") as Element;
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
          <img src={paulo} alt="Paulo" />
        </ImageContainer>
        <Name>
          Pr.
          <br />
          Paulo
          <br />
          Aguiar
        </Name>
        <Role>
          Minist??rio da Fam??lia, Mordomia Crist??, A????o Solid??ria Adventista
        </Role>
        <TextContainer>
          <TextCapitularContainer>
            <FirstLetter>???O</FirstLetter>
            <Text>tudo de mim em resposta ao Tudo de Deus".</Text>
          </TextCapitularContainer>
          <Text>
            ???Quando os seguidores de Cristo Lhe devolvem o que Lhe ?? devido,
            est??o acumulando tesouro que lhes ser?? entregue quando ouvirem as
            palavras: ???Bem est??, bom e fiel servo??? entra no gozo do teu Senhor???.
            Mt 25:23. ???O qual pelo gozo que Lhe estava proposto suportou a cruz,
            desprezando a afronta, e assentou-Se ?? destra do trono de Deus.??? Hb
            12:2. O gozo de ver almas redimidas, almas eternamente salvas, eis a
            recompensa de todos os que assentam os p??s nas pegadas dAquele que
            disse: 'Segue-Me.??????
            <br />
            <br />
            (Ellen G. White, O Desejado de Todas as Na????es, p. 523).
          </Text>
          <br />
          <br />
        </TextContainer>
      </TitleContainer>
      <HighlightsContainer>
        <br /> <br />
        <HighlightsTitle>Mordomia Crist??</HighlightsTitle>
        <br />
        <HighlightsText>
          Ainda em nossos dias, h?? pessoas que possuem bons recursos financeiros
          e um mordomo em sua casa. Essa fun????o, entre outras coisas, ??
          respons??vel por administrar a casa do dono. Cuidar da casa e dos
          empregados (cozinheiras, motorista, jardineiro etc.) est??o entre as
          suas poss??veis atribui????es.
        </HighlightsText>
        <br />
        <HighlightsText>
          Devido ?? sua posi????o, o mordomo geralmente tem grande liberdade com
          acesso a tudo que pertence ao propriet??rio e deve ser uma pessoa de
          absoluta confian??a. Al??m disso, tudo o que est?? sob sua
          responsabilidade n??o lhe pertence, mas ao dono.
        </HighlightsText>
        <br />
        <HighlightsText>
          Ainda que essa analogia seja limitada, ela nos ajuda a entender o
          conceito da Mordomia Crist??. Deus ?? o dono de todas as coisas: o
          Universo, o mundo, os animais e claro, o ser humano. Apesar disso, Ele
          nos confiou a administra????o de nossa vida, corpo, tempo, dons e
          recursos materiais.
        </HighlightsText>
        <br />
        <HighlightsText>
          Portanto, ser um mordomo fiel de Deus, implica viver e administrar a
          nossa vida, reconhecendo por palavras e a????es, que Deus ?? o nosso
          Senhor e o ??nico dono de tudo que somos e temos.
        </HighlightsText>
        <br />
        <HighlightsText>
          A grande oferta de salva????o entregue por Deus na cruz do calv??rio, Seu
          Filho Amado, deve inspirar nossa profunda gratid??o e reconhecimento
          por Seu amor, bondade e cuidado. N??s s?? podemos ???dar??? a Deus ou
          devolver o que Ele j?? nos deu, como disse Davi: ???Porque quem sou eu, e
          quem ?? o meu povo para que pud??ssemos dar voluntariamente estas
          coisas? Porque tudo vem de ti, e n??s s?? damos o que vem das tuas m??os???
          (1Cr29:14).
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Reavivamento Espiritual</HighlightsTitle>
        <br />
        <HighlightsText>
          N??o existe reavivamento espiritual sem estudo di??rio da B??blia e
          ora????o. ?? tamb??m fun????o da igreja motivar seus membros atrav??s de
          encontros de ora????o e comunh??o. Ao longo deste quadri??nio, as igrejas
          da ACSR enfatizaram este reavivamento, atrav??s do Projeto ???Primeiro
          Deus ??? 10 dias de ora????o??? para contribuir nesse processo.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Semin??rio Te??rico-Pr??tico</HighlightsTitle>
        <br />
        <HighlightsText>
          Cada pastor distrital participou deste modelo de treinamento em que
          foi ressaltada a import??ncia da Mordomia Crist?? para o cumprimento da
          miss??o. Nestes quatro anos, 120 congrega????es foram atendidas com o
          programa.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Capacita????es</HighlightsTitle>
        <br />
        <HighlightsText>
          Os diretores de Mordomia foram capacitados por treinamentos regionais
          ou gerais, a cada in??cio de ano, para todo o campo. Nesses encontros,
          eles receberam inspira????o, motiva????o, materiais e orienta????o para
          honrar a Deus atrav??s da miss??o que lhes foi confiada, al??m da
          forma????o de novos l??deres. No quadri??nio, ocorreram tr??s encontros
          especiais para diretores de Mordomia e tesoureiros para guiar o
          trabalho nessas ??reas importantes da igreja.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Treinamentos nas trimestrais</HighlightsTitle>
        <br />
        <HighlightsText>
          Para consolidar a Mordomia Crist?? das Novas Gera????es, as professoras
          do Minist??rio da Crian??a e Minist??rio do Adolescente receberam
          capacita????o sobre o tema nas trimestrais.
        </HighlightsText>
        <br />
        <br />
        <HighlightsTitle>Treinamentos para as fam??lias</HighlightsTitle>
        <br />
        <HighlightsText>
          Atrav??s de encontros em igrejas e retiros espirituais, o tema da
          fidelidade a Deus foi abordado para refor??ar o relacionamento de
          l??deres e membros com Nosso Senhor.
        </HighlightsText>
        <br />
        <HighlightsTitle>Dados</HighlightsTitle>
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
      </HighlightsContainer>
      <div id="start_fade1"></div>
      <div id="start_fade2"></div>
      <GreenBox>
        <br />
        <span className="title">
          <FadeIn id="fade1" duration="3s" delay="0.2s">
            Minist??rio da Fam??lia
          </FadeIn>
        </span>
        <br />
        <br />
        <span className="sub-title">Ellen White escreveu: </span>
        <br />
        <br />
        <FadeIn id="fade2" duration="3s" delay="0.2s">
          "Uma fam??lia bem ordenada, bem disciplinada, ter?? poderosa influ??ncia
          para o bem"
        </FadeIn>
        <br />
        <br />
        <span className="footer">
          (Ellen G. White, Benefic??ncia Social, p.235).
        </span>
        <br />
        <div>
          <img src={arrowDown} alt="Down" />
        </div>
        <br />
        <br />
      </GreenBox>
      <HighlightsContainer>
        <HighlightsText>
          Grande ser?? o alcance e as ben????os que uma fam??lia crist?? poder??
          prover ao mundo, levando o testemunho de Cristo e aben??oando as
          pessoas e comunidade ao seu redor. Al??m disso, uma fam??lia crist??
          prov?? um ambiente seguro e acolhedor onde todos podem se desenvolver
          segundo a vontade do Senhor. Por isso, as a????es do Minist??rio da
          Fam??lia contribuem para este importante objetivo.
        </HighlightsText>
        <br /> <br />
        <br />
        <br />
        <img
          src={arrowDownRed}
          style={{ height: "48px", width: "48px" }}
          alt="Seta para baixo vermelha"
        />
        <br />
        <HighlightsTitle>Destaques</HighlightsTitle>
        <br />
        <HighlightsSubTitle>Curso de Noivos</HighlightsSubTitle>
        <br />
        <HighlightsText>
          A cada ano, foram realizados dois cursos de noivos de modo a preparar
          os casais para a vida conjugal, abordando temas essenciais como: vida
          espiritual, miss??o da fam??lia crist??, educa????o de filhos, intimidade,
          finan??as e comunica????o do casal.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Retiros e Encontros de Casais</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Nos distritos da ACSR tivemos 116 retiros ou encontros de casais neste
          quadri??nio. Esses encontros focalizaram a comunica????o do casal, maior
          intimidade entre eles e com Deus.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Encontro para pais</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Ao longo dos quatro anos, foram realizados 172 encontros para pais
          para auxiliar os pais na educa????o e preparo dos filhos para a vida.
          Nesses encontros, os principais temas tradados foram: disciplina
          crist??, finan??as para crian??as, educa????o crist?? e forma????o das novas
          gera????es para a miss??o.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Adora????o em Fam??lia</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Visando desenvolver espiritualmente as fam??lias no estudo da B??blia e
          do Esp??rito de Profecia, foram realizadas oito quartas-feiras de
          estudo de um livro do Esp??rito de Profecia por ano, em cada igreja.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Projeto Conectando Cora????es</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Atrav??s do incentivo de um ??lbum de figurinhas colecion??veis dos
          personagens b??blicos e outras a????es, as fam??lias foram incentivadas a
          crescer em cinco ??reas seguindo o acr??stico da palavra F??CIL:
          Fidelidade (d??zimos e ofertas), Adora????o (culto familiar), Comunh??o
          (estudo da B??blia e li????o), Intercess??o (ora????o em fam??lia) e Lazer
          (brincadeiras e atividades juntos).
        </HighlightsText>
        <br />
        <HighlightsSubTitle>
          Incentivo ?? fidelidade das novas gera????es
        </HighlightsSubTitle>
        <br />
        <HighlightsText>
          Neste quadri??nio, a ACSR incentivou os pais a fidelidade das novas
          gera????es tanto em eventos para fam??lias pastorais, funcion??rios e
          programa????es nas igrejas locais.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Capacita????o de l??deres</HighlightsSubTitle>
        <br />
        <HighlightsText>
          A cada ano, os l??deres do Minist??rio da Fam??lia eram treinados por
          capacita????es gerais e regionais com objetivo de desenvolver novos
          l??deres e prover conhecimento, motiva????o e materiais para o trabalho
          com as fam??lias da igreja.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>A????o Solid??ria Adventista (ASA)</HighlightsSubTitle>
        <br />
        <HighlightsText>
          A????o Solid??ria Adventista reflete a vis??o de impulsionar ideias e
          a????es ligadas a uma rela????o de aux??lio m??tuo, uma virtude crist?? que
          pratica a partilha de bens, sejam materiais ou espirituais, em
          atividades reais. Sua miss??o consiste em envolver cada membro da
          igreja no Relacionamento atrav??s do incentivo ??s a????es solid??rias
          semanais. Nosso objetivo ?? ter a maioria dos membros vivendo o amor ao
          pr??ximo como seu estilo de vida.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Recolta</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Uma vez ao ano, a Igreja Adventista realiza a campanha da recolta para
          levantar fundos ao trabalho solid??rio. Atrav??s dessa campanha, a
          comunidade conhece as iniciativas da ASA com a oportunidade de
          colaborar.
        </HighlightsText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HighlightsSubTitle>Fundo Solid??rio Educacional</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Exclusivamente na ACSR, desde 2015, os valores da recolta s??o
          destinados para o Fundo Solid??rio Educacional, desta forma, alunos
          abaixo da linha da pobreza t??m a oportunidade de estudar nas escolas
          adventistas. O Fundo paga todas as mensalidades do ano letivo, al??m de
          fornecer uniforme completo e material escolar. Os recursos recoltados
          no ano corrente ajudam os alunos no ano seguinte. De 2019 a 2021, oito
          alunos foram ajudados e em 2022, nove alunos receberam ajuda
          financeira.
        </HighlightsText>
        <br />
        <HighlightsSubTitle>Capacita????es e treinamentos</HighlightsSubTitle>
        <br />
        <HighlightsText>
          Ao longo de cada ano, os l??deres da ASA foram treinados com
          capacita????es gerais, regionais e locais para desenvolver novos l??deres
          e prover inspira????o, estrat??gias e materiais para o trabalho nos
          postos locais.
        </HighlightsText>
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
          Agrade??o a Deus, o Doador de toda a vida pelo chamado para a miss??o. ??
          um privil??gio servir na Obra do Senhor.
          <br />
          <br />
          Agrade??o ?? minha amada esposa Karina Aguiar pela parceria, apoio,
          dedica????o e amor, sem ela, nada disso seria poss??vel. Aos meus filhos
          Lukas e J??lia pelo carinho, amor e por sempre me colocarem ???pra cima???,
          voc??s s??o meu orgulho, meu presente e minha alegria. E n??o posso
          esquecer dos meus pais Deniclei Aguiar (Dino) e Maria de Lurdes Aguiar
          (L??) por colocarem no meu cora????o o amor a Cristo, ?? Igreja e ??
          Miss??o.
          <br />
          <br />
          Obrigado ?? Administra????o do campo da ACSR por nos dar toda a estrutura
          para realizar nosso trabalho a cada dia. Grato aos meus colegas
          distritais e departamentais, sobretudo aos pastores Rog??rio Gurniak,
          Elton J??nior e Jo??o Lorini que respectivamente, lideraram as ??reas de
          Mordomia Crist??, Minist??rio da Fam??lia e ASA de 2019 a 2021 com um
          excelente trabalho.
          <br />
          <br />
          Por fim, muito obrigado ?? igreja de Cristo, aos nossos l??deres e
          membros que tornam todos os sonhos, trabalhos e realiza????es poss??veis
          atrav??s da dedica????o pessoal e da presen??a do Esp??rito Santo em suas
          vidas.
          <br />
          <br />
        </ThanksText>
      </ThanksContainer>
    </Container>
  );
};

export default PauloAguiar;

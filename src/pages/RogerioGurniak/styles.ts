import styled from "styled-components";

export const Container = styled.div``;

export const TitleContainer = styled.div`
padding: 100px 30px 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
  background-color: black;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;

  img {
    width: 100%;
    margin-top: -35px;
  }
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  color: #dedede;
  margin-bottom: 20px;
  margin-top: -70px;
`;

export const Role = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
`;

export const TextContainer = styled.div`
  margin-top: 30px;
`;

export const TextCapitularContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FirstLetter = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  line-height: 116px;
  color: #13b466;
  margin-right: 8px;
  margin-top: -40px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  text-align: justify;
  margin-top: 16px;
`;

export const GreenBox = styled.div`
  padding: 30px;
  background-color: #13b466;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 62px;
  color: #ffffff;

  div {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    &.fade {
      justify-content: flex-start;
    }
  }

  img {
    width: 40px;
    text-align: center;
  }
`;

export const ThanksContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const ThanksTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 60px;
`;

export const ThanksText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const BalanceContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;
`;

export const BalanceTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
`;

export const BalanceSubTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
`;

export const BalanceText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const BalanceBadge = styled.div`
  border-radius: 4px;
  padding: 3px 30px;
  background: ${(props) => props.color};

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #ffffff;
  }
`;

export const ObjetivosContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;

  img {
    width: 48px;
    height: 48px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 60px;
  }
`;

export const AccordionContainer = styled.div`
  margin-top: 16px;
`;

interface IAccordionHeader {
  isOpen: boolean;
}

export const AccordionHeader = styled.div<IAccordionHeader>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  height: 96px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  ${({ isOpen }) => (isOpen ? `background-color: #E20000;` : ``)}
  ${({ isOpen }) => (isOpen ? `color: #ffffff;` : ``)}

  .arrow {
    height: 22px;
    width: 22px;
  }

  &:hover {
    opacity: 0.7;
    ${({ isOpen }) => (isOpen ? `opacity: 1;` : ``)}
  }
`;

export const MembersContainer = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 62px;
  color: #000000;
  padding: 30px;

  span {
    color: #F1403F;
  }

  img {
    margin-top: 30px;
    width: 100%;
  }

  .month {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    color: #000000;
  }
`;

interface IAccordionBody {
  isOpen: boolean;
}

export const AccordionBody = styled.div<IAccordionBody>`
  padding: 22px;
  background-color: #fcfcfc;
  display: none;
  ${({ isOpen }) => isOpen && `display: flex;` }
`;

export const AgeGroupContainer = styled.div`
  padding: 30px;
  font-weight: 600;
  font-size: 40px;

  > p {
    margin-bottom: 16px;
  }

  > img {
    margin-top: 32px;
    width: 100%;
  }

  .year {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: #000000;
  }
`;

export const EntriesAndMoveOutContainer = styled.div`
  padding: 80px 30px;
  background-color: #000000;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    width: 100%;
  }

  img {
    margin-bottom: 80px;
  }

  .number {
    color: #FFFFFF;
    margin-left: 8px;
  }

  .desc {
    color: #FFFFFF;
    font-size: 10px;
    margin-top: 8px;
  }

  .linha-rosa {
    width: 100%;
    height: 22px;
    max-width: 80%;
    background-color: #E1A0F8;
    border-radius: 4px;
  }

  .linha-vermelha {
    width: 100%;
    height: 22px;
    max-width: 70%;
    background-color: #F1403F;
    border-radius: 4px;
  }

  .linha-verde {
    width: 100%;
    max-width: 40%;
    height: 22px;
    background-color: #19CD77;
    border-radius: 4px;
  }

  .linha-amarela {
    width: 100%;
    max-width: 60%;
    height: 22px;
    background-color: #E8D71E;
    border-radius: 4px;
  }

  .linha-azul {
    width: 100%;
    max-width: 50%;
    height: 22px;
    background-color: #63B4EF;
    border-radius: 4px;
  }

  .year {
    color: #FFFFFF;
  }
`;

export const EntriesAndMoveOutTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 130%;
  color: #FFFFFF;
  margin-bottom: 5px;
`;

export const EntriesAndMoveOutSubtitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #FFFFFF;
  margin-bottom: 40px;
`;

export const FormerReligionContainer = styled.div`
  padding: 80px 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  div {
    display: flex;
    margin-right: auto;
    align-items: center;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }

    img {
      width: 10px;
      height: 10px;
      margin-right: 8px;
    }
  }
`;

export const FormerReligionTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 130%;
  color: #000000;
`;

export const Badge = styled.div`
  border-radius: 4px;
  padding: 3px 30px;
  background: ${(props) => props.color};

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #FFFFFF;
  }
`;

export const HighlightsContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;
  background-color: #000000;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const HighlightsTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 60px;
  color: #ffff;
`;

export const HighlightsText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffff;

  &.green {
    color: #19CD77;
  }

  img {
    width: 310px;
    height: 337px;
  }
`;

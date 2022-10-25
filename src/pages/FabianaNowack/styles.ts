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
  font-size: 20px;
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
  text-align: left;
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

export const ContainerData = styled.div`
  padding: 60px 30px 30px;

  .small-text {
    font-weight: 600;
    font-size: 10px;
    color: #000000;
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

export const HighlightsContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    span {
      font-style: normal;
      font-size: 16px;
      line-height: 130%;
      font-weight: 400;

      &.bold {
        font-weight: 600;
      }
    }
  }
`;

export const HighlightsTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 60px;
  color: #000000;
`;

export const HighlightsSubTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
`;

export const HighlightsSubTitle2 = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
`;

export const HighlightsText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;

  &.green {
    color: #19CD77;
  }

  img {
    width: 310px;
    height: 337px;
  }
`;

export const BoxFinancial = styled.div`
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
`

export const BoxFinancialPink = styled(BoxFinancial)`
  background-color: #E1A0F8;
`

export const BoxFinancialRed = styled(BoxFinancial)`
  background-color: #F1403F;
`

export const BoxFinancialGreen = styled(BoxFinancial)`
  background-color: #19CD77;
`

export const BoxFinancialYellow = styled(BoxFinancial)`
  background-color: #E8D71E;
`

export const BoxFinancialBlue = styled(BoxFinancial)`
  background-color: #63B4EF;
`

export const Bullet = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  strong {
    margin: 0;
    padding: 0;
  }
`

export const YellowTopic = styled.div`
  height: 12px;
  width: 12px;
  min-height: 12px;
  min-width: 12px;
  background-color: #E8D71E;
  border-radius: 2px;
  margin-top: 6px;
  margin-right: 6px;
`

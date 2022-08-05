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
  margin-top: -10px;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;

  span {
    &.sub-title {
      font-size: 24px;
      line-height: 130%;
      font-weight: 600;
    }

    &.footer {
      font-size: 18px;
      line-height: 130%;
    }

    &.special-text {
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
    }

    &.number {
      font-weight: 600;
      font-size: 64px;
      line-height: 130%;
    }
  }
`;

export const RedBox = styled.div`
  padding: 30px;
  background-color: #F1403F;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #ffffff;

  span {
    &.title {
      font-size: 40px;
      line-height: 130%;
      font-weight: 600;
    }

    &.footer {
      font-size: 18px;
      line-height: 130%;
    }
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

export const HighlightsContainer = styled.div`
  padding: 60px 30px 30px;
  display: flex;
  flex-direction: column;

  div {
    &.label-green {
      background: #19CD77;
      border-radius: 8px;
      padding: 10px;

      span {
        font-size: 24px;
        line-height: 130%;
        color: #ffffff;
      }
    }
  }

  span {
    &.number {
      font-weight: 600;
      font-size: 64px;
      line-height: 130%;
      color: #F1403F;
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

  &.bold {
    font-weight: 600;
  }
`;

export const HighlightsSubTitle2 = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 130%;
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

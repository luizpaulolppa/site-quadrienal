import styled from "styled-components";

export const Container = styled.div`
  ul {
    
  }

  li {
    margin-left: 16px;
  }
`;

export const TitleContainer = styled.div`
padding: 100px 30px 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
  background-color: black;
`;

export const Badge = styled.div`
  border-radius: 16px;
  padding: 3px 30px;
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  /* height: 210px; */

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #FFFFFF;
  }
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

export const Italic = styled.span`
  font-style: italic;
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

  img {
    &.icon {
      width: 48px;
      height: 48px;
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
  font-size: 24px;
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
    color: #19cd77;
  }

  img {
    width: 310px;
    height: 337px;
  }
`;

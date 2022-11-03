import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const TitleContainer = styled.div`
  padding: 30px 30px 10px 30px;
  padding-top: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
  background: black;
`;

export const SummaryContainer = styled.div`
  padding: 0px 30px 30px 30px;
  background-color: black;
  color: #FFFFFF;

  ul {
    padding: 16px;
  }

  li {
    margin-top: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Name = styled.span`
  color: #19CD77;
`;

export const AboutUsContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
  padding-bottom: 50px;

  ul {
    list-style: none;
    padding-bottom: 26px;
  }

  li {
    margin-top: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }

  img {
    width: 100%;
  }

  .setaParaBaixo {
    width: 50px;
  }

  .subtitle {
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }
`;

export const AboutUsTitle = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
`;

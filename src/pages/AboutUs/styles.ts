import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  /* padding: 0px 30px 0px 30px; */
`;

export const TitleContainer = styled.div`
  padding: 30px;
  padding-top: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #FFFFFF;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 49.79%, #000000 73.23%);
`;

export const SummaryContainer = styled.div`
  padding: 30px;
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
`;

export const AboutUsTitle = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
`;

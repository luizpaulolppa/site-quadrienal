import styled from "styled-components";

export const Container = styled.div``;

export const ContainerMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  img {
    width: 40px;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    margin-top: 100px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #25874B;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  margin-right: 16px;
  margin-left: 16px;
`;

export const ButtonHome = styled.button`
  width: 100%;
  height: 80px;
  background-color: #e8d71d;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  img {
    width: 30px;
    transform: rotate(-30deg);
    margin-left: 10px;
  }
`;

export const Corredor = styled.div`
  margin-top: 60px;
  height: 88px;
  background: linear-gradient(90deg, #E8D71E 0%, #E20000 95.1%);
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  p {
    margin-right: 30px;
  }
`;

export const Footer = styled.div`
  padding: 100px 30px;
  background-color: black;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }
`;

export const Departments = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 80px;
`;

export const DepartmentsTitle = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
`;

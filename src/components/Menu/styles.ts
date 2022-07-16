import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const ContainerMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  
  img {
    width: 40px;
  }
`;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;

  img {
    width: 30px;
    transform: rotate(40deg);
    margin-right: 16px;
  }

  & + & {
    margin-top: 16px;
  }
`;

export const NameContainer = styled.div`
  border-bottom: 2px solid black;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  text-align: right;
  color: #000000;
`;



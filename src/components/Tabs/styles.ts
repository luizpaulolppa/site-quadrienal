import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  height: 46px;
  border-radius: 5px;
`;

interface ITab {
  isSelected?: boolean;
}

export const Tab = styled.div<ITab>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  ${({ isSelected }) => (isSelected ? `background-color: black;` : ``)}
  
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    color: #9e9e9e;
    ${({ isSelected }) => (isSelected ? `color: #FFFFFF;` : ``)}
    text-align: center;
  }
`;

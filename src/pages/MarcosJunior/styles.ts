import styled from "styled-components";
import marcos from "../../assets/marcos-without-back.png";

export const Container = styled.div``;

export const TitleContainer = styled.div`
  padding: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 49.79%, #000000 73.23%);
  background-image: url(${marcos});
  background-repeat: no-repeat;
  background-position: center; */
  background-color: black;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(19, 14, 11, 0) 0%, #000000 69.58%);
  /* background-clip: linear-gradient(180deg, rgba(19, 14, 11, 0) 0%, #000000 69.58%);
  background-image: url(${marcos});
  background-repeat: no-repeat;
  background-position: center; */
  height: 300px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  color: #dedede;
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
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  text-align: justify;
`;

export const GreenBox = styled.div`
  padding: 30px;
  background-color: #13b466;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
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

export const DataContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
  padding-bottom: 50px;
`;

export const DataTitle = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const ItemBoxData = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  cursor: pointer;
`;

interface IBoxData {
  red: boolean;
}

export const BoxData = styled.div<IBoxData>`
  width: 100%;
  margin-left: 16px;
  display: flex;
  border-radius: 16px;
  padding: 33px;
  ${({ red }) => (red ? `background-color: #e20000;` : ``)}

  img {
    width: 62px;
    height: 62px;
  }

  /* &:hover {
    background-color: #e20000;
  } */
`;

export const BoxDataInfo = styled.div`
  width: 100%;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e6e6e6;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  p + p {
    font-weight: 600;
    font-size: 36px;
    margin-top: 8px;
  }
`;

interface IVerticalLine {
  show: boolean;
}

export const VerticalLine = styled.div<IVerticalLine>`
  height: 100%;
  width: 4px;
  border-radius: 2px;
  background-color: #FFFFFF;
  ${({ show }) => (show ? `background-color: #d9d9d9;` : ``)}
`;

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
  cursor: pointer;

  .arrow {
    width: 24px;
  }

  .person {
    @media only screen and (max-width: 400px) {
      width: 72px;
    }

    @media only screen and (max-width: 380px) {
      width: 52px;
    }
  }
`;

export const Content = styled.div`
  margin-right: auto;

  .test {
    margin-left: 2rem;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #000000;

      @media only screen and (max-width: 400px) {
        font-size: 18px;
      }

      @media only screen and (max-width: 380px) {
        font-size: 14px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #777777;
    }
  }
`;

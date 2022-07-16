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

import React from "react";
import marcos from "../../assets/marcos.png";
import arrowLeft from "../../assets/arrow-left.svg";

import { Container, Content } from "./styles";

const Department: React.FC = () => {
  return (
    <Container>
      <img src={marcos} alt="Presidência" className="person" />
      <Content>
        <h1>Presidência</h1>
        <p>Pr. Marcos Júnior</p>
      </Content>
      <img src={arrowLeft} alt="Enter" className="arrow" />
    </Container>
  );
};

export default Department;
import React from "react";
import arrowLeft from "../../assets/arrow-left.svg";

import { Container, Content } from "./styles";

interface IDepartament {
  imageUrl: string;
  name: string;
  role: string;
  action?: Function;
}

const Department: React.FC<IDepartament> = ({ imageUrl, name, role, action }) => {
  return (
    <Container>
      <img src={imageUrl} alt="person imagem" className="person" />
      <Content>
        <div className="test">
          <h1>{role}</h1>
          <p>{name}</p>
        </div>
      </Content>
      <img src={arrowLeft} alt="Link to show page" className="arrow" />
    </Container>
  );
};

export default Department;
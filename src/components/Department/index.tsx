import React from "react";
import { useNavigate } from "react-router-dom";
import right from "../../assets/right.svg";

import { Container, Content } from "./styles";

interface IDepartment {
  imageUrl: string;
  name: string;
  role: string;
  url?: string;
}

const Department: React.FC<IDepartment> = ({ imageUrl, name, role, url }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    if (url) {
      navigate(url);
    }
  }

  return (
    <Container onClick={handleNavigate}>
      <img src={imageUrl} alt="person imagem" className="person" />
      <Content>
        <div className="test">
          <h1>{role}</h1>
          <p>{name}</p>
        </div>
      </Content>
      <img src={right} alt="Link to show page" className="arrow" />
    </Container>
  );
};

export default Department;
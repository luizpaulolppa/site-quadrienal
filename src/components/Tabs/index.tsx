import React, { useState } from "react";

import { Container, Tab } from "./styles";

interface ITabs {
  tabs: string[];
  value: number;
  onChange: (positionSelected: number) => void;
}

const Tabs: React.FC<ITabs> = ({ tabs, value, onChange }) => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          isSelected={value === index}
          onClick={() => onChange(index)}
        >
          <p>{tab}</p>
        </Tab>
      ))}
    </Container>
  );
};

export default Tabs;

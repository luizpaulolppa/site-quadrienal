import React from "react";
import arrowNarrowLeft from "../../assets/arrow-narrow-left-white.svg";
import menu from "../../assets/menu-white.svg";

import { ContainerMenu } from "./styles";

interface IMenuBlack {
  setOpenMenu: (isOpen: boolean) => void;
  onBack: () => void;
}

const MenuBlack: React.FC<IMenuBlack> = ({ onBack, setOpenMenu }) => {
  return (
    <ContainerMenu>
      <img src={arrowNarrowLeft} alt="Voltar" onClick={onBack} />
      <img src={menu} alt="Menu" onClick={() => setOpenMenu(true)} />
    </ContainerMenu>
  );
};

export default MenuBlack;

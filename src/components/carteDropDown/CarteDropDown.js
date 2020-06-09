import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./customButton.style.scss";
const CarteDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> Aller à la caisse</CustomButton>
    </div>
  );
};

export default CarteDropDown;

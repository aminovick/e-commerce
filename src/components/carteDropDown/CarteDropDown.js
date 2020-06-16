import React from "react";
import CustomButton from "../customButton/CustomButton";
import CartItems from "../cartItems/CartItems";
import { connect } from "react-redux";
import "./customButton.style.scss";
import { withRouter } from "react-router-dom";
import { toggleIcon } from "../../store/actions";
const CarteDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((items) => <CartItems key={items.id} items={items} />)
      ) : (
        <span className="empty-message">votre panier est vide</span>
      )}

      <CustomButton
        onClick={() => {
          history.push("/cheCkout");
          dispatch(toggleIcon());
        }}
      >
        Aller à la caisse
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.carte.items,
  };
};

export default withRouter(
  connect(mapStateToProps)(CarteDropDown)
);

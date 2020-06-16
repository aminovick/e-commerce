import React from "react";
import "./chckoutCaisse.style.scss";
import { connect } from "react-redux";
import CheckoutItem from '../../components/chckoutItems/CheckoutItem'
const ChckoutCaisse = ({ carteItems,total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produit</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qunatite</span>
        </div>
        <div className="header-block">
          <span>Prix</span>
        </div>
        <div className="header-block">
          <span>Supprimer</span>
        </div>
      </div>
      {carteItems.map((item) => <CheckoutItem key={item.id} items={item}/>)}
  <div className="total">ToTal:${total}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    carteItems: state.carte.items,
    total: state.carte.items.reduce(
      (addItem, item) => addItem + item.quantity * item.price,
      0
    ),
  };
};
export default connect(mapStateToProps)(ChckoutCaisse);

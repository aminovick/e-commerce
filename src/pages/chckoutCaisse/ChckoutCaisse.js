import React from "react";
import "./chckoutCaisse.style.scss";
import { connect } from "react-redux";
import CheckoutItem from '../../components/chckoutItems/CheckoutItem'
import ButtonStrip from '../../components/buttonStrip/ButtonStrip'
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
  <div className="warning-message">
    veuillez utilisé cette carte de test *
    <br/>
    4242 4242 4242 4242 date d'exp : 01/21 CVV: 123
  </div>
<ButtonStrip price={total}/>
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

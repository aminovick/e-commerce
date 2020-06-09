import React from "react";
import "./IconBag.style.scss";
import { toggleIcon } from "../../store/actions";
import { connect } from "react-redux";
import { ReactComponent as ShopingBag } from "../../assest/shopBag.svg";
const IconBag = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingBag className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleIcon()),
});

export default connect(null, mapDispatchToProps)(IconBag);

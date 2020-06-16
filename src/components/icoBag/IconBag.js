import React from "react";
import "./IconBag.style.scss";
import { toggleIcon } from "../../store/actions";
import { connect } from "react-redux";
import { ReactComponent as ShopingBag } from "../../assest/shopBag.svg";
const IconBag = ({ toggleCartHidden ,countItems}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingBag className="shopping-icon" />
<span className="item-count">{countItems}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleIcon()),
});
const mapStateToProps = (state) => {
  return {
    countItems: state.carte.items.reduce(
      (countAdd, item) => countAdd + item.quantity,
      0
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IconBag);

import React from "react";
import "./CheckoutItem.style.scss";
import { deleteItem, removeItem, addItems } from "../../store/actions";
import { connect } from "react-redux";

const CheckoutItem = ({ items, deletItem, addItem, removeItems }) => {
  const { imageUrl, name, quantity, price } = items;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItems(items)}>
          &#10094;
        </div>
        <div className="value"> {quantity}</div>
        <div className="arrow" onClick={() => addItem(items)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => deletItem(items)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToprops = (dispatch) => ({
  deletItem: (items) => dispatch(deleteItem(items)),
  removeItems: (items) => dispatch(removeItem(items)),
  addItem: (items) => dispatch(addItems(items)),
});
export default connect(null, mapDispatchToprops)(CheckoutItem);

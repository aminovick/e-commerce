import React from "react";
import "./collectionItem.style.scss";
import { connect } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import { addItems } from "../../store/actions";
const CollectionItem = ({ item,addItems }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() =>addItems(item)}>
        ajouté au panier{" "}
      </CustomButton>
    </div>
  );
};
export default connect(null, { addItems })(CollectionItem);

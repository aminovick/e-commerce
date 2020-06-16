import React from "react";
import "./shopPage.style.scss";
import SHOP_DATA from "./ShopData";
import PreviewItem from "./../../components/previewItems/PreviewItem";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherItems }) => {
          return <PreviewItem key={id} {...otherItems} />;
        })}
      </div>
    );
  }
}

export default ShopPage;

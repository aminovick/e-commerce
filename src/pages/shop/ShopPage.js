import React from "react";
import { Route } from "react-router-dom";
import "./shopPage.style.scss";
import CollectionOverView from "../../components/collectionOverView/CollectionOverView";
import CollectionPage from "../collectionPage/CollectionPage"

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

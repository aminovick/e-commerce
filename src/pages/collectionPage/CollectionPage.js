import React from "react";
import "./collectionPage.style.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collectionItems/CollectionItem";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: Object.values(state.shopReducer.collections).find(
      () =>
         [ownProps.match.params.collectionId]
    ),
  };
};


export default connect(mapStateToProps)(CollectionPage);

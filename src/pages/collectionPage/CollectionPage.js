import React from "react";
import "./collectionPage.style.scss";
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h1>frere</h1>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: state.shopReducer.collections.find(
      (collection) =>
        collection.id === COLLECTION_ID[ownProps.match.params.collectionId]
    ),
  };
};
const COLLECTION_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export default connect(mapStateToProps)(CollectionPage);

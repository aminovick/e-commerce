import React from "react";
import "./collectionOverView.style.scss";
import { connect } from "react-redux";
import PreviewItem from '../previewItems/PreviewItem'
const CollectionOverView = ({ collections }) => {
  return (
    <div className="collection-overView">
      {collections.map(({ id, ...otherItems }) => {
        return <PreviewItem key={id} {...otherItems} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    collections: state.shopReducer.collections,
  };
};
export default connect(mapStateToProps)(CollectionOverView);

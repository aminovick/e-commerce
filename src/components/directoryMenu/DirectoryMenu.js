import React from "react";
import MenuItem from "../menuItem/MenuItem";
import "./directoryMenu.style.scss";
import { connect } from "react-redux";
const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
      <MenuItem
        title={title}
        key={id}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  console.log(state.directoryReducer);
  return {
    sections: state.directoryReducer.sections,
  };
};
export default connect(mapStateToProps)(DirectoryMenu);

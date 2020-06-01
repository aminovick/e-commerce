import React from "react";
import "./CustomButton.styl.scss";

function CustomButton({ children, isSignedIn, ...otherProps }) {
  return (
    <button
      className={`${isSignedIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

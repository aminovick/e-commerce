import React from "react";
import "./CustomButton.styl.scss";

function CustomButton({ children, isSignedIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${isSignedIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

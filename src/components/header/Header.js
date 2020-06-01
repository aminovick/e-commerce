import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../store/actions";
import { connect } from "react-redux";
import "./header.style.scss";
import { ReactComponent as Logo } from "../assest/crown.svg";
class Header extends Component {
  singOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {this.props.isSignedIn ? (
            <div className="option" onClick={this.singOutClick}>
              Sign Out
            </div>
          ) : (
            <Link className="option" onClick={() => signIn()} to="/sign">
              Sign In
            </Link>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state.auth.isSignedIn);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToprops, { signIn, signOut })(Header);

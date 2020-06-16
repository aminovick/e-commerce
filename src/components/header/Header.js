import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../store/actions";
import { connect } from "react-redux";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assest/crown.svg";
import CarteDropDown from "../carteDropDown/CarteDropDown";
import IconBag from "../icoBag/IconBag";
class Header extends Component {
  singOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };
  renderCarteDrop = () => {
    if (this.props.hiden === true) {
      return <CarteDropDown />;
    }
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
          <IconBag />
          {this.props.hiden ? null : <CarteDropDown />}
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    hiden: state.carte.hidden,
  };
};
export default connect(mapStateToprops, { signIn, signOut })(Header);

import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions";
import CustomButton from "../customButton/CustomButton";
class AuthGoogle extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "910359325270-d02fedaphd1n4oahm671nc5najsu7onb.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onchangeSignIn(this.auth.isSignedIn.get());
          console.log(this.auth.currentUser)
          this.auth.isSignedIn.listen(this.onchangeSignIn);
        });
    });
  }
  onchangeSignIn = (isSignedIn) => {
    
    if (isSignedIn) {
      return this.props.signIn(this.auth.currentUser.get().getId());
    } else return this.props.signOut();
  };
  signInClick = () => {
    this.auth.signIn();
  };
  singOutClick = () => {
    this.auth.signOut();
  };
  renderButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <CustomButton onClick={this.singOutClick}isSignedIn>Sign Out</CustomButton>;
    } else
      return <CustomButton onClick={this.signInClick} isSignedIn>SIgn In</CustomButton>;
  }
  render() {
    return <div>{this.renderButton()}</div>;
  }
}
const mapStateToprops = (state) => {
  return {
    
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToprops, { signIn, signOut })(AuthGoogle);

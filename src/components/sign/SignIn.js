import React, { Component } from "react";
import "./signIn.style.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from '../customButton/CustomButton'
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  hundelSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  hundelChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Je ai déjà un compte </h2>
        <span>se connecter avec ton Email et Password</span>
        <form onSubmit={this.hundelSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            hundelChange={this.hundelChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            hundelChange={this.hundelChange}
            label="Password"
          />
          <CustomButton type="submit" >
              Sign
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;

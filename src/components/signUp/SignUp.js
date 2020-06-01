import React, { Component } from "react";
import "./SignUp.style.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

class SignUp extends Component {
  state = {
    UserName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  hundelChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  hundelSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    const { UserName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <form onSubmit={this.hundelSubmit}>
          <h2 className="title">je n'ai pas de compte</h2>
          <span>Inscription avec Email et Password</span>
          <FormInput
            name="nom"
            type="text"
            value={UserName}
            hundelChange={this.hundelChange}
            label="UserName"
            required
          />
          <FormInput
            name="email"
            type="text"
            value={email}
            hundelChange={this.hundelChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            hundelChange={this.hundelChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            hundelChange={this.hundelChange}
            label="Confirm-Password"
            required
          />
          <CustomButton type="submit">Sign-Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;

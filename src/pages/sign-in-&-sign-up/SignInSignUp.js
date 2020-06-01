import React from "react";
import "./signInSignUp.stule.scss";
import SignUp from '../../components/signUp/SignUp'
import SignIn from "../../components/sign/SignIn";
function SignInSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
}

export default SignInSignUp;

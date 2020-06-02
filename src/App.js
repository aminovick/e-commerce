import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-&-sign-up/SignInSignUp";

class App extends React.Component {
  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/sign"
          render={() =>
            this.props.isSignedIn ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
      </Switch>
    </div>
  );
}
}
const mapStateToprops = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToprops)(App);

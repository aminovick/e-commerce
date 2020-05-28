import React from 'react';

import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-&-sign-up/SignInSignUp'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
         <Route exact path='/' component= {HomePage}/>
         <Route exact path='/shop' component= {ShopPage}/>
         <Route exact path='/sign' component= {SignInSignUp}/>
    </Switch>
    </div>
  );
}

export default App;

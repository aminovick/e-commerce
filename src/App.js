import React from 'react';

import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/shop/ShopPage'

function App() {
  return (
    <Switch>
         <Route exact path='/' component= {HomePage}/>
         <Route exact path='/hats' component= {ShopPage}/>
    </Switch>
  );
}

export default App;

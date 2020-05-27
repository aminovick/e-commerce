import React from 'react';

import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
const  hats=()=>{
  return(
    <div>hhhdad</div>
  )
}
function App() {
  return (
    <Switch>
         <Route exact path='/' component= {HomePage}/>
         <Route exact path='/hats' component= {hats}/>
    </Switch>
  );
}

export default App;

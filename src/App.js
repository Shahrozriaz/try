import React, { Component } from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Error from './components/Error';
import Signup from './components/Signup';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
          <Route path='/' component={Main} exact/>
          
          <Route path='/login' component={Login}/>

          <Route path='/signup' component={Signup}/> 

          <Route path='/home' component = {Home}/>


          <Route  component={Error}/>
           </ Switch>
      </BrowserRouter>
    );
  }
}

export default App;

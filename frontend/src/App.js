import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import React from 'react'


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/profile' component={Profile}/>
    
      </Switch>
    </BrowserRouter>
  );
}

export default App;

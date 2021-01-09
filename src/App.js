// import logo from './logo.svg';
import {createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetail from './Component/FoodDetail/FoodDetails';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddCart from './Component/AddCart/AddCart';

export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
   <Router>
      <Navbar/>
     <Switch>
        <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/food/:Id">
        <FoodDetail/>
      </Route>
      <PrivateRoute path="/cart">
        <AddCart/>
      </PrivateRoute>
      <Route path="/login">
        <Login/>
      </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;

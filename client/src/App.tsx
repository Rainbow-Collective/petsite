import React, { useContext } from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Login from './components/authentication/Login';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import LoginOrSignUp from './components/authentication/LoginOrSignUp';
import { IdentityContext } from './context/identityContext';
import { IdentityContextType } from './components/types';


function App() {

  const context = useContext(IdentityContext) as IdentityContextType;
  console.log("app");


  // https://www.geeksforgeeks.org/how-to-use-files-in-public-folder-in-reactjs/
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <img src={process.env.PUBLIC_URL + "/images/mystic_woods_v0.2/sprites/objects/objects.png"} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
              <h1>hello {context.name}</h1>
            </Route>
            <Route path="/Auth">
              <LoginOrSignUp />
            </Route>
            <Route path="/">
              <h1>Default Page</h1>
            </Route>
          </Switch>
          <Footer />
        </header >

      </div >
    </BrowserRouter >
  );
}

export default App;

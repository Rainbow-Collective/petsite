import React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';


function App() {

  //username
  const [name, setUsername] = useState("");


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
            </Route>
            <Route path="/">
              <h1>Default Page</h1>
            </Route>
          </Switch>
        </header >
      </div >
    </BrowserRouter >
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Login from './components/authentication/Login';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';


function App() {

  //username
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // https://www.geeksforgeeks.org/how-to-use-files-in-public-folder-in-reactjs/
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          name={name}
          setUsername={setUsername}
        />
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + "/images/mystic_woods_v0.2/sprites/objects/objects.png"} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
              <h1>hello {name}</h1>
            </Route>
            <Route path="/testlogin">
              <Login
                name={name}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            </Route>
            <Route path="/">
              <h1>Default Page</h1>
            </Route>
          </Switch>
        </header >
        <Footer />
      </div >
    </BrowserRouter >
  );
}

export default App;

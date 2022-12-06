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
import GameApp from './components/game/GameApp';
import { GetAllPetsFetcher } from './components/pet-api/GetAllPetsFetcher';


function App() {

  const context = useContext(IdentityContext) as IdentityContextType;
  // https://www.geeksforgeeks.org/how-to-use-files-in-public-folder-in-reactjs/
  return (
    <BrowserRouter>
      <div className="App flex flex-col justify-around">
        <header className="App-header">
          <h1>The Guild of the Magi</h1>
          <h2>A new kind of virtual pet experience</h2>
        </header >
        <main className='flex justify-center content-center grayText'>
          <div className='absolute bg-indigo-500 rounded-xl shadow-sm w-124'>
            <div className='border-gray-900 border-opacity-40 border-2 bg-indigo-600 m-6 rounded-xl shadow-sm'>
              <div className='border-gray-900 border-opacity-40 border-2 bg-amber-100 m-2 rounded-xl shadow-sm'>
                <Navbar />
                <Switch>
                  <Route path="/testing">
                    <img src={process.env.PUBLIC_URL + "/images/mystic_woods_v0.2/sprites/objects/objects.png"} className="App-logo" alt="logo" />
                    <h1>Test Route</h1>
                    <h1>hello {context.name}</h1>
                  </Route>
                  <Route path="/Auth">
                    <LoginOrSignUp />
                  </Route>
                  <Route path="/About">
                    <h1>I like petsites but I think they're grindy so I made this project. That's the post.</h1>
                  </Route>
                  <Route path="/Play">
                    <GameApp />
                  </Route>
                  <Route path="/allpets">
                    <GetAllPetsFetcher />
                  </Route>
                  <Route path="/">
                    <h1>Default Page</h1>
                  </Route>
                </Switch>
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </div >
    </BrowserRouter >
  );
}

export default App;

import React from "react";
import "./App.css";
import NavHeader from "./navigation/NavHeader";
import Inventory from "./player/Inventory";
import VisualGameArea from "./environment/VisualGameArea";
import InteractiveGameArea from "./navigation/interaction/InteractiveGameArea";
import Lore from "./navigation/lore/Lore";
import ExternalLinks from "./navigation/ExternalLinks";
function App() {
  console.log(new (AuthIdentityContext)())
  return (
    <div className="App">
      <div className="app-body">
        <NavHeader />
        <div id="left-bar" className="w20">
          <Inventory />
        </div>
        <div id="center-space" className="w60">
          <VisualGameArea />
          <InteractiveGameArea />
        </div>
        <div id="right-bar" className="w20">
          <Lore />
          <ExternalLinks />
        </div>
      </div>
    </div>
  );
}

export class AuthIdentityContext {
  //TODO: replace with AuthJS 
  // https://authjs.dev/guides/basics/callbacks
  //readonly from https://www.typescriptlang.org/docs/handbook/2/classes.html
  readonly connection: string;
  playerUserName: string;
  playerPassPhrase: string;
  playerID: number;

  constructor() {
    this.connection = "http://localhost:3000/petsite";
    this.playerUserName = "player undefined";
    this.playerPassPhrase = "passphrase undefined";
    this.playerID = 0.1;

  }
}

export default App;

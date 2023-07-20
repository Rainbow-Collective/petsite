import React from "react";
import "./App.css";
import NavHeader from "./navigation/NavHeader";
import Inventory from "./player/Inventory";
import VisualGameArea from "./environment/VisualGameArea";
import InteractiveGameArea from "./navigation/interaction/InteractiveGameArea";
import Lore from "./navigation/lore/Lore";
import ExternalLinks from "./navigation/ExternalLinks";
function App() {
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

export default App;

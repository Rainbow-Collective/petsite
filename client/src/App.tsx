import React from "react";
import "./App.css";
import NavHeader from "./navigation/NavHeader";
import Inventory from "./player/Inventory";
import VisualGameArea from "./environment/VisualGameArea";
import InteractiveGameArea from "./navigation/interaction/InteractiveGameArea";
import Lore from "./navigation/lore/Lore";
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
          <div id="external-links">
            <ul>
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/Rainbow-Collective/petsite/issues"
                >
                  GitHub - Issue Tracker
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/Rainbow-Collective/petsite/wiki"
                >
                  GitHub - Wiki
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://ashtonmackenzie.com/portfolio/the-guild-of-the-magi-everything/"
                >
                  About the project
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://ashtonmackenzie.com/about-me/"
                >
                  About the developer
                </a>
              </li>
            </ul>
            L</div>
        </div>
      </div>
    </div>
  );
}

export default App;

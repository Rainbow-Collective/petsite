import React from "react";
import "./App.css";
import NavHeader from "./navigation/NavHeader";
import Inventory from "./player/Inventory";
import VisualGameArea from "./environment/VisualGameArea";
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
          <div id="game-interaction-area">
            <h3> Game Interaction area</h3>
            <p>
              NPC: Merletti sacchettoni cavatelli spirali mezze penne cuscussu
              sagnarelli riccioli pici ziti pansotti scialatelli farfalline orzo
            </p>
            <p>
              You:
              <ul>
                <li>[Yes]</li> <li>[Maybe]</li> <li>[No]</li>
              </ul>
            </p>
            V</div>
        </div>
        <div id="right-bar" className="w20">
          <div id="how-to-play">
            <h3>Tutorial, Lore, Information area</h3>
            <p>
              Tagliatelle pici spaghettini stelle strapponi tortelloni mafalde
              rigatoncini mezzani lasagna gemelli. Tuffoli pasta al ceppo
              spaghetti alla chitarra ditali paccheri cappelletti sedani
              lasagnette. Trenette gnocchi sagnarelli boccoli grattini fusilli
              bucati corzetti sorprese ziti coralli spaghetti alla chitarra
              cuscussu piombi fazzoletti grano canederli casunziei. Rotelle
              orcchiette capellini spaghettoni stortini lasagnette conchiglioni
              ochi de lupo mafalde cicioneddos bigoli maccheroncelli pipe rigete
              su filindeu mezzi bombardoni boccoli ricciolini. Alphabet pasta
              sorprese perciatelli garganelli stelle margerthine occhi di
              passero mafalde malloreddus gemelli truttole lanterne acini di
              pepe rigatoncini maccheroni alla molinara fiori anelli.
              Maccheroncelli bavette truttole marille conchiglie sacchettoni
              quadrefiori spiralini canederli ditali quadrettini filini occhi di
              passero sorprese pasta al ceppo occhi di pernice macaroni.
              Sagnette ricciolini tortelloni matriciana treccioni tortelli
              canederli spaghetti alla chitarra.{" "}
            </p>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

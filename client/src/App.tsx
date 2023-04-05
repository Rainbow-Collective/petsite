import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-body">
        <div id="left-bar" className="unblock w20">
          <div id="inventory">
            <h1>Inventory </h1>
            <ul>
              <li> Food </li>
              <li> Cute hat </li>
              <li> water bottle </li>
              <li> Stickers </li>
            </ul>
            <h1>Pets </h1>
            <ul>
              <li> Tea Hamster </li>
              <li> Moss Ball </li>
              <li> Sooty Cat </li>
              <li> Salamander (flying)</li>
            </ul>
          </div>
        </div>
        <div id="center-space" className="unblock w60">
          <div id="game-area">
            <h1>This is where the game will be</h1>
            <p>
              Grattoni strapponi champanelle ziti spaghetti alla chitarra
              tortellini picchiarelli stringozzi tripoline cappelli da chef.
              Acini di pepe sedani trofie cappelli da chef stringozzi mandala
              rigatoni cappelletti cavatappi ferrazzuoli pastina canederli
              rustiche. Gramigne fileja fainelle fregula penne champanelle
              mezzelune cappelli da chef egg barley pansotti grano conchiglioni
              ravioli sorprese macaroni quadrettini canederli. Lasagna gemelli
              ravioli spirali strapponi bavette creste di galli mandala
              cannelloni grattini radiatori fagioloni casarecce.
            </p>
          </div>
          <div id="game-interaction-area">
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
          </div>
        </div>
        <div id="right-bar" className="unblock w20">
          <div id="how-to-play">
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
      </header>
    </div>
  );
}

export default App;

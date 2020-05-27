import React from 'react';
import { Route, Link } from "react-router-dom";
import DnD_Name from "./assets/images/DnD-Name.png"
import StartPage from "./components/StartPage";
import SpellBooks from "./components/SpellBooks";
import SpellList from "./components/SpellList";
import SpellPage from "./components/SpellPage";


function App() {
  return (
    <div className = "App">
      <div className = "leftSide">
        <Link to = "/"><img src = {DnD_Name} alt = "Dungeons and Dragons" width = "100%"/></Link>
        <h2>5th Edition</h2>
        <h1>Spells Archive</h1>
      </div>
      <div className="mainContainer">
        <Route exact path = "/" component = {StartPage} />
        <Route path = "/:classes-spells" component = {SpellList} />
        <Route path = "/spells/:index" component = {SpellPage} />
      </div>
      <div className = "rightSide">
        <SpellBooks />
      </div>
    </div>
  );
}

export default App;

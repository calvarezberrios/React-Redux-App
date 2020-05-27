import React from 'react';
import { Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import SpellBooks from "./components/SpellBooks";
import SpellList from "./components/SpellList";


function App() {
  return (
    <div className = "App">
      <div className = "leftSide">
        <h2>Dungeons and Dragons 5th Edition</h2>
        <h1>Spells Archive</h1>
      </div>
      <div className="mainContainer">
        <Route exact path = "/" component = {StartPage} />
        <Route path = "/:classes-spells" component = {SpellList} />
      </div>
      <div className = "rightSide">
        <SpellBooks />
      </div>
    </div>
  );
}

export default App;

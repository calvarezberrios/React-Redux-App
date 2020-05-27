import React from 'react';
import StartPage from "./components/StartPage";

function App() {
  return (
    <div className = "App">
      <div className = "leftSide">
        <h2>Dungeons and Dragons - 5th Edition</h2>
        <h1>Spells Archive</h1>
      </div>
      <div className="mainContainer">
        <StartPage />
      </div>
      <div className = "rightSide">
        <button className = "book">Sorcerer<br />Spell<br />Book</button>
        <button className = "book">Wizard<br />Spell<br />Book</button>
      </div>
    </div>
  );
}

export default App;

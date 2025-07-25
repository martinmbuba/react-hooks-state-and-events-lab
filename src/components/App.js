import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state variable for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode state
  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
  }

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

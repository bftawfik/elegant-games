import { useState, useEffect } from "react";
import "./App.scss";

import Router from "./Router/Router";

function App() {

  const [stateUserTheme, setStateUserTheme] = useState("lightr");

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${stateUserTheme}`);
  }, [stateUserTheme]);

  return (
    <div className="App">
      <Router />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

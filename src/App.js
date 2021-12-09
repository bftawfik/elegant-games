import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Router from "./Router/Router";

function App() {

  const [stateUserTheme, setStateUserTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${stateUserTheme}`);
  }, [stateUserTheme]);

  return (
    <div className="App">
      <Router />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

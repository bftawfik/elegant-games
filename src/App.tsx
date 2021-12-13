// import { useState, useEffect } from "react";
import "./App.scss";

import Router from "./Router/Router";

function App() {

  // const [stateUserTheme, setStateUserTheme] = useState("lightr");

  // useEffect(() => {
  //   document.documentElement.className = "";
  //   document.documentElement.classList.add(`theme-${stateUserTheme}`);
  // }, [stateUserTheme]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

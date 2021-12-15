import Router from "./Router/Router";

import StaticDataProvider from "./Components/AppDataProvider/AppDataProvider";
import {
  socialIcons,
  internalLinks,
  gamesData,
  termsData,
  privacyData,
} from "./Mocks";

import "./App.scss";

function App() {
  // const [stateUserTheme, setStateUserTheme] = useState("lightr");

  // useEffect(() => {
  //   document.documentElement.className = "";
  //   document.documentElement.classList.add(`theme-${stateUserTheme}`);
  // }, [stateUserTheme]);

  return (
    <div className="App">
      <StaticDataProvider
        value={{
          socialIcons,
          internalLinks,
          termsData,
          privacyData,
          gamesData,
        }}
      >
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;

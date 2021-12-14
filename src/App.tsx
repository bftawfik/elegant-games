import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import type { typeSocialIcons, typeInternalLinks } from "./Types";

import Router from "./Router/Router";

import StaticDataProvider from "./Components/AppDataProvider/AppDataProvider";

import "./App.scss";

const socialIcons: typeSocialIcons = [
  {
    name: "Home",
    url: "/",
    type: "internal",
    icon: faGlobe,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    type: "external",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    type: "external",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    type: "external",
    icon: faTwitter,
  },
];

const internalLinks: typeInternalLinks = [
  {
    name: "الرئيسية",
    url: "/",
  },
  {
    name: "الالعاب",
    url: "/games",
  },
  {
    name: "الخصوصية",
    url: "/privacy",
  },
  {
    name: "الشروط والاحكام",
    url: "/terms",
  },
];

function App() {
  // const [stateUserTheme, setStateUserTheme] = useState("lightr");

  // useEffect(() => {
  //   document.documentElement.className = "";
  //   document.documentElement.classList.add(`theme-${stateUserTheme}`);
  // }, [stateUserTheme]);

  return (
    <div className="App">
      <StaticDataProvider value={{ socialIcons, internalLinks }}>
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;

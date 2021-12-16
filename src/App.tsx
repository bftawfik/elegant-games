import { useLocation } from "react-router-dom";

import Router from "./Router/Router";

import StaticDataProvider from "./Components/AppDataProvider/AppDataProvider";

import { extractParams } from "./Services/Helpers";
import { postIsSubscribed } from "./Services/requests";

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

  const checkToken = async (token: string) => {
    const res = await postIsSubscribed(token);
    const { statusCode, data } = await res.json();
    const { decryptedObj, isSubscribed } = data;
    if (statusCode === 200 && isSubscribed) {
      const user = {
        msisdn: decryptedObj.msisdn,
        subscriptionContractId: decryptedObj.subscriptionContractId,
        lang: decryptedObj.lang,
        token: decryptedObj.token,
      };
      return user;
    }
    return undefined;
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = extractParams(searchParams, "token");
  console.log(token);
  if (!Array.isArray(token)) {
    checkToken(token);
  }

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

//http://localhost:3000/?token=U2FsdGVkX1%2BFenkmcAlCix9V7hj6HUi0oNugsSlrXFCqmn3fn63VqLblSCs24cd8bNv09sCcAEgl32cAXrtaPWup%2F1BuwPpQv05MPysTOlnS4iQVpqrBqlKc137X7TDrLTau0l3yFrdwS%2B7FkHIrudHbluXN%2Bq6A0XhTXUQ0niN4H5HcW80MLyBfRe63OLgmODI8jSL%2BAyuiHU9MQ0SEj4TBu3j4ksCmEK93gBDZYPsF5SO%2FZnQpsSY%2B9rA%2Fmuhv

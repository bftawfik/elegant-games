import { useState, useEffect, useCallback } from "react";
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
  allCountriesData,
  usedCountriesCodes,
  registerCardData,
} from "./Mocks";
import { typeUserData } from "./Types";
import "./App.scss";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [token] = extractParams(searchParams, ["token"]);
  const [userData, setUserData] = useState<typeUserData>({
    isSubscribed: undefined,
    data: undefined,
  });
  const { isSubscribed }: typeUserData = userData;
  const [externalUrl, setExternalUrl] = useState<string | undefined>(undefined);

  const checkSessionStorage = () => {
    const sessionUserData = sessionStorage.getItem("userData");
    if (sessionUserData) {
      setUserData(JSON.parse(sessionUserData));
    }
  };

  const checkToken = useCallback(
    async (token: string) => {
      const res = await postIsSubscribed(token);
      const { statusCode, data } = await res.json();
      console.log(isSubscribed);

      if (statusCode === 200) {
        const { decryptedObj, isSubscribed } = data;
        setUserData({
          isSubscribed: isSubscribed,
          data: { ...decryptedObj, urlToken: token },
        });
        if (!isSubscribed) {
          checkSessionStorage();
        }
      } else {
        checkSessionStorage();
      }
    },
    [isSubscribed]
  );

  useEffect(() => {
    if (isSubscribed === undefined) {
      checkToken(token);
      setExternalUrl("http://www.google.com");
    }
  }, [isSubscribed, token, checkToken]);

  return (
    <div className="App">
      <StaticDataProvider
        value={{
          socialIcons,
          internalLinks,
          termsData,
          privacyData,
          gamesData,
          userData,
          allCountriesData,
          usedCountriesCodes,
          registerCardData,
          externalUrl,
        }}
      >
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;

//http://localhost:3000/?token=U2FsdGVkX1%2BFenkmcAlCix9V7hj6HUi0oNugsSlrXFCqmn3fn63VqLblSCs24cd8bNv09sCcAEgl32cAXrtaPWup%2F1BuwPpQv05MPysTOlnS4iQVpqrBqlKc137X7TDrLTau0l3yFrdwS%2B7FkHIrudHbluXN%2Bq6A0XhTXUQ0niN4H5HcW80MLyBfRe63OLgmODI8jSL%2BAyuiHU9MQ0SEj4TBu3j4ksCmEK93gBDZYPsF5SO%2FZnQpsSY%2B9rA%2Fmuhv

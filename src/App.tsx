import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  defaults,
} from "./Mocks";
import { typeUserData } from "./Types";
import "./App.scss";

function App() {
  const { lang: defaultLang } = defaults;
  const { i18n } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [language, token] = extractParams(searchParams, ["lang", "token"]);
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
    } else {
      setUserData({
        isSubscribed: false,
        data: undefined,
      });
    }
  };

  const checkToken = useCallback(async (token: string) => {
    const res = await postIsSubscribed(token);
    const { statusCode, data } = await res.json();
    if (statusCode === 200) {
      const { decryptedObj, isSubscribed } = data;
      setUserData({
        isSubscribed: isSubscribed,
        data: { ...decryptedObj, urlToken: token },
      });
      if (!isSubscribed) {
        setExternalUrl("http://www.google.com");
        checkSessionStorage();
      }
    } else {
      checkSessionStorage();
    }
  }, []);

  useEffect(() => {
    if (isSubscribed === undefined) {
      checkToken(token);
    }
  }, [isSubscribed, token, checkToken]);

  useEffect(() => {
    if (language && document?.querySelector("html")?.lang !== language) {
      document?.querySelector("html")?.setAttribute("lang", language);
    } else if (!language) {
      document?.querySelector("html")?.setAttribute("lang", defaultLang);
    }
  }, [language, defaultLang]);

  useEffect(() => {
    if (i18n.resolvedLanguage !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

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
          language: language || defaultLang,
        }}
      >
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;

//http://localhost:3000/?token=U2FsdGVkX1%2BFenkmcAlCix9V7hj6HUi0oNugsSlrXFCqmn3fn63VqLblSCs24cd8bNv09sCcAEgl32cAXrtaPWup%2F1BuwPpQv05MPysTOlnS4iQVpqrBqlKc137X7TDrLTau0l3yFrdwS%2B7FkHIrudHbluXN%2Bq6A0XhTXUQ0niN4H5HcW80MLyBfRe63OLgmODI8jSL%2BAyuiHU9MQ0SEj4TBu3j4ksCmEK93gBDZYPsF5SO%2FZnQpsSY%2B9rA%2Fmuhv

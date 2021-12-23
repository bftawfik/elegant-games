import { useContext } from "react";
import { Navigate } from "react-router-dom";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import GamesGrid from "../../Components/GamesGrid/GamesGrid";
import GameThumbBox from "../../Components/GameThumbBox/GameThumbBox";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./Home.module.scss";

const Home = () => {
  const {
    userData,
    searchParams,
    showHeader,
    changeShowHeader,
    headerCases,
  }: typeAppProviderValue = useContext(AppDataContext);

  const changeUrl = () => {
    if (
      showHeader === headerCases?.SHOW_WITH_ANIMATION ||
      showHeader === headerCases?.SHOW_WITHOUT_ANIMATION
    ) {
      changeShowHeader && changeShowHeader(headerCases?.HIDE_WITHOUT_ANIMATION);
    }
    return `/login?${searchParams?.toString()}`;
  };

  return userData?.isSubscribed ? (
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  ) : (
    <Navigate to={changeUrl()} replace={true} />
  );
};

export default Home;

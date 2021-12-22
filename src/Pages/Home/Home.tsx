import { useContext } from "react";
import { Navigate } from "react-router-dom";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import GamesGrid from "../../Components/GamesGrid/GamesGrid";
import GameThumbBox from "../../Components/GameThumbBox/GameThumbBox";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./Home.module.scss";

const Home = () => {
  const { userData, language }: typeAppProviderValue =
    useContext(AppDataContext);
  console.log(language);

  return userData?.isSubscribed ? (
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  ) : (
    // <Navigate to="/login" replace={true} />
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  );
};

export default Home;

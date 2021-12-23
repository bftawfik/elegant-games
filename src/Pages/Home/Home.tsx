import { useContext } from "react";
import { Navigate } from "react-router-dom";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import GamesGrid from "../../Components/GamesGrid/GamesGrid";
import GameThumbBox from "../../Components/GameThumbBox/GameThumbBox";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./Home.module.scss";

const Home = () => {
  const { userData, searchParams }: typeAppProviderValue =
    useContext(AppDataContext);

  return userData?.isSubscribed ? (
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  ) : (
    <Navigate to={`/login?${searchParams?.toString()}`} replace={true} />
  );
};

export default Home;

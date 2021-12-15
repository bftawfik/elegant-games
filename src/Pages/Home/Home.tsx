import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import GamesGrid from "../../Components/GamesGrid/GamesGrid";
import GameThumbBox from "../../Components/GameThumbBox/GameThumbBox";

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <FulscrnWrpr className={classes.Home}>
      <GamesGrid card={GameThumbBox} />
    </FulscrnWrpr>
  );
};

export default Home;

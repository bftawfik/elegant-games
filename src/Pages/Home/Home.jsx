import StartNow from '../../Components/StartNow/StartNow'

import * as classes from "./Home.module.scss";

const Home = () => {
  return <div className={classes.Home}>
    <StartNow />
  </div>;
};

export default Home;
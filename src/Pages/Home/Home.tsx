import Backdrop from "../../Components/Backdrop/Backdrop";
import StartNow from "../../Components/StartNow/StartNow";

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Backdrop zndx={100} opacity={0.5} />
      <StartNow />
    </div>
  );
};

export default Home;

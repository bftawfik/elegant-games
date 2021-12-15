import { useContext } from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import type { typeAppProviderValue } from "../../Types";

import classes from "./Privacy.module.scss";

const Privacy = () => {
  const { privacyData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <FulscrnWrpr
      className={classes.Privacy}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>اهلا بكم في ElegantGames</h2>
        {privacyData &&
          privacyData.map((termLine, ndx) => <p key={ndx}>{termLine}</p>)}
      </div>
    </FulscrnWrpr>
  );
};

export default Privacy;

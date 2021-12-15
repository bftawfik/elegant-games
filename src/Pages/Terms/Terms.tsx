import { useContext } from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import type { typeAppProviderValue } from "../../Types";

import classes from "./Terms.module.scss";

const Terms = () => {
  const { termsData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <FulscrnWrpr
      className={classes.Terms}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>اهلا بكم في ElegantGames</h2>
        <ul>
          {termsData &&
            termsData.map((termLine, ndx) => <li key={ndx}>{termLine}</li>)}
        </ul>
      </div>
    </FulscrnWrpr>
  );
};

export default Terms;

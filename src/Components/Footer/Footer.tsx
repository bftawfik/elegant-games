import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import classes from "./Footer.module.scss";
import type { typeAppProviderValue } from "../../Types";

const Footer = () => {
  const { socialIcons }: typeAppProviderValue = useContext(AppDataContext);
  const [showFooter, setShowFooter] = useState<boolean | undefined>(undefined);

  return (
    <FulscrnWrpr
      className={[
        classes.Footer,
        showFooter
          ? classes.grow
          : showFooter === false
          ? classes.shrink
          : undefined,
      ].join(" ")}
      containerClassName={classes.container}
    >
      <button
        className={classes.toggleFooter}
        onClick={() => {
          if (showFooter === undefined) {
            setShowFooter(false);
          } else {
            setShowFooter(!showFooter);
          }
        }}
      >
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </span>
      </button>
      <div className={classes.footerRow}>
        <div className={classes.footerCol}>
          <h3>أهلا بك في ElegantGames</h3>
          <p>
            أكثر من 40 لعبة في انتظارك اشترك وابدأ اللعب الآن ... ألعاب جديدة
            وتحديات جديدة كل يوم.
          </p>
          <ul>
            <li>0</li>
            <span>-</span>
            <li>1</li>
            <span>-</span>
            <li>2</li>
            <span>-</span>
            <li>3</li>
          </ul>
        </div>
        <div className={classes.footerCol}>
          <h3>تابعنا</h3>
          <ul>
            {socialIcons &&
              socialIcons.map(({ name, url, type, icon }, ndx) => (
                <li key={ndx}>
                  {type === "external" ? (
                    <a href={url} target={"_blank"} rel="noreferrer">
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ) : (
                    <Link to={url}>
                      <FontAwesomeIcon icon={icon} />
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={classes.footerRow}>
        <p>ElegantGames © جميع الحقوق محفوظة 2021</p>
      </div>
    </FulscrnWrpr>
  );
};

export default Footer;

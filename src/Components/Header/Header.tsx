import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.scss";

const Header = () => {
  const [started, setStarted] = useState<Boolean | undefined>(undefined);
  return (
    <div
      className={[
        classes.Header,
        started === undefined
          ? undefined
          : started
          ? classes.shrink
          : classes.grow,
      ].join(" ")}
    >
      <div className={classes.contents}>
        <h1>Elegant Games</h1>
        <h2>العب عدد مرات غير محدود اكثر من 40 لعبة</h2>
        <h2>بإشتراك واحد.</h2>
        <button
          onClick={() => {
            setStarted(!started);
          }}
        >
          <span className={classes.msg}>ابدء الان</span>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

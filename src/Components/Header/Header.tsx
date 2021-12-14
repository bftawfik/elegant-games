import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Backdrop from "../Backdrop/Backdrop";

import classes from "./Header.module.scss";

const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean | undefined>(undefined);
  return (
    <>
      <Backdrop
        showBackdrop={showHeader === undefined ? showHeader : !showHeader}
      />
      <div
        className={[
          classes.Header,
          showHeader
            ? classes.shrink
            : showHeader === false
            ? classes.grow
            : undefined,
        ].join(" ")}
      >
        <h1>Elegant Games</h1>
        <h2>العب عدد مرات غير محدود اكثر من 40 لعبة</h2>
        <h2>بإشتراك واحد.</h2>
        <button
          onClick={() => {
            setShowHeader(!showHeader);
          }}
        >
          <span className={classes.msg}>ابدء الان</span>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Header;
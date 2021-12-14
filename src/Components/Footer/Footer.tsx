import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import classes from "./Footer.module.scss";

const Footer = () => {
  const [showFooter, setShowFooter] = useState<boolean | undefined>(undefined);

  return (
    <div
      className={[
        classes.Footer,
        showFooter
          ? classes.shrink
          : showFooter === false
          ? classes.grow
          : undefined,
      ].join(" ")}
    >
      <button
        onClick={() => {
          setShowFooter(!showFooter);
        }}
      >
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </span>
      </button>
    </div>
  );
};

export default Footer;

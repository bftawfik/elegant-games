import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import Backdrop from "../Backdrop/Backdrop";

import { defaults } from "../../Mocks";

import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { productId } = defaults;
  const headerCases = {
    SHOW_WITHOUT_ANIMATION: "SHOW_WITHOUT_ANIMATION",
    HIDE_WITHOUT_ANIMATION: "HIDE_WITHOUT_ANIMATION",
    SHOW_WITH_ANIMATION: "SHOW_WITH_ANIMATION",
    HIDE_WITH_ANIMATION: "HIDE_WITH_ANIMATION",
  };

  const [showHeader, setShowHeader] = useState<string>(
    location?.pathname === "/"
      ? headerCases.SHOW_WITHOUT_ANIMATION
      : headerCases.HIDE_WITHOUT_ANIMATION
  );

  return (
    <>
      <Backdrop showBackdrop={showHeader} />
      <div
        className={[
          classes.Header,
          showHeader === headerCases.SHOW_WITH_ANIMATION
            ? classes.grow
            : showHeader === headerCases.HIDE_WITH_ANIMATION
            ? classes.shrink
            : showHeader === headerCases.HIDE_WITHOUT_ANIMATION
            ? classes.hide
            : undefined,
        ].join(" ")}
      >
        <h1>{i18n.getFixedT("en")(`products.${productId}`)}</h1>
        <h2>{t("headerData.header1.1")}</h2>
        <h2>{t("headerData.header2.1")}</h2>
        <button
          onClick={() => {
            if (location?.pathname === "/") {
              if (
                showHeader === headerCases.HIDE_WITH_ANIMATION ||
                showHeader === headerCases.HIDE_WITHOUT_ANIMATION
              ) {
                setShowHeader(headerCases.SHOW_WITH_ANIMATION);
              } else {
                setShowHeader(headerCases.HIDE_WITH_ANIMATION);
              }
            } else {
              if (
                showHeader === headerCases.HIDE_WITHOUT_ANIMATION ||
                showHeader === headerCases.HIDE_WITH_ANIMATION
              ) {
                navigate("/");
              } else {
                setShowHeader(headerCases.SHOW_WITH_ANIMATION);
              }
            }
          }}
        >
          <span className={classes.msg}>{t("headerData.startBtn.1")}</span>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Header;

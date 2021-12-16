import classes from "./Backdrop.module.scss";
import { percentToHex } from "../../Services/Helpers";

import type { typeBackdropProps } from "../../Types";

const Backdrop = ({
  zndx = 1000,
  bgOpacity = 0.85,
  backgroundColorHex = "#FFFFFF",
  showBackdrop,
  onClickHandler,
}: typeBackdropProps) => {
  const headerCases = {
    SHOW_WITHOUT_ANIMATION: "SHOW_WITHOUT_ANIMATION",
    HIDE_WITHOUT_ANIMATION: "HIDE_WITHOUT_ANIMATION",
    SHOW_WITH_ANIMATION: "SHOW_WITH_ANIMATION",
    HIDE_WITH_ANIMATION: "HIDE_WITH_ANIMATION",
  };
  return (
    <button
      className={[
        classes.Backdrop,
        showBackdrop === headerCases.SHOW_WITH_ANIMATION
          ? classes.fadeIn
          : showBackdrop === headerCases.HIDE_WITH_ANIMATION
          ? classes.fadeOut
          : showBackdrop === headerCases.HIDE_WITHOUT_ANIMATION
          ? classes.hide
          : undefined,
      ].join(" ")}
      style={{
        zIndex: zndx,
        backgroundColor: `${backgroundColorHex}${percentToHex(bgOpacity)}`,
      }}
      onClick={onClickHandler}
    />
  );
};

export default Backdrop;

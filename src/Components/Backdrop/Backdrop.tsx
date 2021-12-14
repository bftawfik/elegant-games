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
  return (
    <button
      className={[
        classes.Backdrop,
        showBackdrop
          ? classes.fadeIn
          : showBackdrop === false
          ? classes.fadeOut
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

import classes from "./Backdrop.module.scss";
import { percentToHex } from "../../Services/Helpers";
type backdropProps = {
  zndx?: number;
  bgOpacity?: number;
  backgroundColorHex?: string;
  showBackdrop: boolean | undefined;
  setShowBackdrop: Function;
};

const Backdrop = ({
  zndx = 1000,
  bgOpacity = 0.85,
  backgroundColorHex = "#FFFFFF",
  showBackdrop,
  setShowBackdrop,
}: backdropProps) => {
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
      onClick={(e) => {
        e.stopPropagation();
        setShowBackdrop(false);
      }}
    />
  );
};

export default Backdrop;

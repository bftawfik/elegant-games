import { useState } from "react";
import classes from "./Backdrop.module.scss";

type backdropProps = {
  zndx?: number;
  opacity?: number;
  backgroundColor?: string;
};

const Backdrop = ({ zndx, opacity, backgroundColor }: backdropProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <button
      className={[
        classes.Backdrop,
        fadeOut ? classes.fadeOut : undefined,
        hide ? classes.hide : undefined,
      ].join(" ")}
      style={{
        zIndex: zndx,
        backgroundColor: `rgba(${backgroundColor}, ${opacity})`,
      }}
      onClick={() => {
        setFadeOut(true);
        setTimeout(() => {
          setHide(true);
        }, 1000);
      }}
    />
  );
};

export default Backdrop;

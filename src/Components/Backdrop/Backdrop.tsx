import classes from "./Backdrop.module.scss";

type backdropProps = {
  zndx?: number;
  opacity?: number;
  backgroundColor?: string;
};

const Backdrop = ({ zndx, opacity, backgroundColor }: backdropProps) => {
  return (
    <button
      className={classes.Backdrop}
      style={{
        zIndex: zndx,
        backgroundColor: `rgba(${backgroundColor}, ${opacity})`,
      }}
    />
  );
};

export default Backdrop;

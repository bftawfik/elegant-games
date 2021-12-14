import * as defaultStyles from "./FulscrnWrpr.module.scss";

const FulscrnWrpr = ({ children, className, containerClassName, style }) => {
  const styles = defaultStyles;

  return (
    <div
      className={[styles.FulscrnWrpr, className].join(" ")}
      style={style}
    >
      <div
        className={[styles.container, containerClassName].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export default FulscrnWrpr;
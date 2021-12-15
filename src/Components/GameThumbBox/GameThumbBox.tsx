import { Link } from "react-router-dom";
import type { typeSingleGameData } from "../../Types";

import classes from "./GameThumbBox.module.scss";

const GameThumbBox = ({ name, gameId, imgUrl }: typeSingleGameData) => {
  return (
    <div className={classes.GameThumbBox}>
      <Link to={`/games/${gameId}`}>
        <img src={imgUrl} alt={name} />
      </Link>
    </div>
  );
};

export default GameThumbBox;

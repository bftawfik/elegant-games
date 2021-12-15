import { Link } from "react-router-dom";
import type { typeSingleGameData } from "../../Types";

import classes from "./GameThumbBox.module.scss";

const GameThumbBox = ({ gameId }: typeSingleGameData) => {
  return (
    <div className={classes.GameThumbBox}>
      <Link to={`/games/${gameId}`}>
        <img
          src={`https://www.ourfastcdn.com/elegantgames/mygames/${gameId}/HTML5-Game/icon-256.png`}
          alt={gameId}
        />
      </Link>
    </div>
  );
};

export default GameThumbBox;

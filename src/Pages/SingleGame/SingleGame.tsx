import { useParams } from "react-router-dom";

import classes from "./SingleGame.module.scss";

const SingleGame = () => {
  let { gameId } = useParams(); 
  return (
    <div className={classes.SingleGame}>
      <iframe
        src={`https://www.ourfastcdn.com/elegantgames/mygames/${gameId}/HTML5-Game/index.html`}
        title={gameId}
      />
    </div>
  );
};

export default SingleGame;

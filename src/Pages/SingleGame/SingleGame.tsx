import { useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";

import Redirect from "../../Components/Redirect/Redirect";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./SingleGame.module.scss";

const SingleGame = () => {
  let { gameId } = useParams();
  const { user }: typeAppProviderValue = useContext(AppDataContext);
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }

  return user ? (
    <div className={classes.SingleGame}>
      <iframe
        src={`https://www.ourfastcdn.com/elegantgames/mygames/${gameId}/HTML5-Game/index.html`}
        title={gameId}
      />
    </div>
  ) : (
    <Redirect externalUrl="http://www.google.com" />
  );
};

export default SingleGame;

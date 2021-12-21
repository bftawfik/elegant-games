import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Redirect from "../../Components/Redirect/Redirect";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./SingleGame.module.scss";

const SingleGame = () => {
  let { gameId } = useParams();
  const { userData, externalUrl }: typeAppProviderValue =
    useContext(AppDataContext);
  const navigate = useNavigate();
  if (!userData?.isSubscribed) {
    navigate("/");
  }
  return userData?.isSubscribed ? (
    <div className={classes.SingleGame}>
      <iframe
        src={`https://www.ourfastcdn.com/elegantgames/mygames/${gameId}/HTML5-Game/index.html`}
        title={gameId}
      />
    </div>
  ) : (
    <Redirect externalUrl={externalUrl} />
  );
};

export default SingleGame;

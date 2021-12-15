import { useContext } from "react";

import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import type { typeGamesGrid, typeAppProviderValue } from "../../Types";

import classes from "./GamesGrid.module.scss";

const GamesGrid = ({ card: Card }: typeGamesGrid) => {
  const { listData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <div className={classes.GamesGrid}>
      {listData &&
        listData.map((gameThumbBoxData, ndx) => (
          <Card key={ndx} {...gameThumbBoxData} />
        ))}
    </div>
  );
};

export default GamesGrid;

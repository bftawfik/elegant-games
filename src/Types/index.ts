import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";

type typeSingleSocialIconData = {
  name: string;
  url: string;
  type: string;
  icon: IconDefinition;
};

type typeSocialIcons = typeSingleSocialIconData[] | undefined;

type typeSingleInternalLinkData = {
  name: string;
  url: string;
};

type typeInternalLinks = typeSingleInternalLinkData[] | undefined;

type typeAppProviderValue = {
  socialIcons?: typeSocialIcons;
  internalLinks?: typeInternalLinks;
  listData?: typeGameListData;
  termsData?: typeTermsData;
  privacyData?: typePrivacyData;
};

type typeBackdropProps = {
  zndx?: number;
  bgOpacity?: number;
  backgroundColorHex?: string;
  showBackdrop: boolean | undefined;
  onClickHandler?: React.MouseEventHandler | undefined;
};

type typeFulscrnWrpr = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  style?: object;
};

type typeSingleGameData = {
  name?: string;
  gameId?: string;
  imgUrl?: string;
};

type typeGameListData = typeSingleGameData[];

type typeTermsData = string[];

type typeGamesGrid = {
  card: any;
};

type typePrivacyData = string[];

// type alltypes = typeSingleSocialIconData &
//   typeSocialIcons &
//   typeAppProviderValue;

export type {
  typeSocialIcons,
  typeInternalLinks,
  typeAppProviderValue,
  typeBackdropProps,
  typeFulscrnWrpr,
  typeSingleGameData,
  typeGameListData,
  typeGamesGrid,
  typeTermsData,
  typePrivacyData,
};

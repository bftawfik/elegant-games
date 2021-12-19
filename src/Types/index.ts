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
  gamesData?: typeGamesData;
  user?: user;
};

type typeBackdropProps = {
  zndx?: number;
  bgOpacity?: number;
  backgroundColorHex?: string;
  showBackdrop: string;
  onClickHandler?: React.MouseEventHandler | undefined;
};

type typeFulscrnWrpr = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  style?: object;
};

type typeSingleGameData = {
  gameId?: string;
};

type typeGameListData = typeSingleGameData[];

type typeTermsData = string[];

type typeGamesData = string[];

type typeGamesGrid = {
  card: any;
};

type typePrivacyData = string[];

type user =
  | Promise<{
      errorMessage: string;
      lang: number;
      messageDeliveryStatus: boolean;
      msisdn: string;
      subscriptionContractId: number;
      token: string;
    }>
  | undefined;

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
  typeGamesData,
  user,
};

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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

// type alltypes = typeSingleSocialIconData &
//   typeSocialIcons &
//   typeAppProviderValue;
export type {
  typeSocialIcons,
  typeInternalLinks,
  typeAppProviderValue,
  typeBackdropProps,
  typeFulscrnWrpr,
};

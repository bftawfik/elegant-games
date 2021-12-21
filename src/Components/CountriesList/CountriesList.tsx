import { useState, useRef, useEffect, useCallback } from "react";
import Select, { components } from "react-select";
import { typeAllCountriesData } from "../../Types";
import ReactCountryFlag from "react-country-flag";

import classes from "./CountriesList.module.scss";

type typeCustomListProps = {
  data?: typeAllCountriesData;
};

// type typeCustomOptionProps = { children: any; value: any; rest: any };
type typeCustomOptionProps = any;

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: "100%",
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  // singleValue: (provided: any, state: any) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = "opacity 300ms";
  //   return { ...provided, opacity, transition };
  // },
};

const CustomOption = ({ children, value, ...rest }: typeCustomOptionProps) => {
  return (
    <components.Option value={value} {...rest} className={classes.option}>
      <ReactCountryFlag
        countryCode={value.code}
        svg
        className={classes.flag}
        title={value.name}
      />
    </components.Option>
  );
};

const CountriesList = ({ data }: typeCustomListProps) => {
  const [open, setOpen] = useState(false);

  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const closeEventHandler = useCallback((e) => {
    document.removeEventListener("click", closeEventHandler);
    if (openRef) {
      setOpen(false);
    }
  }, []);

  return (
    <div
      className={[classes.CountriesList, open ? classes.open : null].join(" ")}
    >
      {data && (
        <Select
          styles={customStyles}
          options={data.map((singleCountry) => ({
            value: singleCountry,
            label: singleCountry.name,
          }))}
          components={{ Option: CustomOption }}
          onChange={(e) => {
            console.log(e);
          }}
        />
      )}
    </div>
  );
};
export default CountriesList;

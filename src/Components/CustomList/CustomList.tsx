import { useState, useRef, useEffect, useCallback } from "react";
import Select, { components } from "react-select";
import { typeCountries } from "../../Types";
import ReactCountryFlag from "react-country-flag";

type typeCustomListProps = {
  classes?: any;
  selectedProvider?: any;
  providers?: any;
  onOptionClick?: any;
  data?: typeCountries;
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const CustomOption = ({ children, value, ...rest }: any) => { 
  return (
    <components.Option value={value} {...rest}>
      <ReactCountryFlag countryCode={value.code} svg />
    </components.Option>
  );
};

const CustomList = ({
  classes = {},
  selectedProvider,
  providers,
  onOptionClick,
  data,
}: typeCustomListProps) => {
  const [open, setOpen] = useState(false);

  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const onOptionClickHandler = (value: any) => {
    setOpen(!open);
    onOptionClick && onOptionClick(value);
  };

  const closeEventHandler = useCallback((e) => {
    document.removeEventListener("click", closeEventHandler);
    if (openRef) {
      setOpen(false);
    }
  }, []);

  const onListHeaderClick = (e: any) => {
    e.stopPropagation();
    if (!open) {
      document.removeEventListener("click", closeEventHandler);
      document.addEventListener("click", closeEventHandler);
    }
    setOpen(!open);
  };

  return (
    <div className={[classes.CustomList, open ? classes.open : null].join(" ")}>
      {data && (
        <Select
          styles={customStyles}
          options={data.map((c) => ({
            value: c,
            label: c.name,
          }))}
          components={{ Option: CustomOption }}
        />
      )}
    </div>
  );
};
export default CustomList;

import { useState, useRef, useEffect, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

type typeCustomListProps = {
  classes: any;
  selectedProvider: any;
  providers: any;
  onOptionClick: any;
};

const CustomList = ({
  classes,
  selectedProvider,
  providers,
  onOptionClick,
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
      <header>
        <button
          onClick={onListHeaderClick}
          type="button"
          title={selectedProvider?.name}
        >
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {selectedProvider ? (
            <img
              src={`https://www.ourfastcdn.com/elegantgames/assets/operators/${selectedProvider.operatorCode}.png`}
              alt={selectedProvider.name}
              className={classes.providerIcon}
            />
          ) : (
            <span className={classes.providerIcon}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
          )}
        </button>
      </header>
      <main>
        <ul>
          {providers.map((p: any, ndx: number) => (
            <li
              key={ndx}
              value={p.catalogId}
              className={classes[`logo${p.catalogId}`]}
            >
              <button
                onClick={() => onOptionClickHandler(p.catalogId)}
                type="button"
                title={p?.name}
              >
                <img
                  src={`https://www.ourfastcdn.com/elegantgames/assets/operators/${p?.operatorCode}.png`}
                  alt={p?.name}
                />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default CustomList;

// import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import classes from "./RegisterCard.module.scss";
import CustomList from "../CustomList/CustomList";
import { countries } from "./countries";

type typeRegisterCardProps = {
  title?: any;
  telPrefix?: any;
  telPattern?: any;
  telMaxLength?: any;
  telPlaceHolder?: any;
  providers?: any;
  provider?: any;
  onSelectChange?: any;
  submitLabel?: any;
  terms?: any;
  tel?: any;
  onChange?: any;
  onSubmit?: any;
  enriched?: any;
  biggerTitle?: any;
};

const RegisterCard = ({
  title,
  telPrefix,
  telPattern,
  telMaxLength,
  telPlaceHolder,
  providers,
  provider,
  onSelectChange,
  submitLabel,
  terms,
  tel,
  onChange,
  onSubmit,
  enriched,
  biggerTitle,
}: typeRegisterCardProps) => {
  return (
    <div className={classes.RegisterCard}>
      {!enriched && (
        <header>
          {biggerTitle && <h1>{biggerTitle}</h1>}
          <h2>{title}</h2>
        </header>
      )}
      <main>
        <form onSubmit={!enriched ? onSubmit : undefined}>
          {!enriched && (
            <div
              className={[classes.formRow, classes.telAndProvider].join(" ")}
            >
              <CustomList
                // classes={classes}
                selectedProvider={provider}
                providers={providers}
                onOptionClick={onSelectChange}
                data={countries}
              />
              <div className={classes.tel}>
                <div className={classes.telPrefex}>{`(+${telPrefix})`}</div>
                <input
                  type="tel"
                  maxLength={telMaxLength}
                  id="msisdn"
                  name="msisdn"
                  placeholder={telPlaceHolder}
                  value={tel}
                  onChange={(e) => onChange(e.target.value)}
                  required
                  pattern={telPattern}
                  size={1}
                />
              </div>
            </div>
          )}
          <div className={classes.formRow}>
            <button
              type={enriched ? "button" : "submit"}
              className={[
                classes.subscribe,
                tel.length === telMaxLength || enriched ? classes.active : null,
              ].join(" ")}
              onClick={enriched ? onSubmit : undefined}
              title={submitLabel}
            >
              <span>
                <FontAwesomeIcon icon={faTrophy} />
              </span>
              {submitLabel}
            </button>
          </div>
        </form>
        <div className={classes.messageBox}>
          {terms &&
            terms.map((singleTerm: any, ndx: number) => {
              switch (singleTerm.elementType) {
                case "p":
                  return <p key={ndx}>{singleTerm.data}</p>;
                case "listWithHeader":
                  return (
                    <div key={ndx}>
                      <p>{singleTerm.data.header}</p>
                      <ul>
                        {singleTerm.data.list.map(
                          (singlItem: any, ndx: number) => (
                            <li key={ndx}>{singlItem}</li>
                          )
                        )}
                      </ul>
                    </div>
                  );
                default:
                  return null;
              }
            })}
        </div>
      </main>
    </div>
  );
};

export default RegisterCard;

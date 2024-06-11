import { FunctionComponent } from "react";
import styles from "./GuestsInput.module.css";

export type GuestsInputType = {
  className?: string;
  label?: string;
};

const GuestsInput: FunctionComponent<GuestsInputType> = ({
  className = "",
  label,
}) => {
  return (
    <div className={[styles.guestsInput, className].join(" ")}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default GuestsInput;

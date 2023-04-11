import React from "react";
import styles from "./completed.module.css";

import CheckIcon from "../assets/31-check-outline.gif";

function Completed() {
  const totalCompletedCount = 65;
  return (
    <div>
      <div className={styles["dailydo-container"]}>
        <div className={styles["dailydo-card-title-container"]}>
          <img src={CheckIcon} alt="dailydo clock animated inprogress icon" />
          <h3>
            Completed{" "}
            <span className={styles["dailydo-card-heading"]}>
              ({totalCompletedCount})
            </span>
          </h3>
        </div>

        <div className={styles["dailydo-card-container"]}>
          <div className={styles["dailydo-card"]}>
            <h2 className={styles["dailydo-card-title"]}>
              Design UI to do app
            </h2>
          </div>

          <p className={styles["dailydo-card-desc"]}>
            Lorem ipsum consectetur adipisicing dolor sit amet, consectetur
            adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit newzgfchc.
          </p>
          <hr />
          <div className={styles["dailydo-card-action"]}>
            <p className={styles["dailydo-card-timestamp"]}>
              Friday, 08 Jul 2022
            </p>
          </div>

          {/* <div className={styles["dailydo-card-color-status"]}></div> */}
        </div>
      </div>
    </div>
  );
}

export default Completed;

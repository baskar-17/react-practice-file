import React from "react";
import styles from "./inprogress.module.css";

import ClockIcon from "../assets/67-clock-outline.gif";

function InProgress() {
  const totalPendingCount = 12;

  return (
    <div className={styles["dailydo-container"]}>
      <div className={styles["dailydo-card-title-container"]}>
        <img src={ClockIcon} alt="dailydo clock animated inprogress icon" />
        <h3>
          In Progress{" "}
          <span className={styles["dailydo-card-heading"]}>
            ({totalPendingCount})
          </span>
        </h3>
      </div>

      <div className={styles["dailydo-card-container"]}>
        <div className={styles["dailydo-card"]}>
          <h2 className={styles["dailydo-card-title"]}>Design UI to do app</h2>
        </div>

        <p className={styles["dailydo-card-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor
          sit amet, consectetur adipisicing elit.
        </p>
        <hr />
        <div className={styles["dailydo-card-action"]}>
          <p className={styles["dailydo-card-timestamp"]}>
            Friday, 08 Jul 2022
          </p>
          <button className={styles["dailydo-card-btn"]}>Mark as Done</button>
        </div>

        {/* <div className={styles["dailydo-card-color-status"]}></div> */}
      </div>
    </div>
  );
}

export default InProgress;

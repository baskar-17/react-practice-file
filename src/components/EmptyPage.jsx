import React from "react";
import styles from "./errorpage.module.css";

import emptyIllustration from "../assets/ec-analyzing-market-price.png";

function EmptyPage() {
  return (
    <div className={styles["dailydo-card-container"]}>
      <h2 className={styles["dailydo-card-title"]}>
        Create Your Next To-Do and Get Going
      </h2>

      <p className={styles["dailydo-card-desc"]}>
        Create a to-do list and stay focused on your priorities for maximum
        productivity!
      </p>
      <div className={styles["daily-do-emptypage-container"]}>
        <img
          src={emptyIllustration}
          alt="daily do toto app empty illustration"
          className={styles["daily-do-emptypage-image"]}
        />
      </div>
    </div>
  );
}

export default EmptyPage;

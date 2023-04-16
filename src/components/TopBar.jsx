import React from "react";
import styles from "./topbar.module.css";

function TopBar() {
  return (
    <div>
      <div className={styles["dailydo-container"]}>
        <div className={styles["dailydo-head-container"]}>
          <div className={styles["dailydo-image-container"]}>
            <img
              src="https://source.unsplash.com/random/600x600/?nature"
              alt="DailyDo user profile"
            />
          </div>
          <div className={styles["dailydo-heading-container"]}>
            <p className={styles["dailydo-description"]}>Hello,</p>
            <p className={styles["dailydo-user-name"]}>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

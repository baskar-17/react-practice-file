import React from "react";

import { BiPlus } from "react-icons/bi";
import styles from "./bottombar.module.css";

function BottomBar() {
  return (
    <div className={styles["dailydo-container"]}>
      <button className={styles["dailydo-primary-btn"]}>
        <BiPlus fontSize={20} />
        Create Todo
      </button>

      {/* <form>
          <input
            type="text"
            className={styles["dailydo-username-prompt"]}
            placeholder="Enter your name"
            // value={nameValue}
          />
          <input
            type="email"
            className={styles["dailydo-username-prompt"]}
            placeholder="Enter your email"
            // value={emailValue}
          />
        </form> */}
    </div>
  );
}

export default BottomBar;

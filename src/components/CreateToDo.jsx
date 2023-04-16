import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createtodo.module.css";

import { FiArrowLeft } from "react-icons/fi";

function CreateToDo() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles["dailydo-top-nav-container"]}>
        <button onClick={handleGoBack}>
          <FiArrowLeft fontSize={24} />
        </button>
        <h3>Create Todo</h3>
      </div>

      <div className={styles["dailydo-form-container"]}>
        <h3>✅ Create Todo</h3>
        <label className={styles["dailydo-input-label"]} htmlFor="title">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter Todo Title"
          className={styles["dailydo-username-prompt"]}
        />

        <label className={styles["dailydo-input-label"]} htmlFor="desc">
          Description
        </label>
        <input
          type="text"
          placeholder="Enter description"
          className={styles["dailydo-username-prompt"]}
        />

        <label className={styles["dailydo-input-label"]} htmlFor="desc">
          End Date
        </label>
        <input
          type="date"
          placeholder="Enter description"
          className={styles["dailydo-username-prompt"]}
        />

        <button className={styles["dailydo-primary-btn"]}>Create Todo</button>
      </div>
    </div>
  );
}

export default CreateToDo;

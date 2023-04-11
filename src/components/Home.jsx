import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import InProgress from "./InProgress";
import Completed from "./Completed";

import { BiPlus } from "react-icons/bi";
import { Modal } from "antd";

function Home() {
  const navigate = useNavigate();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setUserName(storedValue);
      setIsModalOpen(false);
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCancel = () => {
    setInputValue("");
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("inputValue", inputValue);
    console.log("inputValue:", inputValue);
    setInputValue("");
    setIsModalOpen(false);
    window.location.reload();
  };

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
            <p className={styles["dailydo-user-name"]}>
              {userName ? `${userName}` : "Aline"}
            </p>
          </div>
        </div>
        <button
          className={styles["dailydo-primary-btn"]}
          onClick={() => {
            if (localStorage.getItem("inputValue")) {
              navigate("/create-todo");
            } else {
              setIsModalOpen(true);
            }
          }}
        >
          <BiPlus fontSize={20} />
          Add Todo
        </button>
        <Modal
          title="Let us know who is using 🤔"
          open={isModalOpen}
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          <form>
            <input
              type="text"
              className={styles["dailydo-username-prompt"]}
              placeholder="Enter your name"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </Modal>
      </div>

      <InProgress />
      <Completed />
    </div>
  );
}

export default Home;

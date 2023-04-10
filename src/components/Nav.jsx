import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import logo from "../assets/devlab_svg.svg";
import style from "./nav.module.css";
import { FiLogOut } from "react-icons/fi";

function Nav() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <div className={style.container}>
      <div>
        <Link to={"/"}>
          <img className={style.logo} src={logo} alt="devlab-logo-temp" />
        </Link>
      </div>
      {userId ? (
        <IconButton
          variant="outline"
          colorScheme="blue"
          aria-label="Call Sage"
          fontSize="20px"
          onClick={handleLogout}
          icon={<FiLogOut />}
        />
      ) : (
        <ButtonGroup gap={4}>
          <Link to={"/login"}>
            <Button
              spinnerPlacement="start"
              colorScheme="blue"
              variant="outline"
            >
              Log in
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button spinnerPlacement="start" colorScheme="blue" variant="solid">
              Register
            </Button>
          </Link>
        </ButtonGroup>
      )}
    </div>
  );
}

export default Nav;

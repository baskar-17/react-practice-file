import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "../assets/devlab_svg.svg";

function Nav() {
  return (
    <div className={style.container}>
      <div>
        <Link to={"/"}>
          <img className={style.logo} src={logo} alt="devlab-logo-temp" />
        </Link>
      </div>
      <ButtonGroup gap={4}>
        <Link to={"/login"}>
          <Button spinnerPlacement="start" colorScheme="blue" variant="outline">
            Log in
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button spinnerPlacement="start" colorScheme="blue" variant="solid">
            Register
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Nav;

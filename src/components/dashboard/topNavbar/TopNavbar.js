import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import SwitchBtn from "./SwitchBtn";

import "../../scss/TopNavbar.scss";

const TopNavbar = () => {
  return (
    <div>
      <div className="topNav">
        <div className="topNav__option">
          <Link to="/about" className="topNav__about">
            About
          </Link>
        </div>
        <div className="topNav__option">
          <DropDown />
        </div>
        <div className="topNav__option">
          <SwitchBtn />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

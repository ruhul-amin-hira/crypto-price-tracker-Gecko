import React from "react";
import { Link } from "react-router-dom";

import NavCoinList from "./NavCoinList";

import "../scss/Navbar.scss";

const Navbar = () => {
  return (
    <div className="naV">
      <div className="naV__logobox">
        <Link to="/" className="naV__logo">
          Gecko
        </Link>
      </div>

      <div className="naV__items">
        <NavCoinList />
      </div>
    </div>
  );
};

export default Navbar;

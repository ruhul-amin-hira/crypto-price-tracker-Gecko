import React from "react";
import { NavLink } from "react-router-dom";

const NavSingleCoin = ({ coin, id, image }) => {
  return (
    <>
      <NavLink
        exact
        to={`/coin/${id}`}
        className="naV__link"
        activeClassName="naV__link-active"
      >
        <span className="naV__coin-image">
          <img src={image} alt={coin} />
        </span>
        {coin}
      </NavLink>
    </>
  );
};

export default NavSingleCoin;

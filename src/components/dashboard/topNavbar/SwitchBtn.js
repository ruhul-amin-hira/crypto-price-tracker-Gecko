import React, { useContext, useState } from "react";
import { CoinCointext } from "../../../hooks/CoinContext";

const SwitchBtn = () => {
  const { setTheme } = useContext(CoinCointext);
  const handleClick = (e) => {
    // e.target.value.checked = true;
    // localStorage.setItem("theme", false);
    setTheme(e.target.checked);
    // console.log(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  // console.log(themeColor);

  return (
    <div className="switchBtn">
      <input
        className="switchBtn__checkbox"
        id="styled-checkbox-1"
        type="checkbox"
        onChange={handleClick}
      />
      <label htmlFor="styled-checkbox-1" className="switchBtn__label">
        Dark Mode
      </label>
    </div>
  );
};

export default SwitchBtn;

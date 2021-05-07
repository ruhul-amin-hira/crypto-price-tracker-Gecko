import React, { useContext } from "react";
import { CoinCointext } from "../../../hooks/CoinContext";

const DropDown = () => {
  const { changeCurrency } = useContext(CoinCointext);

  return (
    <div className="dropDown">
      <select
        name="currency"
        id="select-currency"
        onChange={(e) => {
          changeCurrency(e.target.value);
        }}
      >
        <option value="usd">USD</option>
        <option value="bdt">BDT</option>
      </select>
    </div>
  );
};

export default DropDown;

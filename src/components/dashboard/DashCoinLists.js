import React from "react";
import PriceHeader from "./PriceHeader";
import PriceList from "./PriceList";
import Search from "./Search";

const DashCoinLists = () => {
  return (
    <div className="dashboard__lists">
      <Search />
      <PriceHeader />
      <div className="dashboard__pricelist">
        <PriceList />
      </div>
    </div>
  );
};

export default DashCoinLists;

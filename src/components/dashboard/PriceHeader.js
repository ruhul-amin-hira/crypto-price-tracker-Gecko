import React from "react";

const PriceHeader = () => {
  return (
    <div className="price">
      <p className="price__rank price__header">Rank</p>
      <p className="price__name price__header">Name</p>
      <p className="price__symbol price__header">Symbol</p>
      <p className="price__price price__header">Price</p>
      <p className="price__hour price__header">24h</p>
    </div>
  );
};

export default PriceHeader;

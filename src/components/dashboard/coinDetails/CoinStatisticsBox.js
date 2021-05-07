import React from "react";

const CoinStatisticsBox = ({ text, header }) => {
  return (
    <div className="coinstatic__box">
      <p className="coinstatic__text">{text}</p>
      <h1 className="coinstatic__header">{header}</h1>
    </div>
  );
};

export default CoinStatisticsBox;

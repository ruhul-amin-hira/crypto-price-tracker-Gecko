import React, { useContext, useRef, useState, useEffect } from "react";
import { CoinCointext } from "../../../hooks/CoinContext";
import findPercentage from "../../utility/findPercentage";
import CoinChart from "./CoinChart";

const CoinChartBox = ({ data, results, id }) => {
  const { currency, index, setIndex } = useContext(CoinCointext);
  const { data: value } = data;

  const coin = value.data[0];
  const currencySign = currency === "usd" ? "$" : "৳ ";

  // let [bal, setbal] = useState(results);
  //const [oneData, sevenData, thirtyData, oneYearData] = results;
  const [selectedData, setSelectedData] = useState(results[0]);

  const [percentage, setPercentage] = useState({
    percent: coin.price_change_percentage_24h,
    percentTime: "(24H)",
  });

  const inRef = useRef();
  const removeActiveClass = () => {
    // console.log(data, oneData, thirtyData);
    const arr = Array.from(inRef.current.childNodes);
    arr.map((el) => el.classList.remove("active-day"));
  };

  const handleClick = (e, index) => {
    //console.log(e.target);
    removeActiveClass();
    e.target.classList.add("active-day");
    setPercentage(findPercentage(index, coin));
    setIndex(index);
  };

  const percentColor = percentage.percent > 0 ? "colorG" : "colorR";

  useEffect(() => {
    setSelectedData(results[index]);
    setPercentage(findPercentage(index, coin));
    // console.log(index);
  }, [results, id]);
  //console.log(data);

  return (
    <div className="chartbox">
      <div className="chartbox__top">
        <h1 className="chartbox__price">
          {currencySign}
          {coin.current_price.toLocaleString("en", {
            maximumFractionDigits: 6,
            minimumFractionDigits: 2,
          })}
        </h1>
        <h3 className={`chartbox__percent ${percentColor}`}>
          {percentage.percent.toFixed(2) + "%"}
        </h3>
        <p className="chartbox__24h">{percentage.percentTime}</p>
      </div>
      <div className="chartbox__pricebox">
        <p className="chartbox__priceheader">
          Price ({currency.toUpperCase()})
        </p>
        <div className="chartbox__intervalbox" ref={inRef}>
          <span
            className="chartbox__interval active-day"
            onClick={(e) => {
              handleClick(e, 0);
              setSelectedData(results[0]);
            }}
          >
            1d
          </span>
          <span
            className="chartbox__interval"
            onClick={(e) => {
              handleClick(e, 1);
              setSelectedData(results[1]);
            }}
          >
            7d
          </span>
          <span
            className="chartbox__interval"
            onClick={(e) => {
              handleClick(e, 2);
              setSelectedData(results[2]);
            }}
          >
            1m
          </span>
          <span
            className="chartbox__interval"
            onClick={(e) => {
              handleClick(e, 3);
              setSelectedData(results[3]);
            }}
          >
            1y
          </span>
        </div>
      </div>
      <CoinChart data={selectedData} />
    </div>
  );
};

export default CoinChartBox;

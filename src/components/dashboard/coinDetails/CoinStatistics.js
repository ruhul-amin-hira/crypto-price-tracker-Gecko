import React from "react";
import numbro from "numbro";
import format from "date-fns/format";
import CoinStatisticsBox from "./CoinStatisticsBox";

const CoinStatistics = ({ data, currency }) => {
  const coin = data.data.data[0];
  const currencySign = currency === "usd" ? "$" : "৳ ";
  const currencyUp = currency.toUpperCase();
  const formatter1 = (number) => {
    if (number) {
      return numbro(number).format({
        thousandSeparated: true,
        mantissa: 2,
      });
    }
  };

  const formatter2 = (number) => {
    if (number) {
      return numbro(number).format({
        average: true,
        mantissa: 2,
      });
    }

    return "";
  };

  console.log(coin);
  return (
    <div className="coinstatic">
      <CoinStatisticsBox
        text={`High in 24h (${currencyUp})`}
        header={`${currencySign}${formatter1(coin.high_24h)}`}
      />
      <CoinStatisticsBox
        text={`Low in 24h (${currencyUp})`}
        header={`${currencySign}${formatter1(coin.low_24h)}`}
      />
      <CoinStatisticsBox
        text={`Price change in 1h (${currencyUp})`}
        header={coin.price_change_percentage_1h_in_currency.toFixed(2) + "%"}
      />
      <CoinStatisticsBox
        text={`All time high (${currencyUp})`}
        header={`${currencySign}${formatter1(coin.ath)}`}
      />
      <CoinStatisticsBox
        text={`All time change (${currencyUp})`}
        header={Math.round(coin.ath_change_percentage).toFixed(2) + "%"}
      />
      <CoinStatisticsBox
        text={`All time high date`}
        header={format(new Date(coin.ath_date), "PP p")}
      />
      <CoinStatisticsBox
        text={`Circulating supply`}
        header={`${formatter2(coin.circulating_supply)} ${coin.symbol}`}
      />
      <CoinStatisticsBox
        text={`Max supply`}
        header={`${formatter2(coin.max_supply)} ${coin.symbol}`}
      />
      <CoinStatisticsBox
        text={`Market (${currencyUp})`}
        header={formatter2(coin.market_cap)}
      />
    </div>
  );
};

export default CoinStatistics;

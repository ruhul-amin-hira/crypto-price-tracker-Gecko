import React from "react";

export const CoinIntro = ({ data }) => {
  // console.log(data);
  const { data: value } = data;
  const coin = value.data[0];
  //  console.log(coin);
  return (
    <div className="coinintro">
      <div className="coinintro__top">
        <div className="coinintro__coinname">
          <img src={coin.image} alt={coin.name} />
          <h1 className="coinintro__name">
            {coin.name}
            <span>{coin.symbol}</span>
          </h1>
        </div>
        <p className="coinintro__rank">Rank #{coin.market_cap_rank}</p>
      </div>
    </div>
  );
};

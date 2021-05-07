import React, { useContext, useEffect } from "react";

import { useFetch } from "../../hooks/getCoins";
import NavSingleCoin from "./NavSingleCoin";
import { CoinCointext } from "../../hooks/CoinContext";
import Loading from "../status/Loading";

const NavCoinList = () => {
  const { currency } = useContext(CoinCointext);

  const { data, isLoading, rest } = useFetch(false, currency);
  //  console.log(isLoading, data);
  /// console.log("nav");
  if (isLoading) {
    return (
      <div className="naV__spiner">
        <Loading />
      </div>
    );
  }

  if (rest.error) {
    // console.log(rest.error);
    return (
      <div className="error">
        <h2>Error!</h2>
      </div>
    );
  }

  //console.log(error);

  // useEffect(() => {
  //   console.log(values2);
  // });

  return (
    <div className="naV__coinlist">
      {data &&
        data.data.map((coin) => {
          return (
            <NavSingleCoin
              coin={coin.name}
              id={coin.id}
              image={coin.image}
              key={coin.id}
            />
          );
        })}
    </div>
  );
};

export default NavCoinList;

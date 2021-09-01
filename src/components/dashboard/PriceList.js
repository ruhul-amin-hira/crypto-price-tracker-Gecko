import React, { useContext, useEffect } from "react";
import { useQueryClient, useQueries } from "react-query";
import { useFetch } from "../../hooks/getCoins";
import Price from "./Price";
import { CoinCointext } from "../../hooks/CoinContext";
import Loading from "../status/Loading";
import Error from "../status/Error";

const PriceList = () => {
  const { currency, search } = useContext(CoinCointext);
  // console.log(search);
  const { data, isLoading, isError, rest } = useFetch(60000, currency);
  const currencySign = currency === "usd" ? "$" : "৳ ";
  // const coinData = data;

  // const cacheData = queryClient.getQueryData("coinsList");

  useEffect(() => {
    rest.refetch();
  }, [currency]);

  //console.log(mode);

  if (isLoading) {
    return (
      <div className="naV__spiner dashboard__spiner">
        <Loading />
      </div>
    );
  }

  if (isError || rest.error) {
    return <Error rest={rest} />;
  }

  // console.log(currency, isFetching);

  // console.log(data);
  let find = false;
  const render =
    data &&
    data.data.map((coin) => {
      if (coin.name.match(search) || coin.id.match(search)) {
        find = true;
        return <Price key={coin.id} coin={coin} currencySign={currencySign} />;
      }
    });

  if (!find) {
    return <p className="no-result">No Result found !</p>;
  }

  return <div className="price__pricelist">{render}</div>;
};

export default PriceList;

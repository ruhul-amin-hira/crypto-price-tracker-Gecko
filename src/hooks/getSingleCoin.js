import { useQueries, useQuery } from "react-query";
import { fetchCoinDetails } from "../api/base";

const useSingleCoin = (id, currency, value) => {
  const params = {
    ids: id,
    vs_currency: currency,
    price_change_percentage: "1h,24h,7d,30d,1y",
    sparkline: false,
  };

  const fetchCoinList = async () => {
    return await fetchCoinDetails.get("/coins/markets", { params });
  };

  const result = useQuery("singleCoin", fetchCoinList, {
    refetchInterval: value,
    refetchOnReconnect: true,
  });
  return result;
};

export default useSingleCoin;

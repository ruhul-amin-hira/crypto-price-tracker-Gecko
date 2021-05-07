import { useQueries, useQuery } from "react-query";
import { fetchCoinDetails } from "../api/base";

const useGetDetails = (id, currency, days, interval) => {
  const params = {
    vs_currency: currency,
    days: days,
    interval,
  };

  return async () => {
    return await fetchCoinDetails.get(`coins/${id}/market_chart`, { params });
  };

  // const query = useQuery(name, fetchDetails, {
  //   refetchOnReconnect: true,
  // });
};

export default useGetDetails;

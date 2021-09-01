import { useState } from "react";
import { useQuery } from "react-query";

import { fetchCoins } from "../api/base";

// fetchCoins.defaults.params.vs_currency = "bdt";

const fetchCoinList = async () => {
  return await fetchCoins.get("coins/markets");
};

export const useFetch = (value, currency) => {
  fetchCoins.defaults.params.vs_currency = currency;

  // const [state, setstate] = useState(null);
  const { data, isLoading, isError, isFetching, ...rest } = useQuery(
    "coinsList",
    fetchCoinList,
    {
      retry: 0,
      refetchInterval: value,
      refetchOnReconnect: true,

      //enabled: true,
    }
  );

  return { data, isLoading, isError, isFetching, rest };
};

// const getCoins = () => {

//     const { data, isLoading, error } = useQuery("coinsList", fetchCoinList, {
//             retry: 3,
//             // refetchInterval: 4000,
//             refetchOnReconnect: true,
//           });

//     return (
//         <div>

//         </div>
//     )
// }

// export default getCoins

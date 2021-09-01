import React, { useContext, useEffect } from "react";
import { useQueryClient, useQueries } from "react-query";
import { useParams } from "react-router";
import { CoinCointext } from "../../../hooks/CoinContext";
import useGetDetails from "../../../hooks/getCoinDetails";
import { useFetch } from "../../../hooks/getCoins";
import Error from "../../status/Error";
import Loading from "../../status/Loading";
import "../../scss/CoinDetails.scss";
import { CoinIntro } from "./CoinIntro";
import useSingleCoin from "../../../hooks/getSingleCoin";
import CoinChartBox from "./CoinChartBox";
import CoinStatistics from "./CoinStatistics";

const CoinDetails = () => {
  const { currency } = useContext(CoinCointext);
  const { id } = useParams();

  const data = useSingleCoin(id, currency, false);

  const results = useQueries([
    {
      queryKey: ["coinD", 1],
      queryFn: useGetDetails(id, currency, 1, "hour"),
      refetchInterval: 80000,
    },
    {
      queryKey: ["coinD", 2],
      queryFn: useGetDetails(id, currency, 7, "hour"),
      refetchInterval: 80000,
    },
    {
      queryKey: ["coinD", 3],
      queryFn: useGetDetails(id, currency, 30, "hour"),
      refetchInterval: 80000,
    },
    {
      queryKey: ["coinD", 4],
      queryFn: useGetDetails(id, currency, 365, "monthly"),
      refetchInterval: 80000,
    },
  ]);

  // console.log(id);

  const [data1, data2, data3, data4] = results;

  useEffect(() => {
    // queryClient.clear();
    data.refetch();
    results.map((el) => {
      el.refetch();
      // console.log(el.status);
    });
  }, [currency, id]);

  // console.log(data, data1, data2);

  if (data.isLoading || data1.isLoading || data2.isLoading || data3.isLoading) {
    return (
      <div className="naV__spiner dashboard__spiner">
        <Loading />
      </div>
    );
  }
  //  console.log(data);
  if (!data || data.isError || data.error || data1.error || data1.isError) {
    //  console.log(results[0].error);
    if (!data || data.error) {
      return <Error rest={data} />;
    } else if (results[0].error) {
      return <Error rest={results[0]} />;
    }
    return <Error />;
  }

  //  console.log(results);

  return (
    <div className="details">
      <CoinIntro data={data} />
      <CoinChartBox data={data} results={results} id={id} />
      <CoinStatistics data={data} currency={currency} />
    </div>
  );
};

export default CoinDetails;

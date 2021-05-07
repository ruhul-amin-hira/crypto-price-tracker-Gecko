const findPercentage = (index, coin) => {
  switch (index) {
    case 0:
      return {
        percent: coin.price_change_percentage_24h,
        percentTime: "(24H)",
      };
    case 1:
      return {
        percent: coin.price_change_percentage_7d_in_currency,
        percentTime: "(7D)",
      };

    case 2:
      return {
        percent: coin.price_change_percentage_30d_in_currency,
        percentTime: "(1M)",
      };

    default:
      return {
        percent: coin.price_change_percentage_1y_in_currency
          ? coin.price_change_percentage_1y_in_currency
          : 0,
        percentTime: "(1Y)",
      };
  }
};

export default findPercentage;

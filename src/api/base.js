import axios from "axios";

export const fetchCoins = axios.create({
  // baseURL: "https://api.coingecko.com/api/v3",
  baseURL:
    "https://api.coingecko.com/api/v3",

  // baseURL: "https://api.codetabs.com/v1/proxy?quest=",
  params: {
    // vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 100,
    page: 1,
    sparkline: false,
  },
});

export const fetchCoinDetails = axios.create({
  //  baseURL: "https://api.coingecko.com/api/v3",
  baseURL:
    "https://api.coingecko.com/api/v3",
  /*  baseURL:
    "https://api.codetabs.com/v1/proxy?quest=<https://api.coingecko.com/api/v3>", */
});

// export const fetchCoins = (currency) => {
//   axios.create({
//     baseURL: "https://api.coingecko.com/api/v3",
//     params: {
//       // vs_currency: currency,
//       order: "market_cap_desc",
//       per_page: 100,
//       page: 1,
//       sparkline: true,
//     },
//   });
// };

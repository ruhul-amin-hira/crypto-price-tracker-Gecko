import React, { createContext, useState, useEffect } from "react";

export const CoinCointext = createContext();

const CoinContextProvider = (props) => {
  const [currency, SetCurreny] = useState("usd");
  // const [mode, SetMode] = useState("white");
  // const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState(false);
  const isStorage = localStorage.getItem("theme");

  const changeCurrency = (value) => {
    SetCurreny(value);
  };

  const searchCoin = (coin) => {
    setSearch(coin);
  };

  const [color, setColor] = useState({
    borderColor: "rgb(236, 236, 236)",
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(isStorage);
      if (isStorage == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        setColor({
          borderColor: "rgba(0, 0, 0, 0.229)",
        });
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        setColor({
          borderColor: "rgb(236, 236, 236)",
        });
      }
    }, 5);
    return () => {
      clearTimeout(timeOut);
    };
  }, [theme]);

  const values = {
    currency,
    changeCurrency,
    searchCoin,
    search,
    index,
    setIndex,
    color,
    setTheme,
  };

  // console.log(search);

  return (
    <CoinCointext.Provider value={values}>
      {props.children}
    </CoinCointext.Provider>
  );
};

export default CoinContextProvider;

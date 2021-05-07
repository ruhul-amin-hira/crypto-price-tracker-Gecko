import React, { useContext, useEffect, useState } from "react";

import { CoinCointext } from "../../hooks/CoinContext";

const Search = () => {
  const { searchCoin } = useContext(CoinCointext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      searchCoin(search);
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [search]);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="search coin"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

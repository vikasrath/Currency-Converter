import { useState, useEffect } from "react";

function useCurrencyInfo(currencyName) {
  
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const CurrencyUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currencyName}.json`;

    fetch(CurrencyUrl)
      .then((res) => {
       
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const currency = data[currencyName];
        setCurrencyData(currency);
       
      })
      .catch((error) => {
        console.error("Error fetching the currency data:", error);
      });
  }, [currencyName]);

  return currencyData;
}

export default useCurrencyInfo;
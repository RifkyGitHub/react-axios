import { useEffect, useState } from "react";
import { requestPokemon, requestDummyJSON } from "./axios";

function QuotesList() {
  const [dummyJSONQuotes, setDummyJSONQuotes] = useState([]);
  const [errorQuotes, setErrorQuotes] = useState(null);

  useEffect(() => {
    const getQuotesJSON = async () => {
      try {
        //Asynchronous
        const quotesResp = await requestDummyJSON.get("/quotes");
        setDummyJSONQuotes(quotesResp.data.quotes);

        // if (!quotesResp.ok) {
        //   throw new Error("Error Detected");
        // }

        // const quotesData = await quotesResp.json();
        // console.log(quotesData);

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        setErrorQuotes(error.message);
      }

      //Synchronous
      // fetch('https://dummyjson.com/quotes')
      //   .then((res) => res.json())
      //   .then((data) => setDummyJSONQuotes(data.quotes));
    };

    getQuotesJSON();
  }, []);

  console.log(dummyJSONQuotes);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Quotes API</h1>

      {dummyJSONQuotes.map((quote, index) => {
        return (
          <div key={index}>
            <i>"{quote.quote}"</i>
            <strong>- {quote.author}</strong>
          </div>
        );
      })}

      {/* //klo mau nambahin authornya/quotes dari siapa {quote.author} */}

      {errorQuotes && <span>{errorQuotes}</span>}
    </div>
  );
}

export default QuotesList;

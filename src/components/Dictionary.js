import React, { useState } from "react";
import Results from "../components/Results";
import "../App.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState();

  //fetch
  function gettingData() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`)
      .then((response) => response.json())
      .then((data) => {
        gettingDataresults(data);
      })
      .catch((error) => console.error(error));
  }
  //

  function gettingDataresults(data) {
    setResults(data[0]);
  }

  function search(e) {
    e.preventDefault();
    gettingData();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label>What word do you want to look up?</label>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word"
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </form>
      <small>i.e. paris, wine, yoga, coding</small>
      <Results results={results} />
    </div>
  );
}

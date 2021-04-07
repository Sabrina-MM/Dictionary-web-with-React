import React, { useState } from "react";
import "../App.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");

  function gettingData() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  function search(e) {
    e.preventDefault();
    gettingData();
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <label>What word do you want to look up?</label>
        <input
          type="search"
          autoFocus={true}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </form>
      <small>i.e. paris, wine, yoga, coding</small>
    </div>
  );
}

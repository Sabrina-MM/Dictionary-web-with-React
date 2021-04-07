import React, { useState } from "react";
import "../App.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");

  function search(e) {
    e.preventDefault();
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
      <p>{keyWord}</p>
    </div>
  );
}

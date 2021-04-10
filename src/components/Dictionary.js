import React, { useState } from "react";
import Results from "../components/Results";
import PhotoGallery from "./PhotoGallery";
import "../App.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");

  function gettingData() {
    // getting data(dictionary) from API

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`)
      .then((response) => response.json())
      .then((data) => {
        gettingDictionaryresults(data);
      })
      .catch((error) => console.error(error));

    // geeting data(pictures) from pexels.com API

    fetch(
      `https://api.pexels.com/v1/search?query=${keyWord}&per_page=15
`,
      {
        method: "GET",
        headers: {
          Authorization:
            "563492ad6f917000010000012f671a39cc62479ba2084ee3b20618b3",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        gettingPicturesResults(data);
      })
      .catch((error) => console.error(error));
  }

  function gettingDictionaryresults(data) {
    setResults(data[0]);
  }

  function gettingPicturesResults(data) {
    console.log(data.photos);
    setPhotos(data.photos);
  }

  function search(e) {
    e.preventDefault();
    gettingData();
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <h3 className="mb-4 ">What word do you want to look up?</h3>
          <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={(e) => setKeyWord(e.target.value)}
            className="search"
          />
        </form>
        <small>i.e. paris, wine, yoga, coding</small>
      </section>
      <Results results={results} />
      <PhotoGallery photos={photos} />
    </div>
  );
}

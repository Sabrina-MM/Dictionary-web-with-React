import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import PhotoGallery from "./PhotoGallery";

import "../css/Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("welcome");
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    gettingData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function gettingData() {
    // getting data(dictionary) from API

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`).then(
      (response) => {
        if (response.status !== 200) {
          alert(
            `Sorry, I can not find "${keyWord}". Try again with another word!`
          );
          return;
        }
        response
          .json()
          .then((data) => {
            gettingDictionaryresults(data);
          })
          .catch((error) => console.error(error));
      }
    );

    // geeting data(pictures) from pexels.com API

    fetch(
      `https://api.pexels.com/v1/search?query=${keyWord}&per_page=12
`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_DICTIONARY_API_KEY,
        },
      }
    ).then((response) => {
      if (response.status !== 200) {
        return null;
      }
      response
        .json()
        .then((data) => {
          gettingPicturesResults(data);
        })
        .catch((error) => console.error(error));
    });
  }

  function gettingDictionaryresults(data) {
    setResults(data[0]);
  }

  function gettingPicturesResults(data) {
    setPhotos(data.photos);
  }

  function handleSubmit(e) {
    e.preventDefault();
    gettingData();
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <h3 className="mb-4 ">What word do you want to look up?</h3>
          <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={(e) => setKeyWord(e.target.value)}
            className="search"
            defaultValue={null}
          />
        </form>
        <small>
          <i>i.e. paris, wine, yoga, coding</i>
        </small>
      </section>
      <Results results={results} />
      <PhotoGallery photos={photos} />
    </div>
  );
}

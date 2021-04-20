import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import PhotoGallery from "./PhotoGallery";

import "../css/Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("welcome");
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    fetchDictionaryData();
    let url = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=&page=0
`;
    fetchImages(url);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function fetchDictionaryData() {
    // getting data(dictionary) from API

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`).then(
      (response) => {
        if (response.status !== 200) {
          setErrorMessage(
            <div>
              <i class="fas fa-exclamation-triangle"></i> Sorry, I can not find{" "}
              "{keyWord}". Try again with another word!
            </div>
          );

          return;
        }
        response
          .json()
          .then((data) => {
            setResults(data[0]);
          })
          .catch((error) => console.error(error));
      }
    );
  }

  function fetchNextImages(url) {
    fetchImages(url);
  }

  function fetchImages(url) {
    console.log(url);
    // geeting data(pictures) from pexels.com API and next-page

    fetch(
      `${url}
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
          setPhotos(data.photos);
          if (data.next_page) {
            setNextPage(data.next_page);
          }
        })
        .catch((error) => console.error(error));
    });
  }

  function clickNextPage() {
    fetchNextImages(nextPage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchDictionaryData();
    let url = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=&page=0
`;
    fetchImages(url);
    setErrorMessage(); // update once you change the word again
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
          <br />

          <span className="text-danger">{errorMessage}</span>
        </small>
      </section>
      <Results results={results} />
      <PhotoGallery photos={photos} />
      <div className="d-flex justify-content-center">
        {nextPage ? (
          <button
            onClick={clickNextPage}
            className="btn btn-warning  me-3  shadow"
          >
            More Photos <i className="fas fa-angle-double-right"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
}

import Dictionary from "../components/Dictionary";
import ScrollToTop from "../components/ScrollToTop";
import CheckBox from "../components/CheckBox";

import "../css/App.css";

export default function Views() {
  if (!process.env.REACT_APP_DICTIONARY_API_KEY) {
    console.log("Api Key no set!");
    return false;
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="website-title">Dictionary</h1>
          <CheckBox />
        </header>
        <main>
          <Dictionary />
          <ScrollToTop />
        </main>

        <footer className="App-footer">
          <small>
            @2021 This project was coded by Sabrina Martinez and is{" "}
            <a
              href="https://github.com/Sabrina-MM"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on{" "}
            <a
              href="https://github.com/Sabrina-MM/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://serene-babbage-afa89a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

import logo from "../img/logo.png";
import Dictionary from "../components/Dictionary";
import ScrollToTop from "../components/ScrollToTop";

import "../css/App.css";

export default function Views() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img
            src={logo}
            alt="Dictionary Logo"
            className="website-logo img-fluid"
          />
        </header>
        <main>
          <Dictionary />
          <ScrollToTop />
        </main>

        <footer className="App-footer">
          <small>
            This project was coded by Sabrina Martinez and is{" "}
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

import logo from "../img/logo.png";
import Dictionary from "../components/Dictionary";

import "../App.css";

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
        </main>
      </div>
      <footer className="App-footer">
        <small>
          This project was coded by Sabrina Martinez and is open-sourced on{" "}
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
  );
}

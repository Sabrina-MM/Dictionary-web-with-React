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
        <footer className="App-footer">
          <p>Coded by Sabrina Martinez</p>
        </footer>
      </div>
    </div>
  );
}

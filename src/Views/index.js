import logo from "../img/logo.png";

import "../App.css";

export default function Views() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
        <img
          src={logo}
          alt="Dictionary Logo"
          className="website-logo img-fluid"
        />
      </header>
    </div>
  );
}

import React from "react";
import "../css/CheckBox.css";

export default function CheckBox() {
  const ambienteBackgroundColor = document.body.style;
  const ambienteBackgroundColorAlternative = "background : var(--turquoise)";

  function handleChecked(e) {
    if (e.target.checked === true) {
      document.body.style = ambienteBackgroundColorAlternative;

      document
        .getElementsByTagName("audio")
        .item(0).style = ambienteBackgroundColorAlternative;
    } else {
      document
        .getElementsByTagName("audio")
        .item(0).style = ambienteBackgroundColor;

      document.body.style = ambienteBackgroundColor;
    }
  }

  return (
    <div className="form-check form-switch">
      <small className="form-check-label">Change the color</small>
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        onChange={handleChecked}
        defaultChecked={false}
      />
    </div>
  );
}

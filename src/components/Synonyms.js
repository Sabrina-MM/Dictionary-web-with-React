import React from "react";
import "../css/App.css";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <div className="Synonyms">
        <p className="mb-0 fw-bold">Synonyms: </p>
        {synonyms.slice(0, 8).map((synonym, index) => {
          return <span key={index}>{synonym}, </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

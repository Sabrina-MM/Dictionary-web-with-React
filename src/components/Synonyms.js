import React from "react";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <div className="Synonyms">
        <h4>Synonyms: </h4>
        {synonyms.slice(0, 8).map((synonym, index) => {
          return <span key={index}>{synonym}, </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

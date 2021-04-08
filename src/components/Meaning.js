import React from "react";
import "../App.css";

export default function Meaning({ meaning }) {
  console.log(meaning);
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <small className="text-muted">i.e. {definition.example}</small>
            {/*  {meaning.definitions.definition.synonyms.map((synonyms, index) => {
              return (
                <div key={index}>
                  <p>{synonyms[0]}</p>
                </div>
              );
            })} */}
          </div>
        );
      })}
    </div>
  );
}

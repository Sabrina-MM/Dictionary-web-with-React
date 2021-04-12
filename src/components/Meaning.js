import React from "react";
import Synonyms from "../components/Synonyms";
import "../css/App.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <small className="text-muted">
              {definition.example ? <i>i.e. {definition.example}</i> : null}
            </small>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

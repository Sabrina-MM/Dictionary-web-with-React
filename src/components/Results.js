import React from "react";
import Meaning from "../components/Meaning";
import "../App.css";

export default function WordDefinition({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>
        {results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}

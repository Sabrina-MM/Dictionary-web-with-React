import React from "react";
import Meaning from "../components/Meaning";
import Phonetics from "../components/Phonetics";
import "../App.css";

export default function WordDefinition({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h3>{results.word}</h3>
        {results.phonetics.map((phonetics, index) => {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}

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

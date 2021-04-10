import React from "react";
import Meaning from "../components/Meaning";
import Phonetics from "../components/Phonetics";
import "../App.css";

export default function WordDefinition({ results }) {
  if (results) {
    return (
      <div className="Results">
        <section>
          <h3 className="word">{results.word}</h3>
          {results.phonetics.map((phonetics, index) => {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>

        {results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}

import React from "react";

import "../App.css";

export default function Phonetics({ phonetics }) {
  console.log(phonetics);
  return (
    <div className="Phonetics">
      <a
        href={phonetics.audio}
        alt="Phonetics link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-volume-up"></i>
      </a>{" "}
      {phonetics.text}
      {/*  <audio controls src={phonetics.audio}></audio> */}
    </div>
  );
}

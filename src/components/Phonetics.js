import React from "react";

import "../css/Phonetics.css";

export default function Phonetics({ phonetics }) {
  return (
    <div className="Phonetics">
      {phonetics.text} : <br />
      <audio controls src={phonetics.audio}></audio>
    </div>
  );
}

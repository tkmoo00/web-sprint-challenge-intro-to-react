// Write your Character component here

import React from "react";

export default function Character({ info }) {
  return (
    <div>
      <h1>{info.name}</h1>
      <h2>{info.birth_year}</h2>
    </div>
  );
}

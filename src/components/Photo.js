import React from "react";

export default function Photo({ photoURL, date, title, explanation }) {
  console.log(photoURL);
  return (
    <>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={photoURL} alt="alt"></img>
      <div>
        <p>{explanation}</p>
      </div>
    </>
  );
}

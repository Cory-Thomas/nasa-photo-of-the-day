import React from "react";

export default function Photo({
  photoURL,
  date,
  title,
  explanation,
  copyright,
}) {
  console.log(photoURL);
  return (
    <>
      <h1>{title}</h1>
      <h2>Date: {date}</h2>
      <img src={photoURL} alt={`picture of ${title}`}></img>
      <div>
        <p>Photo Copyright: {copyright}</p>
      </div>
      <div>
        <p>{explanation}</p>
      </div>
    </>
  );
}

import React from "react";

export default function Photo({ photoURL }) {
  console.log(photoURL);
  return <img src={photoURL} alt="alt"></img>;
}

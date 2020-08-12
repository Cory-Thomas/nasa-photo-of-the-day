import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo";

function App() {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=raWXO5AlJb9UFxibkkG0OdMDlWEEkRu1Y8XQslnX"
      )
      .then((nasa) => {
        setPhoto(nasa.data);
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  }, []);

  return <div className="App">{<Photo photoURL={photo["url"]} />}</div>;
}

export default App;

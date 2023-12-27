import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import StarRating from "./StarRating";

function Test() {
  const [moviRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was ratied {moviRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      className="test"
      size={24}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);

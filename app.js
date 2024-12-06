import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello My mind is totally fucked up!"
);


const jsxHeading = <h1 id="heading">hello myself priyansu</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

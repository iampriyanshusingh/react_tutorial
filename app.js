import React from "react"
import ReactDOM from "react-dom/client"


//Work flow of my code used in the HTML
/*
<div id:"div1">
    <div id:"div2">
        <h1>I'm heading 1</h1>
        <h2>I'm heading 2</h2>
    </div>

    <div id:"div3">
        <h1>I'm heading 1</h1>
        <h2>I'm heading 2</h2>
    </div>
</div>
*/

//Writing Hello world using JS

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From Java Script";

// const root = document.getElementById("root");
// root.appendChild(heading);


//Writing Hello world using React JS

const heading = React.createElement("div", { id: "div1" }, [
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", {}, "I'm heading 1"),
    React.createElement("h2", {}, "I'm heading 2"),
  ]),
  React.createElement("h1", {}, "I'm heading 1"),
  React.createElement("h2", {}, "I'm heading 2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

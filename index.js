import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title"
},"hi hello");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
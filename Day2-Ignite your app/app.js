import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1',{},"This is h1");
const mainContainer = ReactDOM.createRoot(document.getElementById("mainContainer"));

mainContainer.render(heading);
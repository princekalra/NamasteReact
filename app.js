import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: " heading" },
  "This is the heading"
);
//Babel Transpiles JSX to React. Create Element(JavaScript Object) => HTML Element while Rendering
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Heading By using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// Firstly create Element hme object deta ha => fr hm us object ko DOM p render krate to vo DOM Element hojata

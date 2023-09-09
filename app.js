import React from "react";
import ReactDOM from "react-dom";

//React Component
const Title = () =><h1>Title of the Heading😍</h1>

//Component Compositions
const HeadingComponent = () => (
  <><Title /><h1 className="heading">This is Our Heading</h1></>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


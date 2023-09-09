import React from "react";
import ReactDOM from "react-dom";

const HeadingComponent = () => (
  <>
    {12 + 21}
    {/* {Title()}
<Title></Title>
  <Title /> */}
    <h1 className="heading">This is Our Heading</h1>
  </>
);
//React Component
const title = () =>{
  
 return <><HeadingComponent/><h1>Title of the Heading😍</h1></>

};

//Component Compositions


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title());


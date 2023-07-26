const Heading = React.createElement("h1", {'id':'heading'}, "Hello World ! from React");
console.log(Heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root); //object
root.render(Heading);

/**
 *
 * <div id="parent">
 * <div id="child1">
 * <h1>Heading 1 from Child1!!</h1>
 * <h2>Heading 2 from Child1!!</h2>
 * </div>
 * <div id="child2">
 * <h1>Heading 1 from Child2!!</h1>
 *  <h2>Heading 2 from Child2!!</h2>
 * </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement(
    "div",
    { id: "child1" },

    [
      React.createElement("h1", null, "Heading  1 from Child1!!"),
      React.createElement("h2", null, "Heading  2 from Child1!!"),
    ]
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "Heading 1 from Child2!!"),
    React.createElement("h2", null, "Heading 2 from Child2!!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

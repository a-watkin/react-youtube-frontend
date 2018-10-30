import React from "react";
import ReactDOM from "react-dom";

// Create a new component that produces HTML
const App = () => {
  return <div>hi</div>;
};

// put the component in the dom
ReactDOM.render(<App />, document.querySelector(".container"));

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBc80HauFB9dNK_pMBw3vewv3IehQyFp-s";

// Create a new component that produces HTML
const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <SearchBar />
    </div>
  );
};

// put the component in the dom
ReactDOM.render(<App />, document.querySelector(".container"));

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import key from "../API_KEY";

const API_KEY = key;

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

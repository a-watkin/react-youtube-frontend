import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import key from "../API_KEY";
import YTSearch from "youtube-api-search";
// import SearchBar from "./components/search_bar";

const API_KEY = key;

// Create a new component that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "penguins" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <SearchBar />
      </div>
    );
  }
}

// put the component in the dom
ReactDOM.render(<App />, document.querySelector(".container"));

import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import key from "../API_KEY";
import YTSearch from "youtube-api-search";
// import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = key;

// Create a new component that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "penguins" }, videos => {
      this.setState({ videos });
    });

    console.log(this.state.videos);
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        {/* passing props to VideoList */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// put the component in the dom
ReactDOM.render(<App />, document.querySelector(".container"));

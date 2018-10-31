import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          placeholder="Enter search term here..."
          onChange={event => this.onInputChange(event.target.value)}
        />
        {/* Value of input: {this.state.term} */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

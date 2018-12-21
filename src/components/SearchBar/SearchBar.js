import './SearchBar.css';
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
  handleSearchBarOnChange(term) {
    this.setState({ term });
    this.props.onSearchTermSubmit(term);
  }
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="What would you like to search for?"
          onChange={event => this.handleSearchBarOnChange(event.target.value)}
        />
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        />
      </div>
    );
  }
}

export default SearchBar;

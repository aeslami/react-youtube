import './SearchBar.css';
import React, { Component } from 'react';
import searchIcon from '../../img/search-icon.png';

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
        <img className="search-icon" src={searchIcon} />
      </div>
    );
  }
}

export default SearchBar;

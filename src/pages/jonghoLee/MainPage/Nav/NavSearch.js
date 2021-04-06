import React, { Component } from 'react';
import './NavSearch.scss';

class NavSearch extends Component {
  render() {
    return (
      <div className="nav-search-container">
        <ul className="nav-search-shadow"></ul>
        <div className="nav-search-triangle"></div>
        <ul className="nav-search-list"></ul>
      </div>
    )
  }
}

export default NavSearch;
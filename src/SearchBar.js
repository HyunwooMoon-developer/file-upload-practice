import React, { Component } from 'react';
import FilterOptions from './FilterOptions';
import SearchBox from './SearchBox';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <div className="SearchBar__heading">
                <h1>File Uploader</h1>
                </div>
                <div className="SearchBar__controls">
                <SearchBox searchTerm={this.props.searchTerm}
                            handleUpdate={this.props.handleUpdate}/>
                <FilterOptions filterOption={this.props.filterOption}
                                handleFilterChange = {this.props.handleFilterChange}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
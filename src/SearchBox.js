import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './SearchBox.css'

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder="search term" value={this.props.sarchTerm}
                onChange={e=> this.props.handleUpdate(e.target.value)}/>
            </div>
        );
    }
}

export default SearchBox;
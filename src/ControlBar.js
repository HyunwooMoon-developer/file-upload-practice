import { faCloudDownloadAlt, faRedoAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './ControlBar.css';

class ControlBar extends Component {
    render() {
        return (
            <div className="ControlBar">
                <div><FontAwesomeIcon icon={faRedoAlt} /></div>
                <div><FontAwesomeIcon icon={faTrashAlt} /></div>
                <div><FontAwesomeIcon icon={faCloudDownloadAlt} /></div>
            </div>
        );
    }
}

export default ControlBar;
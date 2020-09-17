import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Break extends Component {
    render() {
        return (
              <div className="module">
                <div id="break-label">Break Length</div>
                <div className="buttons-container">
                    <button className="btn" id="break-decrement" onClick={this.props.handleChange}><i className="fas fa-caret-down" /></button>
                        <div id="break-length">{this.props.break}</div>
                    <button className="btn" id="break-increment" onClick={this.props.handleChange}><i className="fas fa-caret-up" /></button>
                </div>
              </div>
        )
    }
}

Break.propTypes = {
    handleChange: PropTypes.func.isRequired,
    break: PropTypes.number.isRequired
  }

export default Break

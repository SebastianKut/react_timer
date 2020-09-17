import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Session extends Component {
    render() {
        return (
            <div className="module">
                <div id="session-label">Session Length</div>
                <div className="buttons-container">
                    <button className="btn" id="session-decrement" onClick={this.props.handleChange}><i className="fas fa-caret-down"/></button>
                    <div id="session-length">{this.props.session}</div>
                    <button className="btn" id="session-increment" onClick={this.props.handleChange}><i className="fas fa-caret-up"/></button>
                </div>
          </div>
        )
    }
}

Session.propTypes = {
    handleChange: PropTypes.func.isRequired,
    session: PropTypes.number.isRequired
  }


export default Session

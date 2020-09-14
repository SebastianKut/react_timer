import React, { Component } from 'react';

class Session extends Component {
    render() {
        return (
            <div className="module">
                <div id="session-label">Session Length</div>
                <div className="buttons-container">
                    <div className="btn" id="session-decrement" onClick={this.props.handleChange}><i className="fas fa-caret-down"></i></div>
                    <div id="session-length">{this.props.session}</div>
                    <div className="btn" id="session-increment" onClick={this.props.handleChange}><i className="fas fa-caret-up"></i></div>
                </div>
          </div>
        )
    }
}

export default Session

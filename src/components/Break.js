import React, { Component } from 'react';

class Break extends Component {
    render() {
        return (
              <div className="module">
                <div id="break-label">Break Length</div>
                <div className="buttons-container">
                    <div className="btn" id="break-decrement" onClick={this.props.handleChange}><i className="fas fa-caret-down"></i></div>
                        <div id="break-length">{this.props.break}</div>
                    <div className="btn" id="break-increment" onClick={this.props.handleChange}><i className="fas fa-caret-up"></i></div>
                </div>
              </div>
        )
    }
}

export default Break

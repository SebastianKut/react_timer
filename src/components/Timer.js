import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {

    render() {
        return (
        <div className="timer-container">
            <div className="timer">
                <p id="timer-label">{this.props.label}</p>
                <div id="time-left">{this.props.formatTimer}</div>
            </div>
            <div className="controls">
                <div className="control-btn btn" id="start_stop" onClick={this.props.startStop}><i className="fas fa-play"></i><i className="fas fa-pause"></i></div>
                <div className="control-btn btn" id="reset" onClick={this.props.resetTimer}><i className="fas fa-sync-alt"></i></div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
        )
    }
}

Timer.propTypes = {
    label: PropTypes.string.isRequired,
    formatTimer: PropTypes.func.isRequired,
    startStop: PropTypes.func.isRequired,
    resetTimer: PropTypes.func.isRequired
  }

export default Timer

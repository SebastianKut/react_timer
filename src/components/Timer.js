import React, { Component } from 'react'

class Timer extends Component {

    render() {
        return (
        <div className="timer-container">
            <div className="timer">
                <p id="timer-label">Session</p>
                <div id="time-left">{this.props.timer}</div>
            </div>
            <div className="controls">
                <div className="btn" id="start_stop"><i className="fas fa-play"></i><i className="fas fa-pause"></i></div>
                <div className="btn" id="reset"><i className="fas fa-sync-alt"></i></div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
        )
    }
}

export default Timer

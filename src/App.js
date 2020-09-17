import React, { Component } from 'react';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import './App.css';


let controlStopwatch;

//script to make sure that interval stays synced from https://gist.github.com/AlexJWayne/1431195
const accurateInterval = function(fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timer: 1500,
      timerActive: false,
      sessionCountdown: true,
      label: 'Session'
    }
  }

  handleChange = (e) => {
    const clickedElement = e.target.id;
    let breakValue = this.state.break;
    let sessionValue = this.state.session;
    
    if (breakValue <=1 && clickedElement === 'break-decrement') return;
    if (breakValue>=60 && clickedElement === 'break-increment') return;
    if (sessionValue <=1 && clickedElement === 'session-decrement') return;
    if (sessionValue>=60 && clickedElement === 'session-increment') return;

    if (clickedElement === 'break-decrement' && !this.state.timerActive) {
      this.setState({break: breakValue - 1});
    };
    if (clickedElement === 'break-increment' && !this.state.timerActive) {
      this.setState({break: breakValue +1});
    };
    if (clickedElement === 'session-decrement' && !this.state.timerActive) {
      sessionValue = sessionValue - 1;
      this.setState({session: sessionValue,
      timer: sessionValue * 60
    })
  }
    if (clickedElement === 'session-increment' && !this.state.timerActive) {
      sessionValue = sessionValue + 1;
      this.setState({session: sessionValue,
      timer: sessionValue * 60
    })
    }; 
  }

  formatTimer = () =>{
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  resetTimer = () => {
    this.setState({
      break: 5,
      session: 25,
      timer: 1500,
      timerActive: false,
      sessionCountdown: true,
      label: 'Session'
    });
    this.pauseSound();
   //stop reset from throwing an error if pressed before start and stop when controlStopwatch value is still undefined 
   if (controlStopwatch === undefined) {return} else {this.pauseCountdown()};
  }

  startStop = () => {
    this.state.timerActive ? this.pauseCountdown() : controlStopwatch = accurateInterval(this.beginCountdown, 1000)    
  }

  //update state and check check time every 1000ms
  beginCountdown = () => {
    this.setState({
      timer: this.state.timer - 1,
      timerActive: true
    });
    this.checkTime();
  }

  pauseCountdown = () => {
    controlStopwatch.cancel();
   this.setState({
    timerActive: false
  })
  }

  //switch modes from break to session when countdown reaches 0
  checkTime = () => {
    if (this.state.timer === -1 && this.state.sessionCountdown === true) {
      this.setState({
        timer: this.state.break * 60,
        sessionCountdown: false,
        label: 'Break'
      });
      this.playSound();
    } else if (this.state.timer === -1 && this.state.sessionCountdown === false) {
        this.setState({
          timer: this.state.session * 60,
          sessionCountdown: true,
          label: 'Session'
        });
        this.playSound();
      } else return;
    }

    playSound = () => {
      const beep = document.getElementById('beep');
      beep.pause();
      beep.currentTime = 0;
      beep.play();
    }

    pauseSound = () => {
      const beep = document.getElementById('beep');
      beep.pause();
      beep.currentTime = 0;
    }

  render() {
    return (
      <div id="app">
        <div className="nav-container">
          <Break break={this.state.break} handleChange={this.handleChange}/>
          <Session session={this.state.session} handleChange={this.handleChange}/>        
        </div>
        <Timer formatTimer={this.formatTimer()} resetTimer={this.resetTimer} startStop={this.startStop} label={this.state.label}/>
      </div>
    )
  }
}

export default App


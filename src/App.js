import React, { Component } from 'react';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import './App.css';


let controlStopwatch;

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
    const clickedElement = e.target.parentElement.id;
    console.log(clickedElement);
    if (clickedElement === 'break-decrement') this.setState({break: (this.state.break <= 1 ? this.state.break - 0 : this.state.break - 1)});
    if (clickedElement === 'break-increment') this.setState({break: (this.state.break >= 60 ? this.state.break + 0 : this.state.break + 1)});
    if (clickedElement === 'session-decrement') this.setState({session: (this.state.session <= 1 ? this.state.session - 0 : this.state.session - 1),
      timer: (this.state.timer <= 60 ? this.state.timer - 0 : this.state.timer - 60)
    });
    if (clickedElement === 'session-increment') this.setState({session: (this.state.session >= 60 ? this.state.session + 0 : this.state.session + 1),
      timer: (this.state.timer >= 3600 ? this.state.timer + 0 : this.state.timer + 60)
    }); 
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
      timer: 1500
    })
  }

  startStop = () => {
    this.state.timerActive ? this.pauseCountdown() : controlStopwatch = setInterval(this.beginCountdown, 1000)    
  }

  beginCountdown = () => {
    this.setState({
      timer: this.state.timer - 1,
      timerActive: true
    });
    this.checkTime();
  }

  pauseCountdown = () => {
   console.log ('what now');
   clearInterval(controlStopwatch);
   this.setState({
    timerActive: false
  })
  }

  checkTime = () => {
    if (this.state.timer === 0 && this.state.sessionCountdown === true) {
      this.setState({
        timer: this.state.break * 60,
        sessionCountdown: false,
        label: 'Break'
      });
      this.playSound();
    } else if (this.state.timer === 0 && this.state.sessionCountdown === false) {
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

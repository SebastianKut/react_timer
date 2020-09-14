import React, { Component } from 'react';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timer: '25:00'
    }
  }

  handleChange = (e) => {
    const clickedElement = e.target.parentElement.id;
    console.log(clickedElement);
    if (clickedElement === 'break-decrement') this.setState({break: (this.state.break <= 1 ? this.state.break - 0 : this.state.break - 1)});
    if (clickedElement === 'break-increment') this.setState({break: (this.state.break >= 60 ? this.state.break + 0 : this.state.break + 1)});
    if (clickedElement === 'session-decrement') this.setState({session: (this.state.session <= 1 ? this.state.session - 0 : this.state.session - 1)});
    if (clickedElement === 'session-increment') this.setState({session: (this.state.session >= 60 ? this.state.session + 0 : this.state.session + 1)}); 
  }

  render() {
    return (
      <div id="app">
        <div className="nav-container">
          <Break break={this.state.break} handleChange={this.handleChange}/>
          <Session session={this.state.session} handleChange={this.handleChange}/>        
        </div>
        <Timer timer={this.state.timer}/>
      </div>
    )
  }
}

export default App

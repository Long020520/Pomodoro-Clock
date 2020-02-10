import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import stc from "./image/stc.mp3";
import tk from "./image/tk.mp3";

import Pomodoro from "./component/Pomodoro";

class App extends Component {

  constructor(props) {
    // const newAudio = new Audio(stc);
    const td = 1500;
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      seconds : td,
      time: {},
      play: true
      
    }
    this.timer = 0;
    this.url = tk;
    this.audio = new Audio(this.url);
  }

  preBreakLength = () => {
    if(this.state.breakLength <= 1 ) { return this.state.breakLength === 1  }
    this.setState({
      breakLength: this.state.breakLength - 1
    })
  }

  nextBreakLength = () => {
    if(this.state.breakLength >= 60 ) { return this.state.breakLength === 60 }

    this.setState({
      breakLength: this.state.breakLength + 1
    })
  }

  preSessionLength = () => {
    if(this.state.sessionLength <= 1) { return this.state.sessionLength === 1}
    let timePreVar = this.secondsToTime(this.state.seconds -60);
      
    this.setState({
      sessionLength: this.state.sessionLength - 1,
      seconds: this.state.seconds - 60,
      time: timePreVar
    })
  }

  nextSessionLength = () => {
    if(this.state.sessionLength >= 60) { return this.state.sessionLength === 60}

    let timeNextVar = this.secondsToTime(this.state.seconds + 60);
    this.setState({
      sessionLength: this.state.sessionLength + 1,
      seconds: this.state.seconds + 60,
      time: timeNextVar,
      play: true
    })
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    console.log(this.state.time);
  }

  undoTime =() => {
    let timeLeftVar = this.secondsToTime(1500);
    this.setState({ 
      time: timeLeftVar,
       seconds: 1500, 
       breakLength: 5,
       sessionLength: 25,
       play: true
      });
      clearInterval(this.timer);
      
  }

  startTimer = () => {
    
       if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000) 
          console.log("start11");
      }else if (this.timer >= 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000) 
      }
  console.log("start12");
  
    this.setState({ 
      ...this.state,
      play : !this.state.play
    }) 
  }

  pause = () => {
    if(this.state.play === false) {
        clearInterval(this.timer)
        console.log("pause11");
        console.log(this.timer, this.state.seconds);
    }
    this.setState({
       ...this.state, 
        play : !this.state.play 
      })
    
  }

  countDown = () => {
    
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      play: false
      
    });
    
    if (seconds === 0) { 
      clearInterval(this.timer);
      this.setState({
        time: this.secondsToTime(this.state.breakLength * 60),
        seconds: this.state.breakLength * 60,
        play: false
      })
      if(this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000) 
      }
      this.audio.play();
    }
  }

  render() {
    return (
      <div className="App">
        <Pomodoro 
          
          preBreakLength={this.preBreakLength}
          breakLength={this.state.breakLength}
          nextBreakLength={this.nextBreakLength}

          preSessionLength={this.preSessionLength}
          sessionLength={this.state.sessionLength}
          nextSessionLength={this.nextSessionLength}
          
          secondsToTime={this.secondsToTime}
          seconds={this.state.seconds}
          time={this.state.time}
          countDown={this.countDown}
          startTimer={this.startTimer}
          
          play={this.state.play}
          undoTime={this.undoTime}
          pause={this.pause}

        />
        
      </div>
    );
  }
}

export default App;

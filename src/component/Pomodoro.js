import React, { Component } from "react";

import "./Pomodoro.css";
import play from "../image/play.svg";
import left from "../image/left.svg";
import right from "../image/right.svg";
import undo from "../image/undo.svg";


class Pomodoro extends Component {
    render() {
        if (this.props.play === true) {
            let url = <button onClick={this.props.undoTime}>                            
                        <i class="fa fa-undo fa-2x" aria-hidden="true"></i>
                      </button>
                    
        }

        return (
           
             <div className="header">
                  <h2 className="pomo">Pomodoro Clock</h2>
                  
                 <div className="circle">
                     <div className="circle1">
                        <div className="circle2">
                            <div className="timeout">
                                <div className="session">
                                        <h3>Session</h3>
                                </div>        
                                <div className="time">
                                    <h3>{this.props.time.m} : {this.props.time.s}</h3>
                                </div>

                            </div>

                        </div>
                     </div>
                 </div>
                 <div className="break">
                     <div className="breakLength">
                         <div className="breakleng1">
                                <h2>Break Length</h2>
                             <div className="timeout1">
                                <button className="lr" onClick={this.props.preBreakLength}>
                                    <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                                </button>
                                    <span>  {this.props.breakLength}   </span>
                                <button className="lr" onClick={this.props.nextBreakLength}>
                                    <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                                </button>
                                
                             </div> 
                                
                         </div>
                         
                     </div>
                     <div className="sessionLength">
                     <h2>Session Length</h2>

                         <div className="timeout1">
                                <button  className="lr" onClick={this.props.preSessionLength}>
                                    <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                                </button>
                                <span> 
                                     {this.props.sessionLength}
                                     
                                  </span>
                                <button className="lr" onClick={this.props.nextSessionLength}>
                                    <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                                </button>
                                    
                             </div>    
                     </div>

                 </div>

                 <div className="icon">
                     <div className="play">

                        { this.props.play && <button className="lr" onClick={this.props.startTimer}>
                            <i class="fa fa-play fa-2x" aria-hidden="true"></i>
                        </button> }  

                          { !this.props.play && <button className="lr" onClick={this.props.pause}>
                          <i class="fa fa-pause fa-2x" aria-hidden="true"></i>
                        </button> }                     
                     </div>
                     <div className="play">
                         
                         <button className="lr" onClick={this.props.undoTime}>                            
                            <i class="fa fa-undo fa-2x" aria-hidden="true"></i>
                        </button>
                     </div>
                 </div>
             </div>
        )
    }
}

export default Pomodoro;
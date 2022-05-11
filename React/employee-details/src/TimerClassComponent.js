import React from "react";

export class TimerClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTime: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        }

        setInterval(() => {
            this.setState({
                currentTime: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Current Time is: {this.state.currentTime}</h1>
            </div>
        )
    }
    
}
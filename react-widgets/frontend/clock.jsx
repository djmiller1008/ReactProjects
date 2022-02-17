import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    tick() {
        this.setState({ time: new Date() })
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <div className="datetime"> 
                    <section className="clock">
                        <p>Time:</p>
                        <p>{[this.state.time.getHours(),
                            this.state.time.getMinutes(),
                            this.state.time.getSeconds()].map(v => 
                            v.toString().padStart(2, '0')).join(":")}</p>
                    </section>
                    <section className="date">
                        <p>Date:</p>
                        <p>{this.state.time.toDateString()}</p>
                    </section>
                </div>
            </div>
            
           
            
            
           
        )
    }
}

export default Clock;

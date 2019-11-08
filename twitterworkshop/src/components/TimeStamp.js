import React, { Component } from 'react';

class TimeStamp extends Component {
    render() {
        return  <span className="time">{this.props.date}</span>
    }
}

export default TimeStamp;
import React, { Component } from 'react';

function formatDate(date){
    return date.toLocalDateString();
}

class TimeStamp extends Component {
    render() {
        return  <span className="time">{formatDate(this.props.time)}</span>
    }
}

export default TimeStamp;
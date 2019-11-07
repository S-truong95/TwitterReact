import React, { Component } from 'react';

class Username extends Component {
    render() {
        return <span className="handle">@{this.props.author.handle}</span>
    }
}

export default Username;
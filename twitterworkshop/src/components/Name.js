import React, { Component } from 'react';

class Name extends Component {
    render() {
        return <span className="name">{this.props.author.name}</span>
    }
}

export default Name;
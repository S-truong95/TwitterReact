import React, { Component } from 'react';

class Header extends Component {
    // render() {
    //     return (
    //         <div>
    //             hello, {this.props.name}
    //         </div>
    //     );
    // }

    constructor() {
        super(props);

        this.state = {
            species: [],
            fetch: false,
            loading: false
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        })

        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    species: response.results,
                    loading: true,
                    fetched: true
                })
            })
    }

    render() {
        return <div>hello, {this.props.name}</div>
    }
}



export default Header;
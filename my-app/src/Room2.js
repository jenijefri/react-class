import React, { Component } from 'react';

class Room2 extends Component {
    state = {
        car: '5000' ,bike:'3000'
    };
    render() {
        return (
            <div>
                This is class demo
                {this.props.car}
                {this.props.bike}
                <button onClick={() => this.setState({ car: '267' })}>Change Car Price</button>
                THE CAR PRICE IS {this.state.car}
                <button onClick={() => this.setState({ bike: '26789' })}>Change Bike Price</button>
                The Bike price is {this.state.bike}
            </div>
        );
    }
}

export default Room2;
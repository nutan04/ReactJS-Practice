import React, { Component } from 'react'

export class Constructor extends Component {
    //     Initial State: Initialize the component's state.
    // Event Binding: Bind event handlers to the component instance.
    // Props Initialization: Initialize state based on props.

    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            count: props.initialCount || 0
        };
        // Bind event handlers
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Constructor
import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Constructor: Initializing state and binding methods');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps: Syncing state with props if needed');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: Component has mounted');
        // Example of side effect: fetching data
        // fetch('api/data').then(...);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Deciding if the component should re-render');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Capturing some information before the update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component has updated');
        // Example of side effect
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Cleaning up before the component is destroyed');
        // Cleanup code: remove event listeners, cancel fetch requests, etc.
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('Render: Returning JSX to render');
        return (
            <div>
                <h1>Lifecycle Methods Demo</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default LifecycleDemo;

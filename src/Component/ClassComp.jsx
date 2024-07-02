import React, { Component } from 'react'

export default class ClassComp extends Component {
    render() {
        return (
            <div>This is class component {this.props.name} {this.props.sirname}</div>
        )
    }
}

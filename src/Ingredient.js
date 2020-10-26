import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
        <div className='flex-row'><input type="checkbox" /><label>{this.props.ingredient}</label></div>
        )
    }
}

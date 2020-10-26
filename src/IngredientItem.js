import React, { Component } from 'react'
import Data from './Data.js';

export default class IngredientItem extends Component {
    render() {
        return (
        <div className='flex-row'><input type="checkbox" /><label>{this.props.amount}{this.props.name}</label></div>
        )
    }
}
import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js';
import data from './Data.js';

export default class IngredientList extends Component {
    render() {
        return (
        <div id='bullet-area'>
            <div id = 'left-list' className='flex-column'>
            {data.map(item => {
                if (item.column === 'left'){
                    return <IngredientItem amount = {item.amount} name = {item.name}/>
                }
            })}
            </div>
            <div id = 'right-list' className='flex-column'>
            {data.map(item => {
                if (item.column === 'right'){
                    return <IngredientItem amount = {item.amount} name = {item.name}/>
                }
            })}
            </div>
        </div>
        )
    }
}
import React, { Component } from 'react'
import Ingredient from './Ingredient.js';

export default class IngredientList extends Component {
    render() {
        return (
        <div id='bullet-area'>
            <div id = 'left-list' className='flex-column'>
                <Ingredient ingredient=' 1 1/2 cups milk' />
                <Ingredient ingredient=' 1/2 cup mascarpone' />
                <Ingredient ingredient=' 1/2 tsp pink salt' />
                <Ingredient ingredient=' 1 lb Black Mission Figs' />
                <Ingredient ingredient=' 1/2 cup brown sugar' />
                <Ingredient ingredient=' 2-4 tbsp water' />
            </div>
            <div id = 'right-list' className='flex-column'>
                <Ingredient ingredient=' 1 1/2 cups heavy cream' />
                <Ingredient ingredient=' 1/3 cup granulated sugar' />
                <Ingredient ingredient=' 2 egg yolks' />
                <Ingredient ingredient=' 1 lemon, juiced' />
                <Ingredient ingredient=' 2 tbsp butter' />
                <Ingredient ingredient=' 1 cup honey roasted pecans, roughly chopped' />
            </div>
        </div>
        )
    }
}

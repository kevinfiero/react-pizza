import React, { Component } from 'react'
import print from './assets/print-icon.png';
import choco from './assets/choco-pizza.png';
import van from './assets/van-pic.png';
import IngredientList from './IngredientList.js';

export default class Body extends Component {
    render() {
        return (
        <>
            <main>
                <div id='body-top'>
                    <div>
                        <h1 id='choco-text'>Chocolate Pizza</h1>
                        <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
                    </div>
                    <div id='print-icon'>
                        <img id='print-img' src={print} alt='print' />
                        <h2 id='print'>PRINT</h2>
                    </div>
                </div>
                <div>
                    <img id='choco-pizza' src={choco} alt='choco' />
                    <p>
                        For the fig-swirl: Melt butter over medium heat in a saucepan. 
                        Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                    </p>
                    <p>
                        Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cool.
                    </p>
                    <p>
                        Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish, or glass tupperware. Freeze for at least two hours before serving.
                    </p>
                    <IngredientList />
                </div>
            </main>
                <div className = 'img-rep'>
                </div>
                <div id='body-bottom'>
                    <img id = 'van-img' src={van} alt='van-pic' />
                    <div id='van-text'>
                        <h3 id='name'>Vanessa Stevenson</h3>
                        <h3>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</h3>
                    </div>
                    <button>SHARE RECIPE</button>
                </div>
        </>
        )
    }
}

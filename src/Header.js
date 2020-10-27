import React,  {Component}  from 'react'
import logo from './assets/logo.png';
import ButtonList from './ButtonList.js';

export default class Header extends Component {
    render() {
        return (
            <>
            <header>
                <div id='header-left'>
                    <img id='header-img' src={logo} alt=''/>
                    <div id='header-text'>
                        <h1 id='delicious'>Delicious</h1>
                        <h4>THE BEST FOOD BLOG ON THE WEB.</h4>
                    </div>
                </div>
                <ButtonList />
            </header>
            <div className = 'img-rep' />
            </>
        )
    }
}


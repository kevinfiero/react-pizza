import React,  {Component}  from 'react'
import logo from './assets/logo.png';
import fb from './assets/fb-icon.png';
import twit from './assets/twit-icon.png';
import gp from './assets/gp-icon.png';
import insta from './assets/insta-icon.png';
import flic from './assets/flic-icon.png';
import pint from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div id='header-left'>
                    <img id='header-img' src={logo} alt=''/>
                    <div id='header-text'>
                        <h1 id='delicious'>Delicious</h1>
                        <h4>THE BEST FOOD BLOG ON THE WEB.</h4>
                    </div>
                </div>
                <div id='header-icons'>
                    <img src={fb} alt='fb'/>
                    <img src={twit} alt='twit'/>
                    <img src={gp} alt='gp'/>
                    <img src={insta} alt='insta'/>
                    <img src={flic} alt='flic'/>
                    <img src={pint} alt='pint'/>
                    <img src={rss} alt='rss'/>
                    <img src={mail} alt='mail'/>
                </div>
            </header>

        )
    }
}


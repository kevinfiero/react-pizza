import React, { Component } from 'react'
import logo from './assets/small-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <fieldset>
                <legend><img id='img-bottom' src={logo} alt='sm-logo' /></legend>
                <div>
                    <h3>Delicious © 2013 · All Rights Reserved.</h3>
                    <h3>Proudly published with Ghost.</h3>
                </div>
            </fieldset>
        )
    }
}

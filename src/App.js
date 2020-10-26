import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
     <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
     </>
    )
  }
}
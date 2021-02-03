import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer";
import Login from "./Login/Login";

import { BrowserRouter } from 'react-router-dom';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "Sam" };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} 
                title={this.state.title} 
                changeTitle={this.changeTitle.bind(this)}/>
        <h1>Rello React!!!</h1>
        <p>Oh Yeah!!</p>
        <Login/>
        <Footer/>
      </div>
    );
  }
}
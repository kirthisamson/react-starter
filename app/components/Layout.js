import React from "react";

import Header from "./Header";
import Footer from "./Footer";

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
        <Footer/>
      </div>
    );
  }
}
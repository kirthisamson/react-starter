import React from "react";

import Title from "./Title";

export default class Header extends React.Component {
  handleChange(e){
    const tit = e.target.value;
    this.props.changeTitle(tit);
  }
  
  render() {
    return (
      <div>
        <Title title={this.props.title}/>
        <h1>Welcome {this.props.name}</h1>
        <input onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
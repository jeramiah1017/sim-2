import React, { Component } from "react";

export default class House extends Component {
  render() {
    return (
      <div>
        <hr/>
        <img src={this.props.el.img} alt=''/>
        <ul>
          <li>{this.props.el.name}</li>
          <li>{this.props.el.address}</li>
          <li>{this.props.el.city}</li>
          <li>{this.props.el.state}</li>
          <li>{this.props.el.zipcode}</li>
          <li>{this.props.el.mortgage}</li>
          <li>{this.props.el.rent}</li>
          
        </ul>
        <button onClick={() => this.props.deleteHouse(this.props.el.id)}>delete</button>
        <hr/>
      </div>
    );
  }
}

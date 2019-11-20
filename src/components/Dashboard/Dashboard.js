import React, { Component } from "react";
import House from "./House";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/houses")

      .then(res => {
        this.setState({
          listings: res.data
        });
        console.log(res.data);
      });
  }
  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`)
    .then(res => {
    this.setState({
      listing: res.data
    })
    })
    .catch(error => {console.log('delete not working', error)})
  }

  render() {
  const listing = this.state.listings.map(el => (
          <House key={el.id} el={el} deleteHouse={this.deleteHouse} />
        ))
    return (
      <div>
        <div>
        <h1>Dashboard</h1>
        {listing}
        </div>
      </div>
    );
  }
}

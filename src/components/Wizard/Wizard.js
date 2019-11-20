import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { stepOne } from "../../ducks/reducer";
class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: '',

      rent: 0,
      mortgage: 0
    };
    //   this.handleInputChange = this.handleInputChange.bind(this)
    //   this.cancelHouse = this.cancelHouse.bind(this)
    //   this.createHouse = this.createHouse.bind(this)
    //   this.handleAddress = this.handleAddress.bind(this)
    //   this.handleCity = this.handleCity.bind(this)
    //   this.handleState = this.handleState.bind(this)
    //   this.handleZip = this.handleZip.bind(this)
  }
  componentDidMount() {
    const { name, address, city, state, zipcode } = this.props;
    this.setState({ name, address, city, state, zipcode });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state)
  };
  //     handleName (newName) {
  //         this.setState({
  //             name: newName.target.value
  //         })
  //     }
  //     handleAddress(value) {
  //         this.setState({
  //             name: value

  //         })
  //     }
  //     handleCity(value) {
  //         this.setState({
  //             name: value
  //         })
  //     }
  //     handleState(value) {
  //         this.setState({
  //             name: value
  //         })
  //     }
  //     handleZip(value) {
  //         this.setState({
  //             name: value
  //         })
  //     }
  cancelHouse() {
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      placeholder: ""
    });
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
    document.getElementById("textfield3").value = "";
    document.getElementById("textfield4").value = "";
    document.getElementById("textfield5").value = "";
  }

  render() {
    return (
      <div>
        <div>
          <input
            id="textfield1"
            placeholder="property name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          ></input>
          <input
            id="textfield2"
            placeholder="address"
            name="address"
            onChange={this.handleInputChange}
            value={this.state.address}
          ></input>
          <input
            id="textfield3"
            placeholder="city"
            name="city"
            onChange={this.handleInputChange}
            value={this.state.city}
          ></input>
          <input
            id="textfield4"
            placeholder="state"
            name="state"
            onChange={this.handleInputChange}
            value={this.state.state}
          ></input>
          <input
            type="number"
            id="textfield5"
            placeholder="zipcode"
            name="zipcode"
            onChange={this.handleInputChange}
            value={this.state.zipcode}
          ></input>
          <button onClick={this.cancelHouse}>Cancel</button>
          <button onClick={() => this.props.stepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zipcode)}>
            <Link to="wiz2">Next</Link>
          </button>
        </div>
      </div>

      // <div>
      //    <div>
      //        <input placeholder='name' onChange={newName => this.handleName(newName).bind(this)}
      //       />
      //        <input placeholder='address' onChange={event => this.handleAddress(event.target.value)}
      //           />
      //        <input placeholder='city' onChange={event => this.handleCity(event.target.value)}
      //         />
      //        <input placeholder='state' onChange={event => this.handleState(event.target.value)}
      //          />
      //        <input type='number' placeholder='zip' onChange={event => this.handleZip(event.target.value)}
      //           />
      //    </div>
      // </div>
    );
  }
}
function mapStateToProps(reduxState) {
    const { name, address, city, state, zipcode } = reduxState;
    return {
        name,
        address,
        city, 
        state, 
        zipcode
    }
  }
  
  const mapDispatchToProps = {
    stepOne
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wizard);

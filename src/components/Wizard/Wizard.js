import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode: 0
        }
  this.handleInputChange = this.handleInputChange.bind(this)
  this.cancelHouse = this.cancelHouse.bind(this)
//   this.handleAddress = this.handleAddress.bind(this)
//   this.handleCity = this.handleCity.bind(this)
//   this.handleState = this.handleState.bind(this)
//   this.handleZip = this.handleZip.bind(this)
    }
    handleInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }
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
            name: '',
            address:'',
            city:'',
            state:'',
            zipcode: 0,
            placeholder:''
        })
        document.getElementById('textfield1').value = "";
        document.getElementById('textfield2').value = "";
        document.getElementById('textfield3').value = "";
        document.getElementById('textfield4').value = "";
        document.getElementById('textfield5').value = "";

    }
createHouse = () => {
axios.post('/api/Houses', {
name: this.state.name,
address: this.state.address,
city: this.state.city,
state: this.state.state,
zipcode: this.state.zipcode  
   })
}
    


    render() {
        return (
            <div>
                <div>
                <input id="textfield1" placeholder='property name'  onChange={this.handleInputChange} value={this.props.name}></input>
                <input id="textfield2" placeholder='address' onChange={this.handleInputChange} value={this.props.address}></input>
                <input id="textfield3" placeholder='city' onChange={this.handleInputChange} value={this.props.city}></input>
                <input id="textfield4" placeholder='state' onChange={this.handleInputChange} value={this.props.state}></input>
                <input type="number" id="textfield5" placeholder='zipcode' onChange={this.handleInputChange} value={this.props.zipcode}></input>
                <button onClick={this.cancelHouse}>Cancel</button>
                <button onClick={() => this.createHouse}><Link to="/">Complete</Link></button>

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
        )
    }
}

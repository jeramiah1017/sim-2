  
import React, { Component } from "react";
import { Link } from "react-router-dom";

// React Redux
import { connect } from "react-redux";
import { stepTwo } from "../../ducks/reducer";

class StepTwo extends Component {
  constructor() {
    super();

    this.state = {
      img: ""
    };
  }

  componentDidMount() {
    const { img } = this.props;
    this.setState({ img });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { img } = this.state;
    return (
      <div>
        <h1>Wizard</h1>
        <input
          type="text"
          name="img"
          value={this.state.img}
          placeholder="img URL"
          onChange={this.handleChange}
        />
        <Link to="/wiz1">
          <button onClick={() => this.props.stepTwo(img)}>Previous</button>
        </Link>
        <Link to="/wiz3">
          <button onClick={() => this.props.stepTwo(img)}>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { img } = reduxState;
  return {
    img
  };
}


export default connect(
  mapStateToProps,
  {stepTwo}
)(StepTwo);
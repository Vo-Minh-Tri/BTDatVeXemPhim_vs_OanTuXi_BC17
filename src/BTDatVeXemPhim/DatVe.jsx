import React, { Component } from "react";

export default class DatVe extends Component {
  render() {
    return (
      <div className="container text-left">
        <h5 style={{ color: "orange" }}>
          Fill The Required Details Below And Select Your Seats
        </h5>
        <div className="row my-4">
          <div className="col-6">
            <div className="form-group">
              <p className="text-white mb-1">Name</p>
              <input className="form-control" id="name" type="text" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p className="text-white mb-1">Number of Seats</p>
              <input
                className="form-control"
                id="numberOfSeats"
                type="number"
                required
                min="0"
              />
            </div>
          </div>
        </div>
        <button className="btn">Start Selecting</button>
        <div className="my-4">
          <span className="smallbox greenbox text-white mr-4">Selected Seat</span>
          <span className="smallbox redbox text-white mr-4">Reserved Seat</span>
          <span className="smallbox emptybox text-white">Empty Seat</span>
        </div>
      </div>
    );
  }
}

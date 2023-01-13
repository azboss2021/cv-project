import React, { Component } from "react";

export default class InfoForm extends Component {
  HandleChange = (e, type) => {
    switch (type) {
      case "name":
        this.props.setInfo({ ...this.props.info, name: e.target.value });
        break;
      case "email":
        this.props.setInfo({ ...this.props.info, email: e.target.value });
        break;
      case "phone":
        this.props.setInfo({ ...this.props.info, phone: e.target.value });
        break;
      case "address":
        this.props.setInfo({ ...this.props.info, address: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="form">
        <div>
          <label htmlFor="form_name">Name</label>
          <input
            onChange={(e) => this.HandleChange(e, "name")}
            id="form_name"
          ></input>
        </div>
        <div>
          <label htmlFor="form_address">Address</label>
          <input
            onChange={(e) => this.HandleChange(e, "address")}
            id="form_address"
          ></input>
        </div>
        <div>
          <label htmlFor="form_phone">Phone</label>
          <input
            onChange={(e) => this.HandleChange(e, "phone")}
            id="form_phone"
          ></input>
        </div>
        <div>
          <label htmlFor="form_email">Email</label>
          <input
            onChange={(e) => this.HandleChange(e, "email")}
            id="form_email"
          ></input>
        </div>
      </div>
    );
  }
}

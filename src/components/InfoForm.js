import React, { Component } from 'react';

export default class InfoForm extends Component {
  HandleChange = (e, type) => {
    switch (type) {
      case 'name':
        this.props.setInfo({
          name: e.target.value,
          email: this.props.info.email,
          phone: this.props.info.phone,
          address: this.props.info.address,
        });
        break;
      case 'email':
        this.props.setInfo({
          name: this.props.info.name,
          email: e.target.value,
          phone: this.props.info.phone,
          address: this.props.info.address,
        });
        break;
      case 'phone':
        this.props.setInfo({
          name: this.props.info.name,
          email: this.props.info.email,
          phone: e.target.value,
          address: this.props.info.address,
        });
        break;
      case 'address':
        this.props.setInfo({
          name: this.props.info.name,
          email: this.props.info.email,
          phone: this.props.info.phone,
          address: e.target.value
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="form" >
        <label htmlFor="form_name">Name</label>
        <input
          onChange={(e) => this.HandleChange(e, 'name')}
          id="form_name"
        ></input>
        <label htmlFor="form_address">Address</label>
        <input
          onChange={(e) => this.HandleChange(e, 'address')}
          id="form_address"
        ></input>
        <label htmlFor="form_phone">Phone</label>
        <input
          onChange={(e) => this.HandleChange(e, 'phone')}
          id="form_phone"
        ></input>
        <label htmlFor="form_email">Email</label>
        <input
          onChange={(e) => this.HandleChange(e, 'email')}
          id="form_email"
        ></input>
      </div>
    );
  }
}

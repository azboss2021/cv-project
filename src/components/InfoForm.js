import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';

export default class InfoForm extends Component {
  HandleChange = (e, type) => {
    switch (type) {
      case 'firstName':
        this.props.setInfo({
          firstName: e.target.value,
          lastName: this.props.info.lastName,
          email: this.props.info.email,
          phone: this.props.info.phone,
        });
        break;
      case 'lastName':
        this.props.setInfo({
          firstName: this.props.info.firstName,
          lastName: e.target.value,
          email: this.props.info.email,
          phone: this.props.info.phone,
        });
        break;
      case 'email':
        this.props.setInfo({
          firstName: this.props.info.firstName,
          lastName: this.props.info.lastName,
          email: e.target.value,
          phone: this.props.info.phone,
        });
        break;
      case 'phone':
        this.props.setInfo({
          firstName: this.props.info.firstName,
          lastName: this.props.info.lastName,
          email: this.props.info.email,
          phone: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="form_first">First Name</label>
        <input
          onChange={(e) => this.HandleChange(e, 'firstName')}
          id="form_first"
          name="form_first"
        ></input>
        <label htmlFor="form_last">Last Name</label>
        <input
          onChange={(e) => this.HandleChange(e, 'lastName')}
          id="form_last"
          name="form_last"
        ></input>
        <label htmlFor="form_email">Email</label>
        <input
          onChange={(e) => this.HandleChange(e, 'email')}
          id="form_email"
          name="form_email"
        ></input>
        <label htmlFor="form_phone">Phone</label>
        <input
          onChange={(e) => this.HandleChange(e, 'phone')}
          id="form_phone"
          name="form_phone"
        ></input>
      </form>
    );
  }
}

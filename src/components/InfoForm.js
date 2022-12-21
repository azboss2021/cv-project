import React, { Component } from 'react';

export default class InfoForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="form_first">First Name</label>
        <input id="form_first" name="form_first"></input>
        <label htmlFor="form_last">Last Name</label>
        <input id="form_last" name="form_last"></input>
        <label htmlFor="form_email">Email</label>
        <input id="form_email" name="form_email"></input>
        <label htmlFor="form_phone">Phone</label>
        <input id="form_phone" name="form_phone"></input>
      </form>
    );
  }
}

import React, { Component } from 'react';

export default class EducationForm extends Component {
  HandleChange = (e, type) => {
    const educations = [].concat(this.props.educations);

    const i = educations.findIndex(
      (education) => education.id === e.target.id.slice(-8)
    );

    switch (type) {
      case 'school':
        educations[i].school = e.target.value;
        break;
      case 'degree':
        educations[i].degree = e.target.value;
        break;
      case 'dateStart':
        educations[i].dateStart = e.target.value;
        break;
      case 'dateEnd':
        educations[i].dateEnd = e.target.value;
        break;
      case 'details':
        educations[i].details = e.target.value;
        break;
      default:
        break;
    }

    this.props.setEducations(educations);
  };

  HandleDelete = (e) => {
    e.preventDefault();
    this.props.setEducations(this.props.educations.filter(education => education.id !== e.target.id.slice(-8)))
  };

  render() {
    return (
      <form key={'form_education' + this.props.id}>
        <label htmlFor={'form_school' + this.props.id}>School</label>
        <input
          onChange={(e) => this.HandleChange(e, 'school')}
          id={'form_school' + this.props.id}
        ></input>
        <label htmlFor={'form_degree' + this.props.id}>Degree</label>
        <input
          onChange={(e) => this.HandleChange(e, 'degree')}
          id={'form_degree' + this.props.id}
        ></input>
        <label htmlFor={'form_date_start' + this.props.id}>Date Start</label>
        <input
          onChange={(e) => this.HandleChange(e, 'dateStart')}
          id={'form_date_start' + this.props.id}
        ></input>
        <label htmlFor={'form_date_end' + this.props.id}>Date End</label>
        <input
          onChange={(e) => this.HandleChange(e, 'dateEnd')}
          id={'form_date_end' + this.props.id}
        ></input>
        <label htmlFor={'form_details_education' + this.props.id}>Details</label>
        <input onChange={(e) => this.HandleChange(e, 'details')} type="text" id={'form_details_education' + this.props.id}></input>
        <button id={'education_delete' + this.props.id} onClick={(e) => this.HandleDelete(e)}>Delete</button>
      </form>
    );
  }
}

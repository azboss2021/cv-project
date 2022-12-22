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
      case 'yearStart':
        educations[i].yearStart = e.target.value;
        break;
      case 'yearEnd':
        educations[i].yearEnd = e.target.value;
        break;
      default:
        break;
    }

    this.props.setEducations(educations);
  };

  HandleDelete = (e) => {
    e.preventDefault();
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
        <label htmlFor={'form_year_start' + this.props.id}>Year Start</label>
        <input
          onChange={(e) => this.HandleChange(e, 'yearStart')}
          id={'form_year_start' + this.props.id}
        ></input>
        <label htmlFor={'form_year_end' + this.props.id}>Year End</label>
        <input
          onChange={(e) => this.HandleChange(e, 'yearEnd')}
          id={'form_year_end' + this.props.id}
        ></input>
        <button onClick={(e) => this.HandleDelete(e)}>Delete</button>
      </form>
    );
  }
}

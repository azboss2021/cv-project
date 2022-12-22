import React, { Component } from 'react';
import EducationForm from './EducationForm';
import uniqid from 'uniqid';
import WorkForm from './WorkForm';
import InfoForm from './InfoForm';

export default class Form extends Component {
  AddEducation = () => {
    this.props.setEducations((educations) =>
      educations.concat({
        school: '',
        degree: '',
        yearStart: '',
        yearEnd: '',
        id: uniqid(),
      })
    );
  };

  AddWork = () => {
    this.props.setWorks((works) =>
      works.concat({
        workplace: '',
        title: '',
        yearStart: '',
        yearEnd: '',
        id: uniqid(),
      })
    );
  };

  SubmitInfo = (e) => {
    e.preventDefault();

    const first = document.querySelector('#form_first');
    const last = document.querySelector('#form_last');
    const email = document.querySelector('#form_email');
    const phone = document.querySelector('#form_phone');

    this.props.setInfo({
      first: first.value,
      last: last.value,
      email: email.value,
      phone: phone.value,
    });
  };

  render() {
    return (
      <div id="form">
        <InfoForm info={this.props.info} setInfo={this.props.setInfo} />

        {this.props.educations.map((education) => {
          return (
            <div key={education.id}>
              <EducationForm
                id={education.id}
                educations={this.props.educations}
                setEducations={this.props.setEducations}
              />
              <hr></hr>
            </div>
          );
        })}

        <button onClick={this.AddEducation}>Add Educational Experience</button>

        {this.props.works.map((work) => {
          return (
            <div key={work.id}>
              <WorkForm
                id={work.id}
                works={this.props.works}
                setWorks={this.props.setWorks}
              />
              <hr></hr>
            </div>
          );
        })}

        <button onClick={this.AddWork}>Add Work Experience</button>
        <button onSubmit={(e) => this.SubmitInfo(e)}>Submit</button>
      </div>
    );
  }
}

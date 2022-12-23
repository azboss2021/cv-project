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
        dateStart: '',
        dateEnd: '',
        details: '',
        id: uniqid(),
      })
    );
  };

  AddWork = () => {
    this.props.setWorks((works) =>
      works.concat({
        workplace: '',
        title: '',
        dateStart: '',
        dateEnd: '',
        details: '',
        id: uniqid(),
      })
    );
  };

  render() {
    return (
      <div id="form">
        <div className="form_section_title">General Information:</div>
        <InfoForm info={this.props.info} setInfo={this.props.setInfo} />

        <div className="form_section_title">Educational Experiences:</div>
        {this.props.educations.map((education) => {
          return (
              <EducationForm
                key={education.id}
                id={education.id}
                educations={this.props.educations}
                setEducations={this.props.setEducations}
              />
          );
        })}
        <button onClick={this.AddEducation}>Add Educational Experience</button>

        <div className="form_section_title">Practical Experiences:</div>
        {this.props.works.map((work) => {
          return (
            <WorkForm
              key={work.id}
              id={work.id}
              works={this.props.works}
              setWorks={this.props.setWorks}
            />
          );
        })}

        <button onClick={this.AddWork}>Add Work Experience</button>
      </div>
    );
  }
}

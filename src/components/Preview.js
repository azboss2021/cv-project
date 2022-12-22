import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div id="preview">
        <div id="preview_info">
        <div>{this.props.info.firstName} {this.props.info.lastName}</div>
        <div>{this.props.info.email}</div>
        <div>{this.props.info.phone}</div>
        </div>

        <div className="preview_section_title">Educational Experience</div>
        {this.props.educations.map((education) => {
          return (
            <div key={'preview_education' + education.id}>
              <div>School: {education.school}</div>
              <div>Degree: {education.degree}</div>
              <div>{education.yearStart} - {education.yearEnd}</div>
              <hr></hr>
            </div>
          );
        })}

        <div className=".preview_section_title">Practical Experience</div>
        {this.props.works.map((work) => {
          return (
            <div key={'preview_work' + work.id}>
              <div>Workplace: {work.workplace}</div>
              <div>Title: {work.title}</div>
              <div>{work.yearStart} - {work.yearEnd}</div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div id="preview">
        <div id="preview_info">
          <div id="name">{this.props.info.name}</div>
          <div id="info_details">
            <span id="address">{this.props.info.address}</span>
            <span> * </span>
            <span id="phone">{this.props.info.phone}</span>
            <span> * </span>
            <span id="email">{this.props.info.email}</span>
          </div>
        </div>

        <div id="preview_education">
          {this.props.educations.length > 0 && <div className="preview_section_title">EDUCATION</div>}
          <hr></hr>
          <div id="educations">
            {this.props.educations.map((education) => {
              return (
                <div className="education" key={'preview_education' + education.id}>
                  <div className="left">{education.dateStart} — {education.dateEnd}</div>
                  <div className="right">
                    <div className="school">{education.school}</div>
                    <div>{education.degree}</div>
                    <div>{education.details}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="preview_work">
          {this.props.works.length > 0 && <div className="preview_section_title">WORK EXPERIENCE</div>}
          <hr></hr>
          <div id="works">
            {this.props.works.map((work) => {
              return (
                <div className="work" key={'preview_work' + work.id}>
                  <div className="left">{work.dateStart} — {work.dateEnd}</div>
                  <div className="right">
                    <div>{work.title}</div>
                    <div className="workplace">{work.workplace}</div>
                    <div>{work.details}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class WorkForm extends Component {
  HandleChange = (e, type) => {
    const works = [].concat(this.props.works);

    const i = works.findIndex((work) => work.id === e.target.id.slice(-8));

    switch (type) {
      case 'school':
        works[i].workplace = e.target.value;
        break;
      case 'degree':
        works[i].title = e.target.value;
        break;
      case 'yearStart':
        works[i].yearStart = e.target.value;
        break;
      case 'yearEnd':
        works[i].yearEnd = e.target.value;
        break;
      default:
        break;
    }

    this.props.setWorks(works);
  };

  render() {
    return (
      <form key={'form_work' + this.props.id}>
        <label htmlFor={'form_workplace' + this.props.id}>Workplace</label>
        <input
          onChange={(e) => this.HandleChange(e, 'workplace')}
          id={'form_workplace' + this.props.id}
        ></input>
        <label htmlFor={'form_title' + this.props.id}>Title</label>
        <input
          onChange={(e) => this.HandleChange(e, 'title')}
          id={'form_title' + this.props.id}
        ></input>
        <label htmlFor={'form_year_start_work' + this.props.id}>
          Year Start
        </label>
        <input
          onChange={(e) => this.HandleChange(e, 'yearStart')}
          id={'form_year_start_work' + this.props.id}
        ></input>
        <label htmlFor={'form_year_end_work' + this.props.id}>Year End</label>
        <input
          onChange={(e) => this.HandleChange(e, 'yearEnd')}
          id={'form_year_end_work' + this.props.id}
        ></input>
      </form>
    );
  }
}

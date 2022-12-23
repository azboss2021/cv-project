import React, { Component } from 'react';

export default class WorkForm extends Component {
  HandleChange = (e, type) => {
    const works = [].concat(this.props.works);

    const i = works.findIndex((work) => work.id === e.target.id.slice(-8));

    switch (type) {
      case 'workplace':
        works[i].workplace = e.target.value;
        break;
      case 'title':
        works[i].title = e.target.value;
        break;
      case 'dateStart':
        works[i].dateStart = e.target.value;
        break;
      case 'dateEnd':
        works[i].dateEnd = e.target.value;
        break;
      case 'details':
        works[i].details = e.target.value;
        break;
      default:
        break;
    }

    this.props.setWorks(works);
  };

  HandleDelete = (e) => {
    e.preventDefault();
    this.props.setWorks(this.props.works.filter(work => work.id !== e.target.id.slice(-8)))
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
        <label htmlFor={'form_date_start_work' + this.props.id}>Date Start
        </label>
        <input
          onChange={(e) => this.HandleChange(e, 'dateStart')}
          id={'form_date_start_work' + this.props.id}
        ></input>
        <label htmlFor={'form_date_end_work' + this.props.id}>Date End</label>
        <input
          onChange={(e) => this.HandleChange(e, 'dateEnd')}
          id={'form_date_end_work' + this.props.id}
        ></input>
        <label htmlFor={'form_details_work' + this.props.id}>Details</label>
        <input onChange={(e) => this.HandleChange(e, 'details')} type="text" id={'form_details_work' + this.props.id}></input>
        <button id={'work_delete' + this.props.id} onClick={(e) => this.HandleDelete(e)}>Delete</button>
      </form>
    );
  }
}

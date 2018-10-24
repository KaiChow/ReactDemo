import React, { Component } from 'react'
import Header from '../header/Header';

export default class DoctorList extends Component {
  render() {
    const title = "医生列表";
    return (
      <div>
        <Header BarName={title}></Header>
        <p>this is doctor lists page!</p>
      </div>
    )
  }
}

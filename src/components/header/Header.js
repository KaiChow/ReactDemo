
import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import './Header.css';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.goBack = this.goBack.bind(this);
  }


  goBack() {
    window.history.go(-1);
  }
  render() {
    return (
      <NavBar
        mode="dark"
        leftContent="返回"
        onLeftClick={this.goBack}
      >{this.props.BarName}</NavBar>

    )
  }
}

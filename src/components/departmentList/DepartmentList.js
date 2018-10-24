import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $axios from "axios";
import Header from "../header/Header";
import { SearchBar } from 'antd-mobile';
const { List } = require('antd-mobile');
const Item = List.Item;

function ListItem(props) {
  // 对啦！这里不需要指定key:
  return <Item arrow="horizontal">{props.value}</Item>
}
$axios.defaults.baseURL = "http://127.0.0.1:1337/api/v1/public";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    // 又对啦！key应该在数组的上下文中被指定
    return <Link to="/doctor" key={(number.ID + 1).toString()}><ListItem  value={number.KSMC}></ListItem></Link>
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: []
    }
  }


  componentWillMount() {
    $axios.get('/department').then(res => {
      console.log(res);
      var data = res.data.Data.Entity.reverse();
      this.setState({
        obj: data
      })
    });
  }

  render() {
    const title = "科室列表";
    return (
      <div className="department">
        <Header BarName={title}></Header>
        <SearchBar placeholder="Search" maxLength={8} />
        <List className="my-list">
          <NumberList numbers={this.state.obj}></NumberList>

          {/* <Item arrow="horizontal" onClick={() => { }}>Title</Item> */}

          {/* <Item extra="extra content" arrow="horizontal" onClick={() => { }}>Title</Item>
          <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title <Brief>subtitle</Brief>
          </Item> */}
        </List>
      </div>
    )
  }
}

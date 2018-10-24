import React, { Component } from 'react';
import Header from '../header/Header';
import { Input } from 'antd';
const Search = Input.Search;
class Register extends Component {
    onInputSearch(value) {
        console.log("Header");
    }
    searchChange() {

    }
    render() {
        return (
            <div>
                {/* 头部信息 */}
                <Header></Header>
                <Search
                    placeholder="输入科室关键字"
                    onSearch={this.onInputSearch}
                    onChange={this.searchChange}
                    enterButton
                />
            </div>
        )
    }
}
export default Register;

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { white } from 'ansi-colors';

class Button extends Component {
    constructor(props) {
        super(props);
        // this.stateHandle = this.stateHandle.bind(this);
        this.state = {
            count: 0
        }
    }

    /* 定义类型 */
    static propTypes = {
        color: PropTypes.string,
        text: PropTypes.string
    }
    static defaultProps = {
        color: 'blue',
        text: 'Confirm',
    };

    /* 挂载和卸载 */

    componentWillMount() {
        this.setState({
            count: 2
        })
        console.log('componentWillMount......')
    }
    componentDidMount() {
        this.setState({
            count: 3
        })
        this.refs.button.addEventListener("click", e => {
            this.handleClick();
        })
        console.log("componentDidMount......")
    }
    componentWillUnmount() {
        this.refs.button.removeEventListener('click');
        console.log("componentWillUnmount......")
    }

    /* 更新 */
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps......");
        console.log(nextProps)
        this.setState({
            count: 4
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate......");
        console.log(nextProps);
        console.log(nextState);
        return true;

    }
    componentWillUpdate(nextProps, nextState) {
        // ...
        console.log("componentWillUpdate......");
        console.log(nextProps);
        console.log(nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        // ...
        console.log("componentDidUpdate......");
        console.log(prevProps);
        console.log(prevState);
    }

    stateHandle(args) {
        console.log(args);
        this.setState({
            count: this.state.count + 1,
        });
    }
    handleClick() {
        console.log("refs");
    }

    render() {
        const { color } = this.props;
        const style1 = {
            color: 'black',
            padding: '5px 10px',
            fontSize: '16px'
        }
        return (
            <div>
                <p>{this.state.count}</p>
                <button className={`btn btn-${color}`} onClick={this.stateHandle.bind(this, 2)}>更新</button>
                <button className="btn" ref="button">Click Me</button>
                {/* 基本样式的写法 */}
                <p style={style1}>设置行内样式时要使用对象</p>
            </div >

        );
    }
}

export default Button;


import React from 'react';
import {Button, Input} from 'antd';
import "./Input.less";


class InputComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

    render(){
        return (
            <div className="inputBox">
                <Input className="input" 
                    placeholder=""
                    allowClear
                    onPressEnter={this.commit}
                    onChange={this.handleInputChange}
                    value={this.state.value}
                    
                />
                <Button type="primary"
                    onClick={this.addItem}> 添加待办 </Button>
            </div>
        );
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    commit = (e) => {
        this.props.addItem(e.target.value);
        this.setState({
            value: '',
        });
    }

    addItem = () => {
        this.props.addItem(this.state.value);
        this.setState({
            value: '',
        });
    }
}

export default InputComponent;
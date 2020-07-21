import React from 'react';
import './TodoList.less';
import InputComponent from './components/Input';
import ListComponent from './components/List';
import ListItem from './components/ListItem';



class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      list : [
        {
          title: 'test',
          id: 123,
          completed: false
        }
      ],
    }
  }

  addItem = (value) => {
    let listCopy = this.state.list.concat([
      {
        title: value,
        id: Date.now(),
        completed: false,
      }
    ]);
    this.setState({
      list: listCopy
    });
  }

  componentDidMount(){
    document.title = 'todoList';
  }

  componentDidUpdate(){
    console.log("at update ", this.state);
  }

  render() {
    return (
      <div className="todolist">
        <div className="header">
          <span>todoList</span>
        </div>
        <div className="container">
          <div className="inputWrapper">
            <InputComponent addItem={this.addItem}></InputComponent>
          </div>
          <div className="listWrapper">
            <ListComponent list={this.state.list}></ListComponent>
          </div>
        </div>
      </div>
    );
  }
}


export default TodoList;

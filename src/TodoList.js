import React from 'react';
import './TodoList.css';


class TodoList extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.title = 'todoList';
  }

  render() {
    return (
      <div className="TodoList">
        <span className="Title">todoList</span>
        <div className="container">
        </div>
      </div>
    );
  }
}


export default TodoList;

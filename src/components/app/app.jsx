import React, {Component} from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

export default class ToDo extends Component {
  state = {
    todoData: [
      {id: 1, label: 'Drink Coffee', important: false},
      {id: 2, label: 'Make Awesome App', important: true},
      {id: 3, label: 'Have a lunch', important: false},
      {id: 4, label: 'Go to bed', important: true},
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  render() {
    const {todoData} = this.state;

    return (
      <div className="todo-app">
        <AppHeader/>
        <div className="d-flex top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList onDeleted={(id) => this.deleteItem(id)} todos={todoData}/>
      </div>
    )
  }
};

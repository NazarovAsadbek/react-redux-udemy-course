import React, {Component} from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

export default class ToDo extends Component {

  maxId = 100;

  state = {
    todoData: [
      {id: 1, label: 'Drink Coffee', important: false},
      {id: 2, label: 'Make Awesome App', important: true},
      {id: 3, label: 'Have a lunch', important: false},
      {id: 4, label: 'Go to bed', important: true},
    ]
  }

  addToDo = (text) => {
    const newToDo = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData}) => {
      const newTodoData = [
        ...todoData,
        newToDo
      ]

      return {
        todoData: newTodoData
      }
    })
  }

  deleteTodo = (id) => {
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
        <AppHeader toDo={1} done={3}/>
        <div className="d-flex top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList onDeleted={(id) => this.deleteTodo(id)} todos={todoData}/>
        <ItemAddForm addToDo={(newToDo) => this.addToDo(newToDo)}/>
      </div>
    )
  }
};

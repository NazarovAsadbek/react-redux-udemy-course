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
      {id: 1, label: 'Drink Coffee', important: false, done: false},
      {id: 2, label: 'Make Awesome App', important: true, done: false},
      {id: 3, label: 'Have a lunch', important: false, done: false},
      {id: 4, label: 'Go to bed', important: true, done: false},
    ],
    term: '',
    filter: 'all', // active, all, done
  }

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

  toggleProperty(arr, id, propName) {
    // 1. update object
    const index = arr.findIndex((el) => el.id === id);
    const oldTodo = arr[index];
    const newTodo = {...oldTodo, [propName]: !oldTodo[propName]}

    // 2. construct new array
    return [
      ...arr.slice(0, index),
      newTodo,
      ...arr.slice(index + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({term})
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  search(items, term) {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items;
    }
  }

  render() {
    const {todoData, term, filter} = this.state;
    const visibleToDoItems = this.filter(this.search(todoData, term), filter);
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const toDoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <div className="d-flex top-panel">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList
          todos={visibleToDoItems}
          onDeleted={this.deleteTodo}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addToDo={(newToDo) => this.addToDo(newToDo)}/>
      </div>
    )
  }
};

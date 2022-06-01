import React from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

const ToDo = () => {
  const todoData = [
    {id: 1, label: 'Drink Coffee', important: false},
    {id: 2, label: 'Make Awesome App', important: true},
    {id: 3, label: 'Have a lunch', important: false},
    {id: 4, label: 'Go to bed', important: true},
  ]

  return (
    <div className="todo-app">
      <AppHeader/>
      <div className="d-flex top-panel">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData}/>
    </div>
  )
};

export default ToDo;

import React from 'react';
import './item-add-form.css';

const ItemAddForm = ({addToDo}) => {
  return (
    <div className="item-add-form bottom-panel new-todo-label">
      <button
        className="btn btn-outline-secondary"
        onClick={() => addToDo('hello world')}
      >
        Add Item
      </button>
    </div>
  )
}

export default ItemAddForm

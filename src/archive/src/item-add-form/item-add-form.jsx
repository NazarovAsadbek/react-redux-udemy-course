import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e?.target.value || ''
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.label);

    this.onLabelChange()
  }

  render() {
    return (
      <form
        className="item-add-form bottom-panel new-todo-label d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    )
  }
}

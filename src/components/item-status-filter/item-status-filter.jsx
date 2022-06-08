import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {value: 'all', label: 'All'},
    {value: 'active', label: 'Active'},
    {value: 'done', label: 'Done'},
  ];

  render() {
    const {filter, onFilterChange} = this.props

    const buttons = this.buttons.map(({value, label}) => {
      const isActive = filter === value;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={value}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};

import React from 'react';

import './search-panel.css';

const SearchPanel = ({addToDo}) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onClick={() => {
        addToDo()
      }}
    />
  );
};

export default SearchPanel;

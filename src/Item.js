import React, { Component } from 'react';
import request from './data/captain.json';

class Item extends React.PureComponent {
  highlighted(){
    return this.props.highlights.some(str => this.props.charData.name.includes(str));
  }

  render(){
    const highlightClass = this.highlighted() ? 'highlighted' : '';
    const { charData, onClick } = this.props;

    return (
      <li data-testid="result" data-name={charData.name}
        className={`${highlightClass} list-group-item d-flex justify-content-between align-items-center`}>
        <span data-testid="res-name">{charData.name}</span>
        <button
          data-testid="addBtn"
          className="btn btn-primary btn-sm"
          data-id={charData.id}
          onClick={onClick}
        >
          Add
        </button>
      </li>
    )
  }
}

export default Item;

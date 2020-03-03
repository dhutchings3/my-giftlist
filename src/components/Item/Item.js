import React from 'react';
import AppContext from '../../contexts/AppContext'
import './Item.css';

class Item extends React.Component {

  static contextType = AppContext;

  render() {
    if (typeof this.props.item.item_name === undefined) {
      return (
        <div className='giftlist-item'>
        <h2>{this.props.item.items.item_name}</h2>
        <div>
          <img
            src={this.props.item.items.graphic}
            alt='item cover'
          />
        </div>
        <div className='item-link'>
          <p>{this.props.item.items.link}</p>
        </div>
        <button
          className='add-item-button'
          id={this.props.item.id}
          onClick={
            () => {this.props.handleAddToList(this.props.item.id)}
          }
        >
          Add to List
        </button>
        </div>
      );
    }

    return (
      <div className='giftlist-item'>
        <h2>{this.props.item.item_name}</h2>
        <div>
          <img
            src={this.props.item.graphic}
            alt='item cover'
          />
        </div>
        <div className='item-link'>
          <p>{this.props.item.link}</p>
        </div>
        <button
          className='add-item-button'
          id={this.props.item.id}
          onClick={
            () => {this.props.handleAddToList(this.props.item.id)}
          }
        >
          Add to List
        </button>
      </div>
    )
  };
};

export default Item;
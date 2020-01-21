import React from 'react';
import './Item.css';

class Item extends React.Component {

  render() {
    return (
      <div className='list-item'>
        <h2>{this.props.item.item_name}</h2>
        <div>
          <img
            src={this.props.item.graphic}
            alt='item graphic'
          />
        </div>
        <div className='item-link'>
          <p>{this.props.item.link}</p>
        </div>
        <button
          className='add-item-button'
          id={this.props.item.id}
          onClick={
            () => {this.props.handleAddToList(this.props.item.id)
                   alert('Added!')}
          }
        >
          Add to Giftlist
        </button>
      </div>
    )
  };
};

export default Item;
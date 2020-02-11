import React from 'react';
import AppContext from '../../contexts/AppContext'
import './Item.css';

class Item extends React.Component {

  static contextType = AppContext;

  render() {
    // console.log(this.props.item.id)
    // console.log(this.props.item.user_id, 'user id')
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
            () => {this.props.handleAddToList(this.props.item.id)
                   alert('Added!')}
          }
        >
          Add to List
        </button>
      </div>
    )
  };
};

export default Item;
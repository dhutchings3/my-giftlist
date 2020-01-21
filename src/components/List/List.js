import React from 'react';
import TokenService from '../../services/token-service';
import './List.css';

class List extends React.Component {

  render() {
    console.log(TokenService.getUserId())
    console.log(user_id)
    let userId = TokenService.getUserId();
    function filterByUserId(thing) {
      return thing.user_id === Number(userId)
    }
    const userItems = this.props.list.filter(filterByUserId);
    const itemsToDisplay = userItems.map((listItem, i) => {
      return (
        <div key={i} className='displayed-items'>
          console.log(this.props.items)
          <h2>{listItem.items.item_name}</h2>
          <div>
            <img
              src={listItem.items.graphic}
              alt='item graphic'
            />
          </div>
          <div>
            {' '}
            <button
              className='delete-button'
              id={listItem.id}
              onClick={() => this.props.handleRemoveItem(listItem.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h1>Your Giftlist</h1>
        {itemsToDisplay}
      </div>
    )
  }
};

export default List;
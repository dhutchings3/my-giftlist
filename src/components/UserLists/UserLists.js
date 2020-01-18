import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
// import './Lists.css';

class UserLists extends React.Component {

  render() {
    let userId = TokenService.getUserId();
    function filterByUserId(item) {
      return item.user_id === Number(userId)
    }
    const userLists = this.props.lists.filter(filterByUserId);
    const listsToDisplay = userLists.map((lists, i) => {
      return (
        <div key={i} className='displayed-lists'>
          <h2>{lists.name}</h2>
          <h3>item: {lists.name}</h3>
          <div>
            <Link to={{
              pathname: '/listview',
              state: {
                listname: listname,
                list: this.props.list
              }
            }}>
              <button className='add-list-button'>
                Add List
              </button>
            </Link>
            {' '}
            <button
              className='delete-button'
              id={list.id}
              onClick={() => this.props.handleRemoveList(list.id)}
            >
              Delete List
            </button>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h1>Your Lists</h1>
        {listsToDisplay}
      </div>
    )
  }
};

export default UserLists;
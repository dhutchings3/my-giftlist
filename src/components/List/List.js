import React from 'react';
import TokenService from '../../services/token-service';
import config from '../../config';
import AppContext from '../../contexts/AppContext';
import ListApiService from '../../services/list-api-service';
import './List.css';

class List extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list: [],
  //     error: null
  //   }
  // }

  static contextType = AppContext;

  // componentDidMount() {
  // fetch(`${config.API_ENDPOINT}/list`, {
  //   headers: {
  //     'content-type': 'application/json',
  //     'authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //   .then((listRes) => {
  //     if (!listRes.ok) {
  //       throw new Error(listRes.statusText)
  //     }
  //     return listRes.json()
  //   })
  //   .then(items => {
  //     this.setState({
  //       list: items,
  //       error: null
  //     })
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: 'Sorry, could not get items at this time.'
  //     })
  //   })
  // }

  // handleRemoveItem = (id) => {
  //   ListApiService.deleteListItem(id)
  //   let array = [...this.state.list]
  //   let updatedList = array.filter(listItem => {
  //     return listItem.id !== id
  //   })
  //   // console.log(updatedList)
  //   this.setState({ list: updatedList })
  //   // console.log(this.state.list)
  // }

  render() {
    // console.log(this.context.list, 'this.state list')
      const userItems = this.props.list
      console.log(this.props.list)
      const itemsToDisplay = userItems.map((listItem, i) => {
        return (
          <div key={i} className='displayed-items'>
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
import React from 'react';
import AppContext from '../../contexts/AppContext'


class AddNewItem extends React.Component {

    static contextType = AppContext;

    render() {
  
      return (
        <div className='add-new-item'>
          <h2>Add New Item</h2>
          <div className='new-item-link'>
            <label htmlFor='item-link'>Item Url</label>
            <input type='url' name='item-link' id='item-url' required />
          </div>
          <button
            className='add-new-item-button'
            id='add-new-item-link'
            onClick={
              () => {this.props.handleAddNewItem(this.props.url)}
            }
          >
            Add to List
          </button>
        </div>
      )
    };
  };



export default AddNewItem;
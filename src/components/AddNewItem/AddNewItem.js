import React from 'react';
import AppContext from '../../contexts/AppContext'


class AddNewItem extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef()
    }

    static contextType = AppContext;

    render() {
  console.log(this.myRef)
      return (
        <div className='add-new-item'>
          <h2>Add New Item</h2>
          <div className='new-item-link'>
            <label htmlFor='item-link'>Item Url</label>
            <input type='url' name='item-link' id='item-url' ref={this.myRef} required />
          </div>
          <button
            className='add-new-item-button'
            id='add-new-item-link'
            onClick={
              () => {this.props.handleAddNewItem(this.myRef.value)}
            }
          >
            Add to List
          </button>
        </div>
      )
    };
  };



export default AddNewItem;
import React from 'react';
import AppContext from '../../contexts/AppContext';

// function handleClick() {
//   textInput.current.focus()
// }

class AddNewItem extends React.Component {

  static contextType = AppContext;

  render() {
    const textInput = React.createRef()
    function handleClick() {
      textInput.current.focus()
    }
    return (
      <div className='add-new-item'>
        <h2>Add New Item</h2>
        <div className='new-item-link'>
          <label htmlFor='item-link'>Item Url</label>
          <input type='url' name='item-link' id='item-url' ref={textInput} required />
        </div>
        <button
          className='add-new-item-button'
          id='add-new-item-link'
          onClick={
            () => { this.props.handleAddNewItem(handleClick()) }
          }
        >
          Add to List
            </button>
      </div>
    )
  };
};



export default AddNewItem;
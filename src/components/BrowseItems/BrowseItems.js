import React from 'react';
import ItemList from '../ItemList/ItemList';
import AppContext from '../../contexts/AppContext'
import AddNewItem from '../AddNewItem/AddNewItem'

class BrowseItems extends React.Component {

  static contextType = AppContext;

  render() {

    console.log(this.props)
    return (
      <div>
        <h2>Add your own Items</h2>
        <AddNewItem
          handleAddNewItem={this.context.handleAddNewItem}
        />
        <h2>Browse Items Here</h2>
        <ItemList
          items={this.props.items}
          list={this.props.list}
        />
      </div>
    )
  };
};

export default BrowseItems;
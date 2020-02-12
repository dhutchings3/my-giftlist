import React from 'react';
import ItemList from '../ItemList/ItemList';
import AppContext from '../../contexts/AppContext'

class BrowseItems extends React.Component {

  static contextType = AppContext;

  render() {

    console.log(this.props)
    return (
      <div>
        <h1>Browse Items Here</h1>
        <ItemList
          items={this.props.items}
          list={this.props.list}
        />
      </div>
    )
  };
};

export default BrowseItems;
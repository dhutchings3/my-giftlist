import React from 'react';
import ItemList from '../ItemList/ItemList';

class BrowseItems extends React.Component {

  render() {

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
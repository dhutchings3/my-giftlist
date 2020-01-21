import React from 'react';
import TokenService from '../../services/token-service';
import Item from '../Item/Item';
import AppContext from '../../contexts/AppContext';

class ItemList extends React.Component {

  static contextType = AppContext;

  render() {

    let userId = Number(TokenService.getUserId());
    const listThings = this.props.list.filter(thing => {

      return thing.user_id === userId
    });
    const items = this.props.items.filter(thing => {
      const listThingIds = listThings.map(x => x.item_id);

      const exists = listThingIds.includes(thing.id)
      return !exists
    });

    let updatedItems = Object.keys(items).map((item, i) => (
      <Item key={i} id={i} item={items[item]} handleAddToList={this.context.handleAddToList}/>
    ));

    return (
      <div>
        {updatedItems}
      </div>
    )
  };
};

export default ItemList;
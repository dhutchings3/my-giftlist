import React from 'react';

const Items = ({items, deleteItem}) => {

  const itemsList = items.length ? (
    items.map(item => {
      return (
        <div className="collection-item" key={item.id}>
          <span onClick={() => {deleteItem(item.id)}}>{item.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You must want something, add an item!</p>
  );
  return (
    <div className="items collection">
      {itemsList}
    </div>
  )
}
export default Items;
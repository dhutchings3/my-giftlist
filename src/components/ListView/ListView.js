import React, { Component } from "react";
import Items from "../Items";
import AddItem from "../AddItem/AddItem";
import ListContext from "../ListContext";

class ListView extends Component {
  static contextType = ListContext;

  render() {
    return (
      <div className="ListView">
        <h1 className="center blue-text">Your Christmas List</h1>
        <Items
          items={this.context.items}
          deleteItem={this.context.deleteItem}
        />
        <AddItem addItem={this.context.addItem} />
      </div>
    );
  }
}

export default ListView;

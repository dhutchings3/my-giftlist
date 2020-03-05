import React from "react";
import AppContext from "../../contexts/AppContext";
import "./List.css";

class List extends React.Component {
  static contextType = AppContext;

  static defaultProps = { list: [] };

  render() {

    console.log(this.props.list, "giftlist list");

    const itemsToDisplay = this.props.list.map((listItem, i) => {
      if (typeof listItem.items == "undefined") {
        return (
          <div key={i} className="displayed-items">
            <h2>{listItem.item_name}</h2>
            <div>
              <img src={listItem.graphic} alt="item graphic" />
            </div>
            <div>
              {" "}
              <button
                className="delete-button"
                id={listItem.id}
                onClick={() => this.props.handleRemoveItem(listItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      }

      else {
        return (
          <div key={i} className="displayed-items">
            <h2>{listItem.items.item_name}</h2>
            <div>
              <img src={listItem.items.graphic} alt="item graphic" />
            </div>
            <div>
              {" "}
              <button
                className="delete-button"
                id={listItem.items.id}
                onClick={() => this.props.handleRemoveItem(listItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      }
    });

    return (
      <div>
        <h1>Your Giftlist</h1>
        {itemsToDisplay}
      </div>
    );
  }
}

export default List;

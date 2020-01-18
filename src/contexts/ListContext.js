import React, { Component } from 'react'

const ListContext = React.createContext({
  list: [],
  items: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setList: () => {},
  clearList: () => {},
  addItem: () => {},
  clearItem: () => {},
})

export default ListContext

export class ListProvider extends Component {
  state = {
    list: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setLists = lists => {
    this.setState({ lists })
  }

  setItems = items => {
    this.setState({ items })
  }

  addItem = item => {
    this.setItems([
      ...this.state.items,
      item
    ])
  }

  updateItem = item => {
    this.setItems([
      ...this.state.items,
      item
    ])
  }

  addList = list => {
    this.setComments([
      ...this.state.lists,
      list
    ])
  }

  render() {
    const value = {
      list: this.state.list,
      items: this.state.itemss,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLists: this.setLists,
      setItems: this.setItems,
      addItem: this.addItem,
      addList: this.addList
    }
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    )
  }
}
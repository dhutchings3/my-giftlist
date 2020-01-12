import React, { Component } from 'react'

const ListItemContext = React.createContext({
  listItem: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setListItem: () => {},
})
export default ListItemContext

export class ListItemProvider extends Component {
  state = {
    listItem: [],
    error: null,
  };

  setListItem = listItem => {
    this.setState({ listItem })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      listItem: this.state.listItem,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setListItem: this.setListItem,
    }
    return (
      <ListItemContext.Provider value={value}>
        {this.props.children}
      </ListItemContext.Provider>
    )
  }
}

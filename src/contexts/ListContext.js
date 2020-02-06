import React from 'react';

const ListContext = React.createContext({
  list: [],
  items:[],
  setList: () => {},
  error: null,
})

export default ListContext

export class ListProvider extends React.Component {
  state = {
    list: [],
    error: null,
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setItems = items => {
    this.setState({ items })
  }

  addItem = item => {
    this.setItems([
      ...this.state.list,
      item
    ])
  }

  render() {
    const value = {
      list: this.state.list,
      items: this.state.items,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    )
  }
}
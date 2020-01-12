import React, { Component } from 'react'

export const nullList = {
  author: {},
  tags: [],
}

const ListContext = React.createContext({
  list: nullList,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setList: () => {},
  clearList: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default ListContext

export class ListProvider extends Component {
  state = {
    list: nullList,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setList = list => {
    this.setState({ list })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearList = () => {
    this.setList(nullList)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      list: this.state.list,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setList: this.setList,
      setComments: this.setComments,
      clearList: this.clearList,
      addComment: this.addComment,
    }
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    )
  }
}
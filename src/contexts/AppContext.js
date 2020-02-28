import React from 'react'

const AppContext = React.createContext({
  items: [],
  list: [],
  handleAddtoList: () => {},
  handleRemoveItem: () => {},
  handleAddNewItem: () => {}
})

export default AppContext
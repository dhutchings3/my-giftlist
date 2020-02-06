import React from 'react'

const AppContext = React.createContext({
  items: [],
  list: [],
  handleAddtoList: () => {},
  handleRemoveItem: () => {}
})

export default AppContext
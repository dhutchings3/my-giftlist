import React from 'react'

export default React.createContext({
    items: [],
    notes: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
})
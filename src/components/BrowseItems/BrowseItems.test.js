import React from 'react'
import ReactDOM from 'react-dom'
import BrowseItems from './BrowseItems'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowseItems />, div)
  ReactDOM.unmountComponentAtNode(div)
})
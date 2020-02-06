import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item'

it('renders without crashing', () => {
  const item = {
      id: 1,
      item_name: 'Apple TV',
      graphic: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwii-_qx05DnAhVDeawKHdJhBiUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-tv%2Fapple-tv-hd%2F32gb&psig=AOvVaw2CpYEjEK0jOE__VrWxw_b1&ust=1579557226153888',
      link: 'https://www.bestbuy.com/site/apple-apple-tv-32gb-latest-model-black/5901531.p?skuId=5901531&ref=212&loc=1&extStoreId=1027&ref=212&loc=1&ds_rl=1266837&gclid=Cj0KCQiAmZDxBRDIARIsABnkbYRZFD-Th7TXcie5r7qZDnaZSNA8AbboUNCIMbsWvSNqaK6Hce50q_EaAqdbEALw_wcB&gclsrc=aw.ds',
    }

  const div = document.createElement('div')
  ReactDOM.render(<Item item={item}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
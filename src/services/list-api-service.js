import TokenService from '../services/token-service'
import config from '../config'
// import ItemList from '../components/ItemList/ItemList'

const ListApiService = {
  getListItems() {
    return fetch(`${config.API_ENDPOINT}/items`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getList() {
    return fetch(`${config.API_ENDPOINT}/list`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postListItem(item_id) {
    return fetch(`${config.API_ENDPOINT}/list`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        // id: id,
        // user_id: user_id,
        item_id: item_id
        // giftlist_user: {
        //   id: id,
        //   username: username,
        //   first_name: first_name
        // },
        // items: {
        //   id: id,
        //   item_name: item_name,
        //   grapic: graphic,
        //   link: link
        // }
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  },
  deleteListItem(listItemId) {
    return fetch(`${config.API_ENDPOINT}/list/${listItemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  },
}

export default ListApiService